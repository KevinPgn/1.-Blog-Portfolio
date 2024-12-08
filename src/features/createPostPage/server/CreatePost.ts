"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { generateSlug } from "@/utils/generateSlug"
import { UserProps } from "@/lib/types"
import { getSession } from "@/utils/CacheSession"
import estimateReadingTime from "@/utils/estimatedReadingTime"

export const createPost = authenticatedAction
    .schema(z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        imageUrl: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(),
    }))
    .action(async ({ctx:{userId}, parsedInput:{title, content, imageUrl, description, category}}) => {
        try {
            const session = await getSession()
            const user = session?.user as UserProps
            
            const userIsAdmin = user.role === "admin"
            const userIsContributor = user.role === "approved contributor"
            const slug = generateSlug(title)

            // Vérification de l'existence du slug
            const [userNumberPosts, existingPost] = await Promise.all([
                prisma.post.count({ where: { authorId: userId, published: true } }),
                prisma.post.findUnique({ where: { slug } })
            ])
            if(!existingPost) {
                throw new Error("Un article avec ce titre existe déjà")
            }

            const post = await prisma.$transaction(async (tx) => {
                const newPost = await tx.post.create({
                    data: {
                        title, 
                        content, 
                        imageUrl, 
                        description, 
                        category, 
                        slug, 
                        authorId: userId,
                        published: userIsAdmin || userIsContributor,
                        minRead: estimateReadingTime(content)
                    }
                })

                if ((userIsAdmin || userIsContributor) || userNumberPosts >= 8) {
                    await tx.user.update({
                        where: { id: userId },
                        data: {
                            ...(userIsAdmin || userIsContributor) && { reputationScore: { increment: 5 } },
                            ...(userNumberPosts >= 8) && { role: "approved contributor" }
                        }
                    })
                }
                
                return newPost
            })
            
            revalidatePath("/blog")
            return post
        } catch (error) {
            console.error("Erreur lors de la création du post:", error)
            return { success: false, error: error instanceof Error ? error.message : "Impossible de créer l'article" }
        }
    })