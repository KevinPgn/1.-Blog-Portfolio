"use server"
import prisma from "@/lib/prisma"
import { cache } from "react"

export const getContributorPosts = cache(async () => {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        where: { author: { role: 'contributor' } },
        select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            imageUrl: true,
            createdAt: true,
            category: true
        },
        take: 8
    })
})