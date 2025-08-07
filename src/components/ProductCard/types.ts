export interface Product {
  title: string;
  price?: string;
  originalPrice?: string;
  installments?: string;
  isOutOfStock?: boolean;
  isNewService?: boolean;
  isExclusive?: boolean;
  icon?: string;
  onBuy?: () => void;
  onLearnMore?: () => void;
  onNotifyMe?: () => void;
}
