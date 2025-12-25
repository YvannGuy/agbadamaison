import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-24 bg-[var(--bg2)]">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-8 uppercase tracking-wide leading-tight">
            Choisir un Agbada,
            <br />
            c&apos;est entrer dans une histoire.
          </h2>
          <Button
            size="lg"
            className="bg-[var(--btn)] text-[var(--btnText)] hover:bg-[var(--btn)]/90 uppercase tracking-wide font-semibold px-8 py-6 text-base"
          >
            COMMANDER UNE PIÈCE
          </Button>
        </div>
      </Container>
    </section>
  );
}

