import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="py-24 bg-[var(--bg)] min-h-screen flex items-center">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 uppercase tracking-wide">
              Produit introuvable
            </h1>
            <p className="text-[var(--body)] mb-8">
              Le produit que vous recherchez n&apos;existe pas ou a été déplacé.
            </p>
            <Link href="/#collection">
              <Button
                size="lg"
                className="bg-[var(--btnBg)] text-[var(--btnText)] border border-[var(--btnBorder)] hover:bg-[var(--btnBg)]/90 uppercase tracking-wide font-semibold px-8 py-6 text-base"
              >
                RETOUR À LA COLLECTION
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

