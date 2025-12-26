import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-24 bg-[var(--section)]">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-[var(--heading)] mb-8 uppercase tracking-wide leading-tight">
            Choisir un Agbada,
            <br />
            c&apos;est entrer dans une histoire.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://paypal.me/votrecompte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0070ba] hover:bg-[#005ea6] text-white border-0 uppercase tracking-wide font-semibold px-8 py-6 text-base w-full sm:w-auto"
              >
                PayPal
              </Button>
            </Link>
            <Link
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 uppercase tracking-wide font-semibold px-8 py-6 text-base w-full sm:w-auto"
              >
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

