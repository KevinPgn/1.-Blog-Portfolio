"use client"
import { UploadDropzone } from "@/utils/uploadthing"
import Image from "next/image"
import { X } from "lucide-react"
import imageCompression from "browser-image-compression"
import { useState } from "react"

export const FormRight = ({imageUrl, setImageUrl}:{imageUrl:string, setImageUrl:any}) => {
  const [isCompressing, setIsCompressing] = useState<boolean>(false)

  const compressImage = async (file: File) => {
    setIsCompressing(true)
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    
    try {
      const compressedFile = await imageCompression(file, options)
      return compressedFile
    } catch (error) {
      console.error("Error compressing image:", error)
      return file
    } finally {
      setIsCompressing(false)
    }
  }

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
            className="w-full h-auto cursor-pointer rounded-xl"
            endpoint="imageUploader"
            onBeforeUploadBegin={async (files) => {
              const compressedFiles = await Promise.all(
                files.map(async (file) => await compressImage(file))
              )
              return compressedFiles
            }}
            onClientUploadComplete={(res:any)=>{
              setImageUrl(res[0].url)
            }}
            onUploadError={(error:any)=>{
              console.log(error)
            }}
          />
        )}
        {isCompressing && <p className="mt-2 text-sm text-gray-500">Compressing image...</p>}
    </div>
  </div>
}