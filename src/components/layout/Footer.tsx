import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--section)] border-t border-[var(--cardBorder)] py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-[var(--heading)] font-semibold text-lg mb-4">
              AGBADA DRESS
            </h3>
            <p className="text-[var(--body)] text-sm leading-relaxed">
              Maison de création dédiée à l&apos;art et à l&apos;héritage de
              l&apos;Agbada. Chaque collection est une célébration de
              l&apos;élégance intemporelle et du savoir-faire.
            </p>
          </div>
          <div>
            <h4 className="text-[var(--heading)] font-medium mb-4 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#collection"
                  className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="#savoir-faire"
                  className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
                >
                  Savoir-faire
                </Link>
              </li>
              <li>
                <Link
                  href="#heritage"
                  className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
                >
                  Héritage
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
                >
                  Commander
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--heading)] font-medium mb-4 uppercase">
              Contact
            </h4>
            <p className="text-[var(--body)] text-sm mb-4">+33 6 00 00 00 00</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--cardBorder)]">
          <p className="text-center text-[var(--muted)] text-sm">
            © 2023 Agbada Dress. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}

