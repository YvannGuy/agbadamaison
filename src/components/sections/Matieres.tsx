import { Container } from "@/components/layout/Container";
import Image from "next/image";

export function Matieres() {
  return (
    <section className="py-24 bg-[var(--section)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full order-2 lg:order-1">
            <Image
              src="/images/matieres.png"
              alt="Matières"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-8 uppercase tracking-wide">
              Les Matières
            </h2>
            <p className="text-[var(--body)] mb-6 leading-relaxed">
              Nous sélectionnons avec rigueur les matières les plus nobles,
              issues d&apos;un héritage naturel, mêlant l&apos;authenticité et
              l&apos;innovation. Chaque textile raconte une histoire et
              conserve en lui la richesse de son origine.
            </p>
            <p className="text-[var(--body)] leading-relaxed">
              Des teintures naturelles et des fils précieux, travaillés à la
              main, qui donnent une dimension unique à chaque Agbada. Fierté de
              culture et de savoir-faire.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

