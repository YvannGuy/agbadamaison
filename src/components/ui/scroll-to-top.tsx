"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[var(--btnBg)] text-[var(--btnText)] border border-[var(--btnBorder)] rounded-full p-3 shadow-lg hover:bg-[var(--btnBg)]/90 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

