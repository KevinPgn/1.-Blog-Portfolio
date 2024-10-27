import Image from "next/image";
import { Trash } from "lucide-react";

export function PostCard({ category, imageUrl, date, title, description, sessionId, postAuthorId }: any) {
    return (
      <div className="flex flex-col gap-2 p-4 relative z-20 rounded-md hover:bg-[#efeff1] shadow-[3px_5px_0px_7px_#000000] hover:shadow-[5px_10px_15px_10px_#1a1a1d] duration-75 w-[22%] max-2xl:w-[30%] max-md:w-full">
        <div className="absolute top-0 left-0 w-fit border-4 border-black flex items-center justify-center px-10 h-[60px] z-10 rounded-md bg-white -translate-y-2/4 -translate-x-1">
          <span className="text-red-500 text-md uppercase font-semibold">{category}</span>
        </div>
        {sessionId === postAuthorId && (
          <div className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 duration-75 rounded-lg p-2 cursor-pointer">
            <Trash className="w-5 h-5 text-white" />
          </div>
        )}
        <Image src={imageUrl} alt={title} width={1000} height={1000} className="w-full h-[270px] bg-[#1a1a1d] rounded-md object-cover" />
        <div className="flex items-center gap-2">
          <span className="text-gray-700 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold cursor-pointer">{title}</h3>
        <p className="text-gray-500">{description.length > 100 ? description.substring(0, 100) + "..." : description}</p>
      </div>
    );
  }