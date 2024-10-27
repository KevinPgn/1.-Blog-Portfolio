"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LinksItems = [
    {id: 1, name: "Blog", href: "/" },
    {id: 2, name: "About Me", href: "/about-us" },
    {id: 3, name: "Contact", href: "/contact" },
    {id: 4, name: "Contributor", href: "/contributor" },
    {id: 5, name: "Portfolio", href: "/portfolio" },
]

const Links = ({userRole}: {userRole: string}) => {
  const pathname = usePathname();

  return <div className="flex items-center gap-10 max-lg:hidden">
    {LinksItems.map((item) => (
      <Link key={item.id} href={item.href} className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === item.href && "text-blue-500 underline hover:text-blue-500")}>{item.name}</Link>
    ))}
    {userRole === "admin" && <Link href="/create" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/create" && "text-blue-500 underline hover:text-blue-500")}>Create Post</Link>}
    {userRole === 'admin' && <Link href="/admin/users" className={cn("hover:text-gray-500 text-sm font-semibold duration-75 uppercase text-md tracking-wider", pathname === "/admin/users" && "text-blue-500 underline hover:text-blue-500")}>Admin Panel</Link>}
  </div>
}

export default Links;