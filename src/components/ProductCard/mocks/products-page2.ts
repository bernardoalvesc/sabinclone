import type { Product } from "../productCard.types";
import vacina from "@/assets/Icons/vacina.svg";
import tubo from "@/assets/Icons/tubo.svg";
import virus from "@/assets/Icons/virus.svg";
import batimento from "@/assets/Icons/batimento.svg";

export const productsPage2: Product[] = [
  {
    title: "Hemograma completo - Adulto",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    icon: tubo,
  },
  {
    title: "Vacina Gripe Quadrivalente 2025",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    icon: vacina,
  },
  {
    title: "Eletrocardiograma",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    icon: batimento,
  },
  {
    title: "Teste COVID Antígeno",
    price: "R$ 120,00",
    originalPrice: "R$ 120,00",
    installments: "ou 10x de R$31,63",
    icon: virus,
  },
];
