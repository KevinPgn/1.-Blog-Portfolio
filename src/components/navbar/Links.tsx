"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Links = ({userRole}: {userRole: string}) => {
  const pathname = usePathname();

  return <div className="flex items-center gap-10 max-lg:hidden">
    <Link href="/" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/" && "text-blue-500 underline hover:text-blue-500")}>Blog</Link>
    <Link href="/about-us" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/about-us" && "text-blue-500 underline hover:text-blue-500")}>About Me</Link>
    <Link href="/contact" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/contact" && "text-blue-500 underline hover:text-blue-500")}>Contact</Link>
    <Link href="/contributor" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/contributor" && "text-blue-500 underline hover:text-blue-500")}>Contributor</Link>
    {userRole === "admin" && <Link href="/create" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/admin" && "text-blue-500 underline hover:text-blue-500")}>Create Post</Link>}
    {userRole === 'admin' && <Link href="/admin/users" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/admin/users" && "text-blue-500 underline hover:text-blue-500")}>Admin Panel</Link>}
  </div>
}

export default Links;