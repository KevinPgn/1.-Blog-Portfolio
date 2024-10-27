"use server"
import prisma from "@/lib/prisma"
import { cache } from "react"

export const getApprovedContributorPosts = cache(async () => {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        where: { author: { role: 'approved-contributor' } },
        select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            imageUrl: true,
            createdAt: true,
            category: true,
            author: { select: { id: true } }
        },
        take: 8
    })
})