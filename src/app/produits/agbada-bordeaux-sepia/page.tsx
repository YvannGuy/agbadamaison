import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getPreviousProduit,
  getNextProduit,
} from "@/lib/produits";

export const metadata: Metadata = {
  title: "Agbada Bleu Nuit Impérial | AGBADA DRESS",
  description:
    "L'Agbada Bleu Nuit Impérial séduit par son contraste fort et élégant. Le bleu profond évoque la maîtrise et la modernité.",
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
            <div className="relative aspect-square w-full overflow-hidden rounded-lg group">
              <Image
                src="/images/Modele-3.png"
                alt="Agbada Bleu Nuit Impérial"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div>
              <h1 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 uppercase tracking-wide">
                Agbada Bleu Nuit Impérial
              </h1>
              <p className="text-[var(--body)] text-lg mb-6">
                Sobriété moderne, charisme affirmé
              </p>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Description
                </h2>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  L&apos;Agbada Bleu Nuit Impérial séduit par son contraste fort
                  et élégant. Le bleu profond évoque la maîtrise et la
                  modernité, tandis que les broderies jaunes apportent lumière
                  et caractère à la silhouette.
                </p>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  Conçu pour l&apos;homme confiant et élégant, cet agbada
                  s&apos;impose par sa présence tout en restant raffiné. Une
                  pièce idéale pour ceux qui veulent se distinguer avec
                  subtilité.
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
                      Tissu fluide de haute qualité
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Broderies géométriques modernes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Coupe traditionnelle revisitée
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Excellente tenue dans le temps
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Occasions
                </h2>
                <p className="text-[var(--body)] leading-relaxed">
                  Soirées élégantes, événements professionnels, cérémonies
                  modernes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://paypal.me/votrecompte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="bg-[#0070ba] hover:bg-[#005ea6] text-white border-0 uppercase tracking-wide font-semibold px-8 py-6 text-base w-full"
                  >
                    PayPal
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 uppercase tracking-wide font-semibold px-8 py-6 text-base w-full"
                  >
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--cardBorder)]">
            <div className="flex items-center justify-between">
              {getPreviousProduit("agbada-bordeaux-sepia") && (
                <Link
                  href={`/produits/${getPreviousProduit("agbada-bordeaux-sepia")?.slug}`}
                  className="flex items-center gap-2 text-[var(--body)] hover:text-[var(--heading)] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Précédent</span>
                  <span className="sm:hidden">Préc.</span>
                </Link>
              )}
              {getNextProduit("agbada-bordeaux-sepia") && (
                <Link
                  href={`/produits/${getNextProduit("agbada-bordeaux-sepia")?.slug}`}
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

