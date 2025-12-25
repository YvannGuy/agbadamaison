import { Container } from "@/components/layout/Container";
import Image from "next/image";

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="py-24 bg-[var(--bg)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-8 uppercase tracking-wide">
              Le Savoir-Faire
            </h2>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              Chaque Agbada est le fruit d&apos;un savoir-faire ancestral,
              transmis de génération en génération. Nous sélectionnons les
              meilleurs artisans et les matières les plus nobles pour créer des
              pièces uniques.
            </p>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              Des broderies faites à la main sur tissus sélectionnés avec
              soin, pour un résultat unique.
            </p>
            <p className="text-[var(--muted)] mb-8 leading-relaxed">
              Un artisanat précis, un esthétisme sans contraintes, une maîtrise
              du geste et une excellence qui se transmet de génération en
              génération.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[var(--muted)] mr-3">✓</span>
                <span className="text-[var(--muted)]">
                  Réalisation entièrement faite à la main
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--muted)] mr-3">✓</span>
                <span className="text-[var(--muted)]">
                  Pièces uniques et sur mesure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--muted)] mr-3">✓</span>
                <span className="text-[var(--muted)]">
                  Techniques ancestrales préservées
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--muted)] mr-3">✓</span>
                <span className="text-[var(--muted)]">
                  Détails et finitions impeccables
                </span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/savoir-faire.png"
              alt="Savoir-Faire"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

