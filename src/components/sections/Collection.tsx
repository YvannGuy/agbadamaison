import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "Agbada Ivoire Royal",
    image: "collection-1.png",
    description: "Élégance moderne et intemporelle",
  },
  {
    name: "Agbada Indigo Nuit",
    image: "collection-2.png",
    description: "Couleur intense et majestueuse",
  },
  {
    name: "Agbada Bordeaux Sépia",
    image: "collection-3.png",
    description: "Raffinement et tradition",
  },
  {
    name: "Agbada Charbon Prestige",
    image: "collection-4.png",
    description: "Sobriété et distinction",
  },
  {
    name: "Agbada Sable Ancien",
    image: "collection-5.png",
    description: "Authenticité et caractère",
  },
  {
    name: "Agbada Terre Noble",
    image: "collection-6.png",
    description: "Force et élégance naturelle",
  },
];

export function Collection() {
  return (
    <section id="collection" className="py-24 bg-[var(--bg3)]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4 uppercase tracking-wide">
            La Collection
          </h2>
          <p className="text-[var(--muted)]">
            Chaque pièce est une œuvre unique, conçue avec des matières nobles
            et un savoir-faire d&apos;exception.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-[var(--card)] border-[var(--border)] overflow-hidden"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={`/images/${product.image}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-[var(--text)] font-semibold text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

