import Link from "next/link";
import Links from "./Links";
import { UserProps } from "@/lib/types";
import { getSession } from "@/utils/CacheSession";

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user as UserProps;

  return <header className="h-24 border-b border-[#202020]">
    <nav className="flex items-center justify-between h-full px-10">
        <div className="flex items-center gap-10">
            <Link href="/" className="p-2 font-bold text-lg rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-[#EC407A] to-[#FF4500] text-white">
                <span>KB</span>
            </Link>
            <Links userRole={user ? user.role : ''}/>
        </div>

        <div>

        </div>
    </nav>
  </header>;
}