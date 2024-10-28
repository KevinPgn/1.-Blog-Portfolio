"use server"
import prisma from "@/lib/prisma"
import { cache } from "react"

export const getPost = cache(async (slug: string) => {
    const post = await prisma.post.findUnique({
        where: { slug },
        select: {
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            category: true,
            content: true,
            views: true,
            minRead: true,
            createdAt: true,
            author: { select: { name: true, image: true, bio: true }  },
            comments: {
                select: {
                    id: true,
                    content: true,
                    createdAt: true,
                    author: { select: {name: true, image: true } }
                },
                orderBy: { createdAt: "desc" },
                take: 5
            },
            _count: {
                select: {
                    comments: true
                }
            }   
        }
    })

    return {
        post,
        commentsCount: post?._count.comments
    }
})
