import prisma from "@/lib/prisma"
import { cache } from "react"
import { notFound } from "next/navigation"
import { PostHeader } from "@/features/postInformations/components/PostHeader"
import { Metadata } from "next"

interface PostSlugPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(decodeURIComponent(slug))
    if (!post) return { title: 'Post Not Found' }
  
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        images: [{ url: post.imageUrl || "" }],
      },
    }
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
            author: { select: { name: true, image: true } }
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
    <section className="max-w-[1600px] mx-auto px-2">
        <PostHeader 
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            category={post.category}
            createdAt={post.createdAt}
            minRead={post.minRead}
        />
    </section>
  )
}

export default PostSlugPage