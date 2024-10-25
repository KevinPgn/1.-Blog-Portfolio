import { AdminPostSection } from "@/features/adminSection/components/AdminPostSection";
import { ApprovedContributorSection } from "@/features/approvedContributorSection/components/ApprovedContributorSection";

export default function Home() {
  return (
  <div className="mx-14 max-md:mx-2">
    <div className="mt-5 border-t border-b py-4 mb-10 border-gray-700">
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[350px] font-extrabold text-center">THE BLOG</h1>
    </div>
    
    <h2 className="text-2xl font-bold my-5">Admin Post</h2>
    <AdminPostSection />

    <h2 className="text-2xl font-bold my-5">Approved Contributor</h2>
    <ApprovedContributorSection />
  </div>
  );
}
