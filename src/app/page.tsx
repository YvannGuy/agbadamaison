import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Essence } from "@/components/sections/Essence";
import { Collection } from "@/components/sections/Collection";
import { SavoirFaire } from "@/components/sections/SavoirFaire";
import { Matieres } from "@/components/sections/Matieres";
import { Occasions } from "@/components/sections/Occasions";
import { Symbole } from "@/components/sections/Symbole";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Essence />
      <Collection />
      <SavoirFaire />
      <Matieres />
      <Occasions />
      <Symbole />
      <FinalCta />
      <Footer />
    </main>
  );
}
