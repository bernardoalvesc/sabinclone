import batimento from "@/assets/Icons/batimento.svg";
import vacina from "@/assets/Icons/vacina.svg";
import tubo from "@/assets/Icons/tubo.svg";
import virus from "@/assets/Icons/virus.svg";

import type { FeaturedProduct } from "./featuredCarousel.types";

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    title: "Check-up Maturidade",
    icon: batimento,
    isExclusive: true,
    originalPrice: "R$ 129,00",
    price: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    onBuy: () => alert("Comprar Check-up Maturidade"),
  },
  {
    id: 2,
    title: "Vacina Herpes Zóster - SHINGRIX (Combo de 2 doses para uma pessoa)",
    icon: vacina,
    isExclusive: false,
    originalPrice: "R$ 129,00",
    price: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    onBuy: () => alert("Comprar SHINGRIX"),
  },
  {
    id: 3,
    title: "Vacina Hepatite B",
    icon: tubo,
    isExclusive: true,
    originalPrice: "R$ 129,00",
    price: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    onBuy: () => alert("Comprar Hepatite B"),
  },
  {
    id: 4,
    title: "Ressonância Magnética",
    icon: virus,
    isExclusive: true,
    originalPrice: "R$ 129,00",
    price: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    onBuy: () => alert("Comprar Ressonância"),
  },
];
