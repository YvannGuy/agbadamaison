"use client";

import { Container } from "./Container";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[var(--bg)]/80 border-b border-[var(--cardBorder)]">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="section-title text-[var(--heading)] font-semibold text-lg"
          >
            AGBADA DRESS
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#collection"
              className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
            >
              COLLECTION
            </Link>
            <Link
              href="#savoir-faire"
              className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
            >
              SAVOIR-FAIRE
            </Link>
            <Link
              href="#heritage"
              className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
            >
              HERITAGE
            </Link>
            <Link
              href="#contact"
              className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
            >
              CONTACT
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--heading)] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-[var(--cardBorder)] py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#collection"
                onClick={() => setIsOpen(false)}
                className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
              >
                COLLECTION
              </Link>
              <Link
                href="#savoir-faire"
                onClick={() => setIsOpen(false)}
                className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
              >
                SAVOIR-FAIRE
              </Link>
              <Link
                href="#heritage"
                onClick={() => setIsOpen(false)}
                className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
              >
                HERITAGE
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-[var(--body)] hover:text-[var(--heading)] transition-colors text-sm"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

