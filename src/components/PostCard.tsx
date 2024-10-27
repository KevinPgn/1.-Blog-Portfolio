import Image from "next/image";
import { Trash } from "lucide-react";
import Link from "next/link";

export function PostCard({ category, slug, imageUrl, date, title, description, sessionId, postAuthorId }: any) {
    return (
      <div className="w-[22%] max-2xl:w-[30%] max-md:w-full flex flex-col gap-4 group overflow-hidden relative">
        <Image src={imageUrl} alt={title} width={1000} height={1000} className="w-full h-[350px] rounded-2xl object-cover group-hover:scale-105 duration-300"></Image>
        <div className="flex items-center justify-center bg-red-100 w-fit p-2 px-3 rounded-xl">
          <span className="text-red-400 text-xs uppercase font-semibold">{category}</span>
        </div>
        {sessionId === postAuthorId && (
          <div className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 duration-75 rounded-lg p-2 cursor-pointer">
            <Trash className="w-5 h-5 text-white" />
          </div>
        )}
        <Link href={`/post/${slug}`}>
          <h3 className="text-2xl text-[#12192B] font-bold cursor-pointer">{title}</h3>
        </Link>
        <p className="text-gray-500">{description.length > 100 ? description.substring(0, 100) + "..." : description}</p>
    </div>
    );
  }