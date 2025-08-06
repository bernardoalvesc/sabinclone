export interface FeaturedProduct {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  installments: string;
  isExclusive?: boolean;
  icon: string;
  onBuy?: () => void;
}

export interface FeaturedCarouselProps {
  products: FeaturedProduct[];
}
