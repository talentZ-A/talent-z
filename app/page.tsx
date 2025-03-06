import { Hero } from "@/components/Hero/hero"
import { ServicesSection } from "@/components/services-section"

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <ServicesSection />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
 
      </footer>
    </div>
  );
}
