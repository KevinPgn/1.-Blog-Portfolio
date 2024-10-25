"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Links = ({userRole}: {userRole: string}) => {
  const pathname = usePathname();

  return <div className="flex items-center gap-10 max-lg:hidden">
    <Link href="/" className={cn("hover:text-gray-500 duration-75 text-gray-400 uppercase text-md tracking-wider", pathname === "/" && "text-white hover:text-white")}>Blog</Link>
    <Link href="/about-us" className={cn("hover:text-gray-500 duration-75 text-gray-400 uppercase text-md tracking-wider", pathname === "/about-us" && "text-white hover:text-white")}>About Me</Link>
    <Link href="/contact" className={cn("hover:text-gray-500 duration-75 text-gray-400 uppercase text-md tracking-wider", pathname === "/contact" && "text-white hover:text-white")}>Contact</Link>
    <Link href="/contributor" className={cn("hover:text-gray-500 duration-75 text-gray-400 uppercase text-md tracking-wider", pathname === "/contributor" && "text-white hover:text-white")}>Contributor</Link>
    {userRole === "admin" && <Link href="/admin" className={cn("hover:text-gray-500 duration-75 text-gray-400 uppercase text-md tracking-wider", pathname === "/admin" && "text-white hover:text-white")}>Create Post</Link>}
    {userRole === 'admin' && <Link href="/admin/users" className={cn("hover:text-gray-500 duration-75 text-gray-400 uppercase text-md tracking-wider", pathname === "/admin/users" && "text-white hover:text-white")}>Admin Panel</Link>}
  </div>
}

export default Links;