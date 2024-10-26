"use client"
import {useForm} from "react-hook-form"
import {useState, startTransition} from "react"
import { FormLeft } from "./FormLeft"
import { FormRight } from "./FormRight"
import {createPost} from "../server/CreatePost"

export const FormPrincipal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  return <form className="flex items-start gap-10">
  {/* left side */}
  <FormLeft register={register} errors={errors} content={content} setContent={setContent} />

  {/* right side */}
  <FormRight imageUrl={imageUrl} setImageUrl={setImageUrl} />
  </form>
}