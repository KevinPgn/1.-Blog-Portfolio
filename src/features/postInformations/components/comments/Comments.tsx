import { PostCommentsProps } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"

export const Comments = ({postComments}: {postComments: PostCommentsProps[]}) => {
  return <>
    {postComments.map((comment) => (
      <div key={comment.id} className="flex items-start gap-4">
        <img src={comment.author.image || ""} alt="user image" className="w-9 h-9 rounded-full" />
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <p className="text-md font-semibold">{comment.author.name}</p>
                <p className="text-sm text-muted-foreground">{formatDistanceToNow(comment.createdAt, {addSuffix: true})}</p>
            </div>
            <p className="text-sm">{comment.content}</p>
        </div>
      </div>
    ))}
  </>
}