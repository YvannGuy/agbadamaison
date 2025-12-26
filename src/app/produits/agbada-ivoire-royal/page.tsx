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
  title: "Caftan Rouge Écarlate | AGBADA DRESS",
  description:
    "Le Caftan Rouge Écarlate incarne une féminité affirmée et une élégance majestueuse. Sa teinte rouge intense, symbole de puissance et de passion.",
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
                src="/images/Modele-1.png"
                alt="Caftan Rouge Écarlate"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div>
              <h1 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 uppercase tracking-wide">
                Caftan Rouge Écarlate
              </h1>
              <p className="text-[var(--body)] text-lg mb-6">
                Élégance moderne et intemporelle
              </p>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Description
                </h2>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  Le Caftan Rouge Écarlate incarne une féminité affirmée et une
                  élégance majestueuse. Sa teinte rouge intense, symbole de
                  puissance et de passion, est sublimée par des broderies
                  raffinées qui structurent délicatement la silhouette.
                </p>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  Confectionné dans un tissu satiné noble, ce caftan offre une
                  fluidité parfaite et un tombé somptueux. Les finitions brodées
                  au niveau de l&apos;encolure, de la poitrine et des manches
                  apportent une touche précieuse, pensée pour les grandes
                  occasions.
                </p>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  Cette pièce est idéale pour celles qui souhaitent allier
                  tradition, modernité et présence charismatique.
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
                      Tissu satiné haut de gamme
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Broderies délicates réalisées avec précision
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Coupe fluide et élégante
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Manches larges avec finitions brodées
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--body)] mr-3">•</span>
                    <span className="text-[var(--body)]">
                      Confort et maintien parfaits
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Occasions
                </h2>
                <p className="text-[var(--body)] leading-relaxed">
                  Mariages, cérémonies officielles, fêtes religieuses,
                  événements prestigieux.
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
              {getPreviousProduit("agbada-ivoire-royal") && (
                <Link
                  href={`/produits/${getPreviousProduit("agbada-ivoire-royal")?.slug}`}
                  className="flex items-center gap-2 text-[var(--body)] hover:text-[var(--heading)] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Précédent</span>
                  <span className="sm:hidden">Préc.</span>
                </Link>
              )}
              {getNextProduit("agbada-ivoire-royal") && (
                <Link
                  href={`/produits/${getNextProduit("agbada-ivoire-royal")?.slug}`}
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

