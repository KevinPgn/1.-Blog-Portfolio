import prisma from "@/lib/prisma"
import { cache } from "react"
import { notFound } from "next/navigation"
import { PostHeader } from "@/features/postInformations/components/PostHeader"
import { Metadata } from "next"
import { PostContent } from "@/features/postInformations/components/PostContent"
import { PostAuthor } from "@/features/postInformations/components/PostAuthor"
import { NewsLetter } from "@/features/postInformations/components/NewsLetter"
import { getPost } from "@/features/postInformations/server/getPost"

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
        <div className="flex items-start gap-10 w-full mb-10 p-5 py-14 max-lg:flex-col">
            <div className="w-[70%] border-r border-gray-200 max-lg:border-r-0 max-lg:w-full">
                <PostContent content={post.content || ""} />
            </div>
            <div className="w-[30%] max-lg:w-full">
                <PostAuthor 
                    name={post.author?.name || ""}
                    image={post.author?.image || ""}
                    bio={post.author?.bio || ""}
                />
                <NewsLetter />
            </div>
        </div>
    </section>
  )
}

export default PostSlugPage