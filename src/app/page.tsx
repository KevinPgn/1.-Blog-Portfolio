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
    
    <h2 className="text-2xl font-bold mb-5">Admin Post</h2>
    <AdminPostSection />

    <h2 className="text-2xl font-bold my-5">Approved Contributor</h2>
    <ApprovedContributorSection />

    <div className="flex items-center justify-between mt-20">
      <div className="flex flex-col my-5">
        <h2 className="text-2xl font-bold">Contributor</h2>
        <span className="text-gray-500 text-sm">Si tu veux essayer de contribuer, tu peux créer un post et une fois ton post finit
          l'Administrateur pourra le valider ou le refuser. <br /> <br />
          <span className="text-red-400 font-bold text-sm underline">Ce système est pour prévenir les abus. Veuillez me pardonner</span>
        </span>
      </div>
      {session ? <ButtonCreatePost /> : null}
    </div>
    <ContributorSection />
    
    <Footer />
  </div>
  );
}
