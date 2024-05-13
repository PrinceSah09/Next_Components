import Image from "next/image";
import { ThreeDCardDemo } from "@/components/ui/ThreeDCardDemo";
import { BentoGridThirdDemo } from "@/components/ui/BentoGridThirdDemo";
import Cards from "@/components/ui/Cards";

export default function Home() {
  return (
    <>
      <div>

        <ThreeDCardDemo />
        <Cards />
        <BentoGridThirdDemo />
      </div>
    </>
  );
}
