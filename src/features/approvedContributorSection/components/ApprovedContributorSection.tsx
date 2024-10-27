import Image from "next/image";
import { Trash } from "lucide-react";
import { getApprovedContributorPosts } from "../server/getApprovedContributorPosts";
import { PostCard } from "@/components/PostCard";

export const ApprovedContributorSection = async ({ sessionId }: { sessionId: string }) => {
  const approvedContributorPosts = await getApprovedContributorPosts()

  return <section className="max-md:px-2 flex max-2xl:justify-center items-center gap-14 flex-wrap my-20">
    {approvedContributorPosts.map((post) => (
      <PostCard key={post.id} {...post} sessionId={sessionId} postAuthorId={post.author.id}/>
    ))}

    <div className="w-[22%] max-2xl:w-[30%] max-md:w-full flex flex-col gap-4 group overflow-hidden">
      <Image src="/photo-10.jpg" alt="Placeholder Image" width={1000} height={1000} className="w-full h-[350px] rounded-2xl object-cover group-hover:scale-105 duration-300"></Image>
      <div className="flex items-center justify-center bg-red-100 w-fit p-2 px-3 rounded-xl">
        <span className="text-red-400 text-xs uppercase font-semibold">Category</span>
      </div>
      <h3 className="text-2xl text-[#12192B] font-bold cursor-pointer">10 Ways to Take Your Ui Design Game to the Next Level</h3>
      <p className="text-gray-500">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate pariatur nam, quia reiciendis...
      </p>
    </div>

    <div className="w-[22%] max-2xl:w-[30%] max-md:w-full flex flex-col gap-3 group overflow-hidden">
      <Image src="/photo-9.jpg" alt="Placeholder Image" width={1000} height={1000} className="w-full h-[350px] rounded-2xl object-cover group-hover:scale-105 duration-300"></Image>
      <div className="flex items-center justify-center bg-red-100 w-fit p-2 px-3 rounded-xl">
        <span className="text-red-400 text-xs uppercase font-semibold">Category</span>
      </div>
      <h3 className="text-2xl text-[#12192B] font-bold cursor-pointer">10 Ways to Take Your Ui Design Game to the Next Level</h3>
      <p className="text-gray-500">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate pariatur nam, quia reiciendis...
      </p>
    </div>

    <div className="w-[22%] max-2xl:w-[30%] max-md:w-full flex flex-col gap-3 group overflow-hidden">
      <Image src="/photo-3.jpg" alt="Placeholder Image" width={1000} height={1000} className="w-full h-[350px] rounded-2xl object-cover group-hover:scale-105 duration-300"></Image>
      <div className="flex items-center justify-center bg-red-100 w-fit p-2 px-3 rounded-xl">
        <span className="text-red-400 text-xs uppercase font-semibold">Category</span>
      </div>
      <h3 className="text-2xl text-[#12192B] font-bold cursor-pointer">10 Ways to Take Your Ui Design Game to the Next Level</h3>
      <p className="text-gray-500">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate pariatur nam, quia reiciendis...
      </p>
    </div>

    <div className="w-[22%] max-2xl:w-[30%] max-md:w-full flex flex-col gap-3 group overflow-hidden">
      <Image src="/photo-11.jpg" alt="Placeholder Image" width={1000} height={1000} className="w-full h-[350px] rounded-2xl object-cover group-hover:scale-105 duration-300"></Image>
      <div className="flex items-center justify-center bg-red-100 w-fit p-2 px-3 rounded-xl">
        <span className="text-red-400 text-xs uppercase font-semibold">Category</span>
      </div>
      <h3 className="text-2xl text-[#12192B] font-bold cursor-pointer">10 Ways to Take Your Ui Design Game to the Next Level</h3>
      <p className="text-gray-500">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate pariatur nam, quia reiciendis...
      </p>
    </div>

  </section>
}