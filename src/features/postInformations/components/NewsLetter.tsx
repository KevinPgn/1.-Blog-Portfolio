import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const NewsLetter = () => {
  return <div className="w-full mt-5">
    <h2 className="text-md font-bold mb-2">Abonnez-vous à ma newsletter</h2>

    <div className="w-full rounded-3xl bg-white shadow-lg p-4">
        <Input type="email" placeholder="Entrez votre email" className="bg-transparent rounded-xl" />
        <Button variant="default" className="w-full rounded-xl mt-5">S'abonner</Button>
    </div>
  </div>
}