"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { generateSlug } from "@/utils/generateSlug"
import { UserProps } from "@/lib/types"
import { getSession } from "@/utils/CacheSession"
import estimateReadingTime from "@/utils/estimatedReadingTime"

/*
model Post {
  id        String @id @default(cuid())
  title     String
  slug      String @unique
  description String?
  content   String?
  imageUrl     String?
  category    String?
  views       Int    @default(0)
  minRead     Int    @default(0)

  published Boolean @default(false)

  comments    Comment[]

  authorId  String
  author    User   @relation(fields: [authorId], references: [id])

  updatedAt DateTime @updatedAt
  createdAt DateTime @default(now())

  @@index([slug])
}
*/

export const createPost = authenticatedAction
    .schema(z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        imageUrl: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(),
    }))
    .action(async ({ctx:{userId}, parsedInput:{title, content, imageUrl, description, category}}) => {
        const session = await getSession()
        const user = session?.user as UserProps
        
        const userIsAdmin = user.role === "admin"
        const userIsContributor = user.role === "approved contributor"
        const slug = generateSlug(title)

        const post = await prisma.post.create({
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

        revalidatePath(`/blog/${post.slug}`)
        return post
    })