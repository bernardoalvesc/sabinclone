import type { FeaturedProduct } from "./FeaturedCarousel.types";

import batimento from "@/assets/Icons/batimento.svg";
import gestante from "@/assets/Icons/gestante.svg";
import quimica from "@/assets/Icons/quimica.svg";
import tubo from "@/assets/Icons/tubo.svg";

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "1",
    title: "Check-up Maturidade",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    isExclusive: true,
    icon: batimento,
  },
  {
    id: "2",
    title: "Vacina Herpes Zóster - SHINGRIX (Combo de 2 doses para uma pessoa)",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    icon: gestante,
  },
  {
    id: "3",
    title: "Vacina Hepatite B",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    isExclusive: true,
    icon: quimica,
  },
  {
    id: "4",
    title: "Ressonância Magnética",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    isExclusive: true,
    icon: tubo,
  },
];
