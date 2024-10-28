"use client"
import { Textarea } from "@/components/ui/textarea"
import {useForm} from "react-hook-form"
import { Button } from "@/components/ui/button"
import { startTransition } from "react"

export const CommentsForm = ({ sessionImage }: { sessionImage: string }) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm()

  return <>
    <h3 className="text-lg font-bold my-5">Laisse un commentaire !</h3>
    
    <div className="w-[700px] bg-white shadow-lg rounded-2xl border border-gray-200 p-4 mx-auto flex items-start gap-3 mt-3">
        <img src={sessionImage} alt="user image" className="w-10 h-10 rounded-full" />
        <div className="w-full flex items-end">
            <Textarea placeholder="Laissez un commentaire..." {...register("content", {required: true})} className="border-none resize-none" />
            <Button type="submit" className="bg-red-500 hover:bg-red-600 duration-300 active:scale-95 rounded-full">Envoyer</Button>
        </div>
    </div>
  </>
}