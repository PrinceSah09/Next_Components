import Image from "next/image";
import { ThreeDCardDemo } from "@/components/ui/ThreeDCardDemo";
import { BentoGridThirdDemo } from "@/components/ui/BentoGridThirdDemo";
import Cards from "@/components/ui/Cards";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import MeteorCards from "@/components/ui/MeteorCards"; 
export default function Home() {
  return (
    <>
      <div> 
        <MeteorCards />
        <ThreeDCardDemo />
        <GlobeDemo />
        <Cards />
        <BentoGridThirdDemo />
      </div>
    </>
  );
}
