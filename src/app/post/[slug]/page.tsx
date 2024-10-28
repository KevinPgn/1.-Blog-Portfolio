import { notFound } from "next/navigation"
import { PostHeader } from "@/features/postInformations/components/PostHeader"
import { Metadata } from "next"
import { PostContent } from "@/features/postInformations/components/PostContent"
import { PostAuthor } from "@/features/postInformations/components/PostAuthor"
import { NewsLetter } from "@/features/postInformations/components/NewsLetter"
import { getPost } from "@/features/postInformations/server/getPost"
import { generateMetadata } from "@/lib/metadata"
import { getSession } from "@/utils/CacheSession"
import { CommentsForm } from "@/features/postInformations/components/comments/CommentsForm"
import { CommentsList } from "@/features/postInformations/components/comments/CommentsList"
import { Suspense } from "react"

interface PostSlugPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadataForPost({ params }: PostSlugPageProps): Promise<Metadata> {
    return await generateMetadata({ params })
}

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params

  const {post, commentsCount} = await getPost(decodeURIComponent(slug))
  const session = await getSession()

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
                {session ? <CommentsForm sessionImage={session.user?.image || ""} postId={post.id} /> : (
                  <div className="w-full mt-10 mb-5">
                    <h3 className="text-lg font-bold text-center">Connectez-vous pour laisser un commentaire !</h3>
                  </div>
                )}
                <Suspense fallback={<div>Chargement des commentaires...</div>}>
                  <CommentsList postComments={post.comments} commentsCount={commentsCount} />
                </Suspense>
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