import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const occasions = [
  {
    title: "Mariages",
    image: "occasion-1.png",
    text: "Le jour J, pour une union sacrée, l'Agbada est le vêtement d'excellence qui honore ce moment unique, un symbole de prestige et d'élégance.",
  },
  {
    title: "Cérémonies Traditionnelles",
    image: "occasion-2.png",
    text: "Lors des rituels et célébrations, l'Agbada est le vêtement qui incarne la dignité et le respect des traditions ancestrales.",
  },
  {
    title: "Événements Officiels",
    image: "occasion-3.png",
    text: "Pour les réceptions, galas et événements officiels, l'Agbada affirme votre présence, votre dignité et l'importance de ces moments.",
  },
];

export function Occasions() {
  return (
    <section id="occasions" className="py-24 bg-[var(--bg3)]">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] text-center mb-4 uppercase tracking-wide">
          Les Occasions
        </h2>
        <p className="text-[var(--muted)] text-center mb-16">
          L&apos;Agbada transcende le simple vêtement pour devenir le symbole
          des moments les plus marquants de la vie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {occasions.map((occasion, index) => (
            <Card
              key={index}
              className="bg-[var(--card)] border-[var(--border)] overflow-hidden"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={`/images/${occasion.image}`}
                  alt={occasion.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-[var(--text)] font-semibold text-xl mb-3">
                  {occasion.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {occasion.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

