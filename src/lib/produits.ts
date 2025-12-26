export const produits = [
  {
    slug: "agbada-ivoire-royal",
    name: "Agbada Ivoire Royal",
    image: "collection-1.png",
    description: "Élégance moderne et intemporelle",
  },
  {
    slug: "agbada-indigo-nuit",
    name: "Agbada Indigo Nuit",
    image: "collection-2.png",
    description: "Couleur intense et majestueuse",
  },
  {
    slug: "agbada-bordeaux-sepia",
    name: "Agbada Bordeaux Sépia",
    image: "collection-3.png",
    description: "Raffinement et tradition",
  },
  {
    slug: "agbada-charbon-prestige",
    name: "Agbada Charbon Prestige",
    image: "collection-4.png",
    description: "Sobriété et distinction",
  },
  {
    slug: "agbada-sable-ancien",
    name: "Agbada Sable Ancien",
    image: "collection-5.png",
    description: "Authenticité et caractère",
  },
  {
    slug: "agbada-terre-noble",
    name: "Agbada Terre Noble",
    image: "collection-6.png",
    description: "Force et élégance naturelle",
  },
];

export function getProduitBySlug(slug: string) {
  return produits.find((p) => p.slug === slug);
}

export function getPreviousProduit(slug: string) {
  const index = produits.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const previousIndex = index === 0 ? produits.length - 1 : index - 1;
  return produits[previousIndex];
}

export function getNextProduit(slug: string) {
  const index = produits.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const nextIndex = index === produits.length - 1 ? 0 : index + 1;
  return produits[nextIndex];
}

