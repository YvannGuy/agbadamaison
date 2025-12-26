import { Container } from "@/components/layout/Container";
import Image from "next/image";

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="py-24 bg-[var(--bg)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-8 uppercase tracking-wide">
              L&apos;Excellence
            </h2>
            <p className="text-[var(--body)] mb-6 leading-relaxed">
              Chaque Agbada est pensé pour offrir un niveau élevé de qualité,
              tant dans le choix des tissus que dans le rendu final. Les matières
              sont sélectionnées pour leur tenue, leur confort et leur durabilité,
              afin de garantir une pièce élégante qui traverse le temps.
            </p>
            <p className="text-[var(--body)] mb-6 leading-relaxed">
              Les broderies apportent du relief et du caractère, parfaitement
              intégrées aux étoffes pour un rendu harmonieux et structuré.
              L&apos;ensemble offre une silhouette ample, fluide et élégante,
              adaptée aussi bien aux grandes occasions qu&apos;aux moments
              d&apos;exception.
            </p>
            <p className="text-[var(--body)] mb-8 leading-relaxed">
              Des pièces équilibrées, aux lignes maîtrisées, où chaque détail
              contribue à une allure distinguée et affirmée.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[var(--body)] mr-3">✓</span>
                <span className="text-[var(--body)]">
                  Tissus de qualité supérieure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--body)] mr-3">✓</span>
                <span className="text-[var(--body)]">
                  Broderies nettes et précises
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--body)] mr-3">✓</span>
                <span className="text-[var(--body)]">
                  Finitions propres et soignées
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--body)] mr-3">✓</span>
                <span className="text-[var(--body)]">
                  Confort optimal et excellente tenue au porté
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

