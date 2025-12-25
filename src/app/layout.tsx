import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AGBADA DRESS",
  description: "Découvrez l'élégance intemporelle de l'Agbada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
