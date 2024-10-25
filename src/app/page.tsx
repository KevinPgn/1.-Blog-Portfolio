import { AdminPostSection } from "@/features/adminSection/components/AdminPostSection";
import { ApprovedContributorSection } from "@/features/approvedContributorSection/components/ApprovedContributorSection";
import { ButtonCreatePost } from "@/features/contributorSection/components/ButtonCreatePost";
import { ContributorSection } from "@/features/contributorSection/components/ContributorSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSession } from "@/utils/CacheSession";

export default async function Home() {
  const session = await getSession();

  return (
  <div className="mx-14 max-md:mx-2">
    <div className="mt-5 border-t border-b py-4 mb-10 border-gray-700">
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[350px] font-extrabold text-center">THE BLOG</h1>
    </div>
    
    <h2 className="text-2xl font-bold my-5">Admin Post</h2>
    <AdminPostSection />

    <h2 className="text-2xl font-bold my-5">Approved Contributor</h2>
    <ApprovedContributorSection />

    <div className="flex items-center justify-between mt-20">
      <div className="flex flex-col my-5">
        <h2 className="text-2xl font-bold">Contributor</h2>
        <span className="text-gray-400 text-sm">Si tu veux essayer de contribuer, tu peux créer un post et une fois ton post finit
          l'Administrateur pourra le valider ou le refuser. <br /> <br />
          <span className="text-red-300 text-sm underline">Ce système est pour prévenir les abus. Veuillez me pardonner</span>
        </span>
      </div>
      {session ? <ButtonCreatePost /> : null}
    </div>
    <ContributorSection />

    <section className="w-[1400px] mx-auto flex items-center justify-around my-20 bg-[#1a1a1d] p-10 rounded-md">
      <div className="flex flex-col gap-2 w-[450px]">
        <h2 className="text-2xl font-bold">Rejoins ma newsletter</h2>
        <p className="text-gray-500">Rejoins ma newsletter pour ne rien manquer des nouveaux posts avenir <span className="text-red-300">(je ne spammerais pas promis)</span></p>
      </div>

      <div className="w-[550px] flex items-center gap-2">
        <Input type="email" placeholder="Email" className="rounded-md bg-inherit border-gray-700" />
        <Button variant="outline" className="rounded-md text-black">S'abonner</Button>
      </div>
    </section>
  </div>
  );
}
