import prisma from "@/lib/prisma"
import { cache } from "react"
import { notFound } from "next/navigation"

interface PostSlugPageProps {
    params: Promise<{
        slug: string
    }>
}

const getPost = cache(async (slug: string) => {
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
            author: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
    return post
})

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = await getPost(decodedSlug)

  if(!post) {
    notFound()
  }

  return (
    <div>PostSlugPage</div>
  )
}

export default PostSlugPage