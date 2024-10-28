"use client"
import {Input} from "@/components/ui/input" 
import {Label} from "@/components/ui/label"
import {Select, SelectItem, SelectContent, SelectTrigger, SelectValue} from "@/components/ui/select"
import CategoryList from "@/data/CategoryList"
import Editor from "./TiptapEditor"

export const FormLeft = ({register, errors, content, setContent, category, setCategory}:{register:any, errors:any, content:string, setContent:any, category:string, setCategory:any}) => {
  return <div className="w-[60%] bg-white rounded-xl shadow-md p-6">
    <div className="flex flex-col gap-2 mt-2"> 
        <Label className="text-md">Title <span className="text-red-500">*</span></Label>
        <Input 
        className="bg-white shadow-sm text-sm p-3 py-5 rounded-lg py-[23px]"
        placeholder="e.g. My first post"
        {...register("title", {required:"Title is required", minLength:{value:5, message:"Title must be at least 5 characters long"}})} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
    </div>

    <div className="flex flex-col gap-2 mt-7">
        <Label className="text-md">Description <span className="text-red-500">*</span></Label>
        <Input 
        className="bg-white shadow-sm text-sm p-3 py-5 rounded-lg"
        placeholder="e.g. This is a description of my first post"
        {...register("description", {required:"Description is required", minLength:{value:15, message:"Description must be at least 5 characters long"}})} />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
    </div>

    <div className="flex flex-col gap-2 mt-7">
        <Label className="text-md">Category <span className="text-red-500">*</span></Label>
        <Select
        onValueChange={(value)=>setCategory(value)}
        defaultValue={category}
        >
            <SelectTrigger className="bg-white shadow-sm text-sm p-3 py-5 rounded-lg">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-sm text-sm p-3 py-5 rounded-lg">
            {CategoryList.map((category, index)=>(
                <SelectItem className="cursor-pointer text-md hover:bg-gray-100 rounded-xl" key={index} value={category.name}>{category.name}</SelectItem>
            ))}
            </SelectContent>
        </Select>
    </div>

    <div className="flex flex-col gap-2 mt-7">
        <Label className="text-md">Content <span className="text-red-500">*</span></Label>
        <Editor onChange={setContent} content={content} />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
    </div>
  </div>
}