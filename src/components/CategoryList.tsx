"use client"
import { CategoryList as CategoryListData } from "@/data/CategoryList";
import { Button } from "@/components/ui/button";

export const CategoryList = () => {
  return <div className="flex items-center gap-5 flex-wrap">
    {CategoryListData.map((category) => (
      <Button key={category.id} variant="outline" className="text-sm shadow-lg active:scale-90 duration-75 px-7">{category.name}</Button>
    ))}
  </div>
}