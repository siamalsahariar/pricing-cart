import { Pricing } from "@/components/component/component";
import  ShareButton  from "@/components/component/share-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Pricing />
      <ShareButton />
    </main>
  );
}
