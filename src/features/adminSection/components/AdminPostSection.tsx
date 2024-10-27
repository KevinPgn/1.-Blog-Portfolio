import Image from "next/image";
import { getLatestAdminPosts } from "../server/getLatestPostAdmin";
import Link from "next/link";

export const AdminPostSection = async () => {
  const adminPosts = await getLatestAdminPosts()
  const [firstPost, ...restPosts] = adminPosts

  return <section className="flex flex-col lg:flex-row items-start gap-7 mb-20 mt-10"> 
   <div className="w-full lg:w-[50%] relative flex flex-col gap-4 shadow-[3px_2px_0px_2px_#000000] hover:shadow-[5px_10px_15px_10px_#1a1a1d] cursor-pointer border-4 border-black p-5 rounded-lg duration-300">        
   <Link href={`/post/${firstPost.slug}`}>
    <Image src={firstPost.imageUrl || ""} alt="Placeholder Image" width={1000} height={1000} className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[#1a1a1d] rounded-lg object-cover"></Image>
          <h2 className="text-xl sm:text-2xl font-bold">{firstPost.title}</h2>
        <p className="text-sm sm:text-base text-gray-500 w-full">
        {firstPost.description}
        </p>       
   </Link>
   </div>

   <div className="w-full lg:w-[50%]">
    {restPosts.map((post) => (
        <Link href={`/post/${post.slug}`}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 py-5 cursor-pointer hover:bg-[#efeff1] p-5 duration-75">
            <Image src={post.imageUrl || ""} alt="Placeholder Image" width={1000} height={1000} className="w-full sm:w-[250px] h-[150px] bg-[#1a1a1d] rounded-md object-cover"></Image>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm sm:text-base">{post.createdAt.toLocaleDateString()}</span>
                  <h2 className="text-lg sm:text-xl font-bold max-w-full sm:w-[400px]">{post.title}</h2>
                <p className="text-sm sm:text-base text-gray-500 w-full">{post.description}</p>
            </div>
        </div>
        </Link>
    ))}
   </div>
  </section>
}