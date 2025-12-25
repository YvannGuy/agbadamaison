import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      <Container className="relative z-10 text-center py-32">
        <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--heading)] mb-8 max-w-4xl mx-auto">
          AGBADA N&apos;EST PAS
          <br />
          UN VÊTEMENT.
          <br />
          C&apos;EST UNE PRÉSENCE.
        </h1>
        <p className="text-[var(--body)] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Chaque Agbada est une pièce unique, portée en toutes occasions.
          Symbole de dignité et de savoir-faire, une maison de création dédiée
          à l&apos;excellence et à l&apos;héritage.
        </p>
        <Link href="#collection">
          <Button
            size="lg"
            className="bg-[var(--btnBg)] text-[var(--btnText)] border border-[var(--btnBorder)] hover:bg-[var(--btnBg)]/90 uppercase tracking-wide font-semibold px-8 py-6 text-base"
          >
            DÉCOUVRIR LA COLLECTION
          </Button>
        </Link>
      </Container>
    </section>
  );
}

