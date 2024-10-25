"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Plus } from "lucide-react"

export const ButtonCreatePost = () => {
  const router = useRouter()

  return <>
    <Button variant="outline" onClick={() => router.push("/create-post")} className="flex items-center gap-1 text-black">
      <Plus size={20} />
    </Button>
  </>
}