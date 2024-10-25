import { AdminPostSection } from "@/features/adminSection/components/AdminPostSection";
import { ApprovedContributorSection } from "@/features/approvedContributorSection/components/ApprovedContributorSection";
import { ButtonCreatePost } from "@/features/contributorSection/components/ButtonCreatePost";
import { ContributorSection } from "@/features/contributorSection/components/ContributorSection";
import { Button } from "@/components/ui/button";
import { getSession } from "@/utils/CacheSession";
import { Footer } from "@/components/footer/Footer";

export default async function Home() {
  const session = await getSession();

  return (
  <div className="max-w-[1600px] mx-auto">

    <div className="flex items-center text-center justify-center flex-col my-10 gap-5">
      <h2 className="text-4xl font-bold uppercase">Un Blog qui Partage Mes Projets et mon évolution</h2> 
      <p className="text-gray-500">Vous pouvez vous abonner afin de suivre ma progression ou sinon vous pouvez tout simplement contribuer à ce blog.</p>
      <div className="flex items-center border border-gray-200 rounded-lg p-1 px-5 justify-between w-[600px] max-md:w-full gap-3">
        <input type="email" placeholder="Email" className="bg-inherit outline-none w-full" />
        <Button variant="default" className="rounded-md">S'abonner</Button>
      </div>
    </div>
    
    <div className="flex items-center justify-between">
      <div className="relative w-[350px] max-md:w-[250px] max-md:mx-auto text-center group">
        <h2 className="text-2xl relative font-bold mb-5 bg-white border-4 z-20 border-black rounded-2xl p-2">Admin Post</h2>
        <div className="absolute top-0 right-0 w-full h-[60px] z-10 rounded-2xl bg-black -rotate-6 group-hover:rotate-6 duration-75"></div>
      </div>
      <Button variant="default" className="rounded-md">Voir plus</Button>
    </div>
    <AdminPostSection />

    <div className="relative w-[350px] max-md:w-[250px] max-md:mx-auto text-center group">
      <h2 className="text-2xl relative font-bold mb-5 bg-white border-4 z-20 border-black rounded-2xl p-2">Approved Contributor</h2>
      <div className="absolute top-0 right-0 w-full h-[60px] z-10 rounded-2xl bg-black -rotate-6 group-hover:rotate-6 duration-75"></div>
    </div>
    <ApprovedContributorSection />

    <div className="flex items-center justify-between mt-20">
    <div className="relative w-[350px] max-md:w-[250px] max-md:mx-auto text-center group">
      <h2 className="text-2xl relative font-bold mb-5 bg-white border-4 z-20 border-black rounded-2xl p-2">Contributor</h2>
      <div className="absolute top-0 right-0 w-full h-[60px] z-10 rounded-2xl bg-black -rotate-6 group-hover:rotate-6 duration-75"></div>
    </div>
    <div className="flex items-center gap-5">
      {session ? <ButtonCreatePost /> : null}
      <Button variant="default" className="rounded-md">Voir plus</Button>
    </div>
    </div>
    <ContributorSection />
    
    <Footer />
  </div>
  );
}
