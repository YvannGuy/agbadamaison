import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const produits = {
  "agbada-ivoire-royal": {
    name: "Agbada Ivoire Royal",
    image: "collection-1.png",
    description: "Élégance moderne et intemporelle",
    fullDescription:
      "L'Agbada Ivoire Royal incarne l'élégance dans sa forme la plus pure. Conçu avec des matières nobles et un savoir-faire d'exception, cette pièce unique allie modernité et tradition. Chaque détail a été pensé pour vous offrir une expérience vestimentaire incomparable.",
    caracteristiques: [
      "Tissu noble sélectionné avec soin",
      "Broderies réalisées à la main",
      "Finitions impeccables",
      "Coupe sur mesure disponible",
    ],
  },
  "agbada-indigo-nuit": {
    name: "Agbada Indigo Nuit",
    image: "collection-2.png",
    description: "Couleur intense et majestueuse",
    fullDescription:
      "L'Agbada Indigo Nuit vous transporte dans un univers de sophistication. Sa couleur profonde et majestueuse évoque la noblesse et le prestige. Une pièce signature qui affirme votre présence avec élégance.",
    caracteristiques: [
      "Teinture naturelle de qualité exceptionnelle",
      "Broderies artisanales uniques",
      "Textile haut de gamme",
      "Résistant et durable",
    ],
  },
  "agbada-bordeaux-sepia": {
    name: "Agbada Bordeaux Sépia",
    image: "collection-3.png",
    description: "Raffinement et tradition",
    fullDescription:
      "L'Agbada Bordeaux Sépia allie raffinement et tradition dans une harmonie parfaite. Cette pièce exceptionnelle honore l'héritage culturel tout en s'adaptant aux codes contemporains. Un vêtement qui raconte une histoire.",
    caracteristiques: [
      "Matières nobles sélectionnées",
      "Techniques ancestrales préservées",
      "Design intemporel",
      "Confort exceptionnel",
    ],
  },
  "agbada-charbon-prestige": {
    name: "Agbada Charbon Prestige",
    image: "collection-4.png",
    description: "Sobriété et distinction",
    fullDescription:
      "L'Agbada Charbon Prestige incarne la sobriété élégante et la distinction. Sa couleur charbon apporte une touche de modernité tout en conservant la noblesse de l'Agbada traditionnel. Une pièce qui s'impose par sa simplicité raffinée.",
    caracteristiques: [
      "Tissu premium résistant",
      "Broderies discrètes et élégantes",
      "Coupe contemporaine",
      "Polyvalent pour toutes occasions",
    ],
  },
  "agbada-sable-ancien": {
    name: "Agbada Sable Ancien",
    image: "collection-5.png",
    description: "Authenticité et caractère",
    fullDescription:
      "L'Agbada Sable Ancien puise son inspiration dans l'authenticité et le caractère des traditions ancestrales. Sa couleur sable évoque la terre et les racines, créant un lien profond avec l'héritage culturel. Une pièce qui respire l'authenticité.",
    caracteristiques: [
      "Matières naturelles authentiques",
      "Broderies traditionnelles",
      "Style intemporel",
      "Pièce unique et exclusive",
    ],
  },
  "agbada-terre-noble": {
    name: "Agbada Terre Noble",
    image: "collection-6.png",
    description: "Force et élégance naturelle",
    fullDescription:
      "L'Agbada Terre Noble allie force et élégance dans une création exceptionnelle. Sa couleur terre évoque la stabilité et la noblesse, tandis que son design contemporain apporte une touche de modernité. Une pièce qui incarne la puissance tranquille.",
    caracteristiques: [
      "Textile de qualité supérieure",
      "Broderies raffinées",
      "Coupe structurée",
      "Présence imposante",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(produits).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const produit = produits[params.slug as keyof typeof produits];

  if (!produit) {
    return {
      title: "Produit introuvable | AGBADA DRESS",
    };
  }

  return {
    title: `${produit.name} | AGBADA DRESS`,
    description: produit.fullDescription,
  };
}

export default function ProduitPage({
  params,
}: {
  params: { slug: string };
}) {
  const produit = produits[params.slug as keyof typeof produits];

  if (!produit) {
    notFound();
  }

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
                src={`/images/${produit.image}`}
                alt={produit.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h1 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 uppercase tracking-wide">
                {produit.name}
              </h1>
              <p className="text-[var(--body)] text-lg mb-6">
                {produit.description}
              </p>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Description
                </h2>
                <p className="text-[var(--body)] leading-relaxed mb-6">
                  {produit.fullDescription}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-[var(--heading)] font-semibold text-xl mb-4">
                  Caractéristiques
                </h2>
                <ul className="space-y-3">
                  {produit.caracteristiques.map((carac, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--body)] mr-3">•</span>
                      <span className="text-[var(--body)]">{carac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                className="bg-[var(--btnBg)] text-[var(--btnText)] border border-[var(--btnBorder)] hover:bg-[var(--btnBg)]/90 uppercase tracking-wide font-semibold px-8 py-6 text-base w-full md:w-auto"
              >
                COMMANDER UNE PIÈCE
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

