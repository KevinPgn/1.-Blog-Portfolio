"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { authenticatedAction } from "@/lib/safe-actions"
import { z } from "zod"

export const createComment = authenticatedAction
    .schema(z.object({
        postId: z.string(),
        content: z.string().min(1).max(1000)
    }))
    .action(async ({parsedInput: {postId, content}, ctx:{userId}}) => {
        const post = await prisma.post.findUnique({ where: {id: postId} })
        if(!post) throw new Error("Post not found")
        
        try{
            await prisma.comment.create({
                data: {content, postId, authorId: userId}
            })
        
            revalidatePath(`/post/${post.slug}`)
            return {success: "Commentaire créé avec succès"}
        } catch(error) {
            console.error("Error while creating comment", error)
            return {error: "Une erreur est survenue lors de la création du commentaire"}
        }
    })