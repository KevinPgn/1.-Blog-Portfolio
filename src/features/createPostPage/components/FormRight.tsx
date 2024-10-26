"use client"
import { UploadDropzone } from "@/utils/uploadthing"
import Image from "next/image"
import { X } from "lucide-react"
export const FormRight = ({imageUrl, setImageUrl}:{imageUrl:string, setImageUrl:any}) => {
  return <div className="w-[40%]">
    <div className="w-full h-full p-4 bg-white shadow-xl rounded-xl">
      <h2 className="text-lg font-semibold">Featured Image</h2>
      <div className="w-full h-[1px] bg-gray-200 my-2"></div>
      {imageUrl ? (
        <div className="w-full h-auto relative">
          <Image src={imageUrl} alt="featured image" width={1000} height={1000} className="w-full h-auto object-cover" />
          <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full" onClick={()=>setImageUrl('')}>
            <X size={16} />
          </button>
        </div>
      ): (
        <UploadDropzone
        className="w-full h-auto cursor-pointer"
        endpoint="imageUploader"
        onClientUploadComplete={(res:any)=>{
          setImageUrl(res[0].url)
        }}
        onUploadError={(error:any)=>{
          console.log(error)
        }}
      />
      )}
    </div>
  </div>
}