export const produits = [
  {
    slug: "agbada-ivoire-royal",
    name: "Caftan Rouge Écarlate",
    image: "Modele-1.png",
    description: "Élégance moderne et intemporelle",
  },
  {
    slug: "agbada-indigo-nuit",
    name: "Caftan Rose Nude Bicolore",
    image: "Modele-2.png",
    description: "Douceur, finesse et modernité",
  },
  {
    slug: "agbada-bordeaux-sepia",
    name: "Agbada Bleu Nuit Impérial",
    image: "Modele-3.png",
    description: "Sobriété moderne, charisme affirmé",
  },
  {
    slug: "agbada-charbon-prestige",
    name: "Agbada Rose Corail",
    image: "Modele-4.png",
    description: "Sobriété et distinction",
  },
  {
    slug: "agbada-sable-ancien",
    name: "Agbada Ivoire Or Royal",
    image: "Modele-5.png",
    description: "Puissance, prestige et élégance intemporelle",
  },
  {
    slug: "agbada-terre-noble",
    name: "Agbada Ivoire Terre d'Origine",
    image: "Modele-6.png",
    description: "L'authenticité africaine dans toute sa noblesse",
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

