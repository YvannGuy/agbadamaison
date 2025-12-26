import { Container } from "@/components/layout/Container";

const occasions = [
  {
    title: "Mariages",
    text: "Le jour J, pour une union sacrée, l'Agbada est le vêtement d'excellence qui honore ce moment unique, un symbole de prestige et d'élégance.",
  },
  {
    title: "Cérémonies Traditionnelles",
    text: "Lors des rituels et célébrations, l'Agbada est le vêtement qui incarne la dignité et le respect des traditions ancestrales.",
  },
  {
    title: "Événements Officiels",
    text: "Pour les réceptions, galas et événements officiels, l'Agbada affirme votre présence, votre dignité et l'importance de ces moments.",
  },
];

export function Occasions() {
  return (
    <section id="occasions" className="py-24 bg-[var(--section2)]">
      <Container>
        <h2 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] text-center mb-4 uppercase tracking-wide">
          Les Occasions
        </h2>
        <p className="text-[var(--body)] text-center mb-16">
          L&apos;Agbada transcende le simple vêtement pour devenir le symbole
          des moments les plus marquants de la vie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {occasions.map((occasion, index) => (
            <div key={index} className="text-center">
              <h3 className="text-[var(--heading)] font-semibold text-xl mb-4">
                {occasion.title}
              </h3>
              <p className="text-[var(--body)] leading-relaxed">
                {occasion.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

