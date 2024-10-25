import Image from "next/image";

export const PostEnVedette = () => {
  return <div className="max-w-[1300px] h-[500px] mx-auto bg-[#1a1a1d] rounded-lg mb-20">
    <Image src="/photo-10.jpg" alt="Placeholder Image" width={1000} height={1000} className="w-full h-full rounded-lg object-cover"></Image>
  </div>
}