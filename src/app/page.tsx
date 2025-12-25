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
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FadeInSection delay={0}>
        <Essence />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Collection />
      </FadeInSection>
      <FadeInSection delay={200}>
        <SavoirFaire />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Matieres />
      </FadeInSection>
      <FadeInSection delay={200}>
        <Occasions />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Symbole />
      </FadeInSection>
      <FadeInSection delay={200}>
        <FinalCta />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Footer />
      </FadeInSection>
      <ScrollToTop />
    </main>
  );
}
