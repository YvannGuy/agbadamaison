"use client";

import { Container } from "./Container";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[var(--bg)]/80 border-b border-[var(--border)]">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-[var(--text)] font-semibold text-lg">
            AGBADA MAISON
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="#collection"
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
            >
              COLLECTION
            </Link>
            <Link
              href="#savoir-faire"
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
            >
              SAVOIR-FAIRE
            </Link>
            <Link
              href="#heritage"
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
            >
              HERITAGE
            </Link>
            <Link
              href="#contact"
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

