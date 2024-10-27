"use client"
import {useForm} from "react-hook-form"
import {useState, startTransition} from "react"
import { FormLeft } from "./FormLeft"
import { FormRight } from "./FormRight"
import {createPost} from "../server/CreatePost"
import {Button} from "@/components/ui/button"

export const FormPrincipal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  const handleCreatePost = async (data:any) => {
    try{
      setIsLoading(true)
     const test = await createPost({...data, imageUrl, content, category})
     console.log(test)
     setIsLoading(false)
      reset()
    }catch(error){
      console.log(error)
      setIsLoading(false)
    }
  }

  return <form onSubmit={handleSubmit(handleCreatePost)} className="mb-5">
  {/* left side */}
  <div className="flex items-start gap-10">
    <FormLeft register={register} errors={errors} content={content} setContent={setContent} category={category} setCategory={setCategory} />
    <FormRight imageUrl={imageUrl} setImageUrl={setImageUrl} />
  </div>

    <Button disabled={imageUrl === ""} type="submit" className="mt-5 px-10">Create Post</Button>
  </form>
}