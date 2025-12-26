import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Caftan Rouge Écarlate",
    slug: "agbada-ivoire-royal",
    image: "Modele-1.png",
    description: "Élégance moderne et intemporelle",
  },
  {
    name: "Caftan Rose Nude Bicolore",
    slug: "agbada-indigo-nuit",
    image: "Modele-2.png",
    description: "Douceur, finesse et modernité",
  },
  {
    name: "Agbada Bleu Nuit Impérial",
    slug: "agbada-bordeaux-sepia",
    image: "Modele-3.png",
    description: "Sobriété moderne, charisme affirmé",
  },
  {
    name: "Agbada Rose Corail",
    slug: "agbada-charbon-prestige",
    image: "Modele-4.png",
    description: "Sobriété et distinction",
  },
  {
    name: "Agbada Ivoire Or Royal",
    slug: "agbada-sable-ancien",
    image: "Modele-5.png",
    description: "Puissance, prestige et élégance intemporelle",
  },
  {
    name: "Agbada Ivoire Terre d'Origine",
    slug: "agbada-terre-noble",
    image: "Modele-6.png",
    description: "L'authenticité africaine dans toute sa noblesse",
  },
];

export function Collection() {
  return (
    <section id="collection" className="py-24 bg-[var(--section2)]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 uppercase tracking-wide">
            La Collection
          </h2>
          <p className="text-[var(--body)]">
            Chaque pièce est une œuvre unique, conçue avec des matières nobles
            et un savoir-faire d&apos;exception.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/produits/${product.slug}`}
              className="group"
            >
              <Card className="bg-[var(--cardBg)] border-[var(--cardBorder)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 cursor-pointer h-full flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-[var(--heading)] font-semibold text-lg mb-2 group-hover:text-[var(--heading)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[var(--body)] text-sm">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-center">
                  <span className="text-[var(--body)] group-hover:text-[var(--heading)] transition-colors text-sm uppercase tracking-wide">
                    VOIR LA PIÈCE
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

