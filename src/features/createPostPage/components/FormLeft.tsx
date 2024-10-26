"use client"
import {Input} from "@/components/ui/input" 
import {Label} from "@/components/ui/label"
import {Select, SelectItem, SelectContent, SelectTrigger, SelectValue} from "@/components/ui/select"
import CategoryList from "@/data/CategoryList"
import Editor from "./TiptapEditor"

export const FormLeft = ({register, errors, content, setContent, category, setCategory}:{register:any, errors:any, content:string, setContent:any, category:string, setCategory:any}) => {
  return <div className="w-[60%]">
    <div className="flex flex-col gap-2 mt-7">
        <Label>Title <span className="text-red-500">*</span></Label>
        <Input 
        placeholder="e.g. My first post"
        {...register("title", {required:"Title is required", minLength:{value:5, message:"Title must be at least 5 characters long"}})} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
    </div>

    <div className="flex flex-col gap-2 mt-7">
        <Label>Description <span className="text-red-500">*</span></Label>
        <Input 
        placeholder="e.g. This is a description of my first post"
        {...register("description", {required:"Description is required", minLength:{value:15, message:"Description must be at least 5 characters long"}})} />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
    </div>

    <div className="flex flex-col gap-2 mt-7">
        <Label>Category <span className="text-red-500">*</span></Label>
        <Select
        onValueChange={(value)=>setCategory(value)}
        defaultValue={category}
        >
            <SelectTrigger>
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
            {CategoryList.map((category, index)=>(
                <SelectItem key={index} value={category.name}>{category.name}</SelectItem>
            ))}
            </SelectContent>
        </Select>
    </div>

    <div className="flex flex-col gap-2 mt-7">
        <Label>Content <span className="text-red-500">*</span></Label>
        <Editor onChange={setContent} content={content} />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
    </div>
  </div>
}