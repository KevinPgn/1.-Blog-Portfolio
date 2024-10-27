"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { getSession } from "@/utils/CacheSession"
import { UserProps } from "@/lib/types"

export const getAllPostsNoPublished = cache(async () => {
    const posts = await prisma.post.findMany({
        where: {published: false}
    })

    return posts
})

export const putThePostPublished = authenticatedAction
    .schema(z.object({
        postId: z.string()
    }))
    .action(async ({parsedInput:{postId}, ctx:{userId}}) => {
        const session = await getSession()
        const user = session?.user as UserProps

        const isAdmin = user.role === "admin"

        const post = await prisma.post.findUnique({
            where: {id: postId}
        })

        if(!post) {
            return {error: "Post not found"}
        }

        if(isAdmin){
            await prisma.post.update({
                where: {id: postId},
                data: {published: true}
            })
        } else {
            return {error: "Vous n'avez pas les permissions pour publier un article, uniquement les admins peuvent le faire"}
        }

        revalidatePath("/")
    })