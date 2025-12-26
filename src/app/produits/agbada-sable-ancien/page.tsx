import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getPreviousProduit,
  getNextProduit,
} from "@/lib/produits";

export const metadata: Metadata = {
  title: "Agbada Sable Ancien | AGBADA DRESS",
  description:
    "L'Agbada Sable Ancien puise son inspiration dans l'authenticité et le caractère des traditions ancestrales.",
};

export default function ProduitPage() {
  return (
    <main>
      <Navbar />
      <section className="py-24 bg-[var(--bg)]">
        <Container>
          <Link
            href="/#collection"
            className="inline-flex items-center gap-2 text-[var(--body)] hover:text-[var(--heading)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/collection-5.png"
                alt="Agbada Sable Ancien"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h1 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 uppercase tracking-wide">
                Agbada Sable Ancien
              </h1>
              <p className="text-[var(--body)] text-lg mb-6">
                Authenticité et caractère
              </p>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Description
                </h2>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  L&apos;Agbada Sable Ancien puise son inspiration dans
                  l&apos;authenticité et le caractère des traditions ancestrales.
                  Sa couleur sable évoque la terre et les racines, créant un lien
                  profond avec l&apos;héritage culturel. Une pièce qui respire
                  l&apos;authenticité.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Caractéristiques
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Matières naturelles authentiques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Broderies traditionnelles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Style intemporel
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Pièce unique et exclusive
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-6">
                  Occasions
                </h2>
                <Card className="bg-[var(--cardBg)] border-[var(--cardBorder)] overflow-hidden max-w-md">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/occasion-2.png"
                      alt="Cérémonies Traditionnelles"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-[var(--heading)] font-semibold text-xl mb-3">
                      Cérémonies Traditionnelles
                    </h3>
                    <p className="text-[var(--body)] text-sm leading-relaxed">
                      Lors des rituels et célébrations, l&apos;Agbada est le
                      vêtement qui incarne la dignité et le respect des
                      traditions ancestrales.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button
                size="lg"
                className="bg-[var(--btnBg)] text-[var(--btnText)] border border-[var(--btnBorder)] hover:bg-[var(--btnBg)]/90 uppercase tracking-wide font-semibold px-8 py-6 text-base w-full md:w-auto"
              >
                COMMANDER UNE PIÈCE
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--cardBorder)]">
            <div className="flex items-center justify-between">
              {getPreviousProduit("agbada-sable-ancien") && (
                <Link
                  href={`/produits/${getPreviousProduit("agbada-sable-ancien")?.slug}`}
                  className="flex items-center gap-2 text-[var(--body)] hover:text-[var(--heading)] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Précédent</span>
                  <span className="sm:hidden">Préc.</span>
                </Link>
              )}
              {getNextProduit("agbada-sable-ancien") && (
                <Link
                  href={`/produits/${getNextProduit("agbada-sable-ancien")?.slug}`}
                  className="flex items-center gap-2 text-[var(--body)] hover:text-[var(--heading)] transition-colors ml-auto"
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <span className="sm:hidden">Suiv.</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

