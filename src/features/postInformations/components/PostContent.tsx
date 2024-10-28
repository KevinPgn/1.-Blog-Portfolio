export const PostContent = ({content}: {content: string | null}) => {
  return (
    <div className="w-full mx-auto px-4">
      <div 
        className="prose sm:prose-base lg:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: content || "" }}
      />
    </div>
  )
}
