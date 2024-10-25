import { CategoryList as CategoryListData } from "@/data/CategoryList";
import Link from "next/link";

export const CategoryList = () => {
  return <div className="flex items-center gap-5 flex-wrap mt-10">
    {CategoryListData.map((category) => (
      <div key={category.id} className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-10 rounded-md bg-black -rotate-6 group-hover:rotate-6 duration-75"></div>
        <Link href={`/category/${category.name}`} className="bg-white border-4 border-black relative z-20 rounded-md p-2 px-5 text-black cursor-pointer hover:bg-gray-200 duration-75">
          <span className="text-sm">{category.name}</span>
        </Link>
      </div>
    ))}
  </div>
}