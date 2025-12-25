import { Container } from "@/components/layout/Container";
import Image from "next/image";

export function Symbole() {
  return (
    <section id="heritage" className="py-24 bg-[var(--bg)]">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] text-center mb-12 uppercase tracking-wide">
          L&apos;Agbada, Un Symbole
        </h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-[var(--muted)] text-center mb-6 leading-relaxed">
            Plus qu&apos;un vêtement, l&apos;Agbada est un héritage culturel qui
            traverse les siècles. Il incarne la sagesse des anciens, la force
            des traditions et la fierté d&apos;un peuple.
          </p>
          <p className="text-[var(--muted)] text-center mb-6 leading-relaxed">
            Porté par les rois, les chefs spirituels et les hommes
            d&apos;honneur, l&apos;Agbada est le vêtement d&apos;excellence par
            excellence africaine, un symbole de pouvoir, de respect et de
            savoir-faire.
          </p>
          <p className="text-[var(--muted)] text-center leading-relaxed">
            Choisir un Agbada de notre maison, c&apos;est honorer cette tradition
            et affirmer sa place dans une lignée de grandeur.
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto mb-8">
          <Image
            src="/images/symbole.png"
            alt="Symbole"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <blockquote className="text-center italic text-[var(--muted)] text-lg max-w-2xl mx-auto mb-2">
          &quot;L&apos;Agbada n&apos;est pas seulement porté sur le corps, il
          est porté dans l&apos;âme.&quot;
        </blockquote>
        <p className="text-center text-[var(--subtle)] text-sm">
          PROVERBE ANCIEN
        </p>
      </Container>
    </section>
  );
}

