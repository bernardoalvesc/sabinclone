export interface FeaturedProduct {
  id: number;
  title: string;
  icon: string;
  isExclusive: boolean;
  originalPrice: string;
  price: string;
  installments: string;
  onBuy: () => void;
}

export interface FeaturedCarouselProps {
  products: FeaturedProduct[];
}
