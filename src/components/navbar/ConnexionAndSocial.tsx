import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SignInButton } from "@/features/auth/SignInButton";
import { UserProps } from "@/lib/types";
import { SignOutButton } from "@/features/auth/SignOutButton";

export const ConnexionAndSocial = ({user}: {user: UserProps | null}) => {
  return <div className="flex items-center gap-5">
    <FaXTwitter size={24} className="hover:text-gray-500 duration-75 cursor-pointer"/>
    <FaDiscord size={24} className="hover:text-gray-500 duration-75 cursor-pointer"/>
    {user ? <SignOutButton /> : <SignInButton />}
  </div>
}