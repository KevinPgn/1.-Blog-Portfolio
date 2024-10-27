interface PostSlugPageProps {
    params: Promise<{
        slug: string
    }>
}

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params

  return (
    <div>PostSlugPage</div>
  )
}

export default PostSlugPage