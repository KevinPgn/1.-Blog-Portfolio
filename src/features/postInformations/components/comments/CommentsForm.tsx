"use client"
import { Textarea } from "@/components/ui/textarea"
import {useForm} from "react-hook-form"
import { Button } from "@/components/ui/button"
import { startTransition } from "react"
import { createComment } from "../../server/createComments"
import { useState } from "react"
import { error } from "console"

export const CommentsForm = ({ sessionImage, postId }: { sessionImage: string, postId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      setIsLoading(true)
      await createComment({content: data.content, postId: postId})
      reset()
      setIsLoading(false)
    })
  })

  return <>
    <h3 className="text-lg font-bold my-5">Laisse un commentaire !</h3>
    
    <form onSubmit={onSubmit} className="w-[700px] max-lg:w-full bg-white shadow-lg rounded-2xl border border-gray-200 p-4 mx-auto flex items-start gap-3 mt-3">
        <img src={sessionImage} alt="user image" className="w-10 h-10 rounded-full" />
        <div className="w-full flex items-end">
            <div className="flex flex-col gap-2 w-full">
                <Textarea placeholder="Laissez un commentaire..." {...register("content", {required: true, minLength: 1, maxLength: 1000})} className="border-none resize-none" />
                {errors.content && <p className="text-red-500 text-sm">Le commentaire est requis</p>}
            </div>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 duration-300 active:scale-95 rounded-full" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  </div>
                ) : "Envoyer"}
            </Button>
        </div>
    </form>
  </>
}