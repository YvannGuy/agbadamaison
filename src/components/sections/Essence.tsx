import { Container } from "@/components/layout/Container";
import { Sparkles, Crown, Hammer } from "lucide-react";

export function Essence() {
  const items = [
    {
      icon: Sparkles,
      title: "Héritage",
      text: "Un symbole de dignité transmis à travers les générations.",
    },
    {
      icon: Crown,
      title: "Dignité",
      text: "Une coupe noble, une présence qui impose le respect.",
    },
    {
      icon: Hammer,
      title: "Artisanat",
      text: "Broderies et finitions réalisées avec précision.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg)]">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] text-center mb-8 uppercase tracking-wide">
          L&apos;Essence de l&apos;Agbada
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-24 h-[1px] bg-[var(--border)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-[var(--text)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

