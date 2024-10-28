import { PostCommentsProps } from "@/lib/types"

export const Comments = ({postComments}: {postComments: PostCommentsProps[]}) => {
  return <>
    {postComments.map((comment) => (
      <div key={comment.id}>
        <p>{comment.content}</p>
        <p>{comment.author.name}</p>
      </div>
    ))}
  </>
}