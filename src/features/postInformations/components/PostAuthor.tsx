import { PostAuthorProps } from "@/lib/types"

export const PostAuthor = ({ name, image, bio }: PostAuthorProps) => {
  return <div className="w-full border-b border-gray-200 pb-10">
    <h2 className="text-md font-bold mb-2">Écrit par</h2>
    <div className="flex items-center gap-4 mt-10">
        <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1">
            <h1 className="text-md font-bold">{name}</h1>
            <p className="text-gray-500">{bio ? bio : "Aucune biographie disponible"}</p>
        </div>
    </div>
  </div>
}