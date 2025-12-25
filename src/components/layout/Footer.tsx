import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--bg2)] border-t border-[var(--border)] py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-[var(--text)] font-semibold text-lg mb-4">
              AGBADA MAISON
            </h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Maison de création dédiée à l&apos;art et à l&apos;héritage de
              l&apos;Agbada. Chaque collection est une célébration de
              l&apos;élégance intemporelle et du savoir-faire.
            </p>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-medium mb-4 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#collection"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="#savoir-faire"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
                >
                  Savoir-faire
                </Link>
              </li>
              <li>
                <Link
                  href="#heritage"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
                >
                  Héritage
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
                >
                  Commander
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-medium mb-4 uppercase">
              Contact
            </h4>
            <p className="text-[var(--muted)] text-sm mb-2">
              contact@agbadamaison.com
            </p>
            <p className="text-[var(--muted)] text-sm mb-4">+33 6 00 00 00 00</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-center text-[var(--subtle)] text-sm">
            © 2023 Agbada Maison. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}

