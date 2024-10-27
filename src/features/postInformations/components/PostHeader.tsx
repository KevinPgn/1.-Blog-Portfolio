import { PostHeaderProps } from "@/lib/types"
import Image from "next/image"

export const PostHeader = ({ title, description, imageUrl, category, createdAt, minRead }: PostHeaderProps) => {
  return <div className="w-full h-[80vh] rounded-3xl relative">
    <Image src={imageUrl || ""} alt={title} fill className="object-cover rounded-3xl w-full h-full filter brightness-50" />
    <div className="w-[70%] max-md:w-full absolute bottom-0 left-0 rounded-3xl p-8">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-white text-lg font-light mt-4">{description}</p>
        <div className="flex items-center gap-4 mt-4">
            <p className="text-white text-md font-normal border border-white px-5 cursor-pointer py-1 rounded-xl">{category}</p>
            <p className="text-white text-md font-normal border border-white px-5 cursor-pointer py-1 rounded-xl">{createdAt.toLocaleDateString()}</p>
            <p className="text-white text-md font-normal border border-white px-5 cursor-pointer py-1 rounded-xl">{minRead} min read</p>
        </div>
    </div>
  </div>
}