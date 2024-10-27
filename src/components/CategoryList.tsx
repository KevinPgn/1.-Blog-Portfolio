"use client"
import { CategoryList as CategoryListData } from "@/data/CategoryList";
import { Button } from "@/components/ui/button";

export const CategoryList = () => {
  return <div className="flex items-center gap-5 flex-wrap mt-10">
    {CategoryListData.map((category) => (
      <Button key={category.id} variant="default" className="text-sm active:scale-95 duration-75 bg-blue-600 text-white px-7 hover:bg-blue-800">{category.name}</Button>
    ))}
  </div>
}