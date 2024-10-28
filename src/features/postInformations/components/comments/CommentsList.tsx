import { PostCommentsProps } from "@/lib/types"
import { Comments } from "./Comments"

export function CommentsList({postComments, commentsCount}: {postComments: PostCommentsProps[], commentsCount: number | undefined}) {
  if (!postComments.length) {
    return <p className="text-muted-foreground text-center mt-4">Aucun commentaire pour le moment</p>
  }

  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Commentaires ({commentsCount})</h2>
      <Comments postComments={postComments} />
    </section>
  )
}