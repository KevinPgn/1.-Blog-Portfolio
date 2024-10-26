"use server"
import prisma from "@/lib/prisma"
import { cache } from "react"

export const getLatestAdminPosts = cache(async () => {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        where: { author: { role: 'admin' } },
        select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            imageUrl: true,
            createdAt: true
        },
        take: 4
    })
})