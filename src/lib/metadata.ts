import { Metadata } from "next"
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