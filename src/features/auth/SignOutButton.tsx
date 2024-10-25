"use client"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export const SignOutButton = () => {
  return <Button variant="destructive" className="px-5" onClick={() => signOut()}>Logout</Button>
}