import { Hero } from "@/components/Hero/hero";
import { TextileLifecycle } from "@/components/Infographics/TextileLifecycle";
import { TextileRecyclingInfographic } from "@/components/Infographics/TextileRecyclingInfographic";
import { TextileWasteVisualization } from "@/components/Infographics/TextileWasteVisualization";
import { TextileEffect } from "@/components/TextileEffect/textile-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TextileWasteVisualization />
      <TextileLifecycle />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <p className="my-16">Test</p>
        <p className="my-16">Test</p>
        <p className="my-16">Test</p>
        <p className="my-16">Test</p>
        <p className="my-16">Test</p>
        <p className="my-16">Test</p>
        <p className="my-16">Test</p>
    <TextileEffect />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
 
      </footer>
    </div>
  );
}
