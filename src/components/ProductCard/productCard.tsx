import { ComponentChildren } from "preact";
import type { Product } from "./types";
import { Button } from "@/components/ui/Button";
import cartIcon from "@/assets/Vector.svg";

export const ProductCard = ({
  title,
  price,
  originalPrice,
  installments,
  isOutOfStock,
  isNewService,
  isExclusive,
  icon,
  onBuy,
  onLearnMore,
  onNotifyMe,
}: Product) => {
  return (
    <div className="w-[260px] h-[283px] bg-white rounded-lg border border-[#E5E5E5] px-4 pt-10 pb-4 flex flex-col justify-between relative text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Ícone superior esquerdo (20x20) */}
      {icon && (
        <div className="absolute top-[1px] left-[1px]">
          <img src={icon} className="w-5 h-5 object-contain" alt="Ícone" />
        </div>
      )}

      {/* Badge superior direito */}
      {isExclusive && (
        <div className="absolute top-[1px] right-[1px]">
          <div className="bg-[#e30613] text-white text-[10px] font-bold uppercase px-2 py-[2px] rounded-tr-lg rounded-bl-full">
            SERVIÇO EXCLUSIVO
          </div>
        </div>
      )}
      {isNewService && (
        <div className="absolute top-[1px] right-[1px]">
          <div className="bg-[#FFA726] text-white text-[10px] font-bold uppercase px-2 py-[2px] rounded-tr-lg rounded-bl-full">
            NOVO SERVIÇO
          </div>
        </div>
      )}

      {/* Título */}
      <h3 className="text-base text-[#1e1e1e] font-medium leading-snug mb-2 min-h-[48px]">
        {title}
      </h3>

      {/* Fora de estoque */}
      {isOutOfStock && (
        <div className="bg-[#F0F2F7] text-[#9B51DF] text-center text-xs font-medium py-2 px-2 rounded-md mb-2">
          Serviço fora de estoque
          <br />
          no momento.
        </div>
      )}

      {/* Preço */}
      <div className="mt-auto mb-2">
        {originalPrice && (
          <div className="text-xs text-black line-through decoration-[#e30613]">
            {originalPrice}
          </div>
        )}
        <div className="text-base font-bold text-[#1e1e1e]">{price}</div>
        {installments && (
          <div className="text-xs text-[#6b7280] font-medium">
            {installments}
          </div>
        )}
      </div>

      {/* Botões */}
      <div className="flex gap-2">
        <Button variant="outline" onClick={onLearnMore}>
          Saiba mais
        </Button>

        {isOutOfStock ? (
          <Button
            variant="disabled" // continua usando o estilo de "cinza desativado"
            onClick={onNotifyMe}
            className="cursor-pointer"
          >
            Avise-me
          </Button>
        ) : (
          <Button variant="filled" onClick={onBuy}>
            <img src={cartIcon} alt="Carrinho" className="w-4 h-4" />
            Comprar
          </Button>
        )}
      </div>
    </div>
  );
};
