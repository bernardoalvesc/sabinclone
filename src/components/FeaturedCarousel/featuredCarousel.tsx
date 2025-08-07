import { useEffect, useRef } from "preact/hooks";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

import seta from "@/assets/seta.png";
import cartIcon from "@/assets/Vector.svg";
import type { FeaturedCarouselProps } from "./featuredCarousel.types";

export const FeaturedCarousel = ({ products }: FeaturedCarouselProps) => {
  const splideRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      perPage: 4,
      gap: "1rem",
      autoplay: true,
      interval: 5000,
      speed: 800,
      pauseOnHover: true,
      arrows: false,
      pagination: true,
    });

    splide.mount();

    prevBtnRef.current?.addEventListener("click", () => splide.go("<"));
    nextBtnRef.current?.addEventListener("click", () => splide.go(">"));

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-12 bg-[#f3f4f6] font-sans relative">
      {/* Título da sessão */}
      <div className="mb-8 text-left">
        <h2 className="text-[#1e1e1e] text-xl font-bold">EM DESTAQUE</h2>
        <div className="w-14 h-[3px] bg-[#e30613] mt-1" />
      </div>

      {/* Carrossel Splide */}
      <div ref={splideRef} className="splide relative">
        <div className="splide__track">
          <ul className="splide__list">
            {products.map((product) => (
              <li
                key={product.id}
                className="splide__slide bg-white rounded-lg border border-gray-200 w-[260px] h-[174px] px-4 pt-10 pb-4 flex flex-col justify-between relative text-left hover:shadow-md hover:-translate-y-1 transform transition-all duration-300"
              >
                {/* Ícone no canto superior esquerdo */}
                <div className="absolute top-0 left-0 m-0">
                  <img
                    src={product.icon}
                    className="w-6 h-6 object-contain"
                    alt="Ícone"
                  />
                </div>

                {/* Badge no canto superior direito */}
                {product.isExclusive && (
                  <div className="absolute top-[1px] right-[1px]">
                    <div className="bg-[#e30613] text-white text-[10px] font-bold uppercase px-2 py-[2px] rounded-tr-lg rounded-bl-full">
                      SERVIÇO EXCLUSIVO
                    </div>
                  </div>
                )}

                {/* Título */}
                <h3 className="text-sm text-[#1e1e1e] font-bold leading-snug mb-4 min-h-[40px]">
                  {product.title}
                </h3>

                {/* Footer */}
                <div className="flex items-end justify-between w-full mt-auto">
                  <div className="text-left">
                    <div className="text-xs text-black line-through decoration-[#e30613]">
                      {product.originalPrice}
                    </div>
                    <div className="text-base font-bold text-[#1e1e1e]">
                      {product.price}
                    </div>
                    <div className="text-xs text-[#6b7280] font-medium">
                      {product.installments}
                    </div>
                  </div>

                  <button
                    onClick={product.onBuy}
                    className="w-10 h-10 bg-[#3ac092] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <img src={cartIcon} className="w-5 h-5" alt="Carrinho" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Setas externas */}
        <button
          ref={prevBtnRef}
          className="absolute top-1/2 -translate-y-1/2 left-[-20px] w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center shadow z-10"
          aria-label="Anterior"
        >
          <img src={seta} alt="Anterior" className="w-6 h-6 rotate-180" />
        </button>
        <button
          ref={nextBtnRef}
          className="absolute top-1/2 -translate-y-1/2 right-[-20px] w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center shadow z-10"
          aria-label="Próximo"
        >
          <img src={seta} alt="Próximo" className="w-6 h-6" />
        </button>
      </div>

      {/* Paginação (estilizada via Tailwind) */}
      <style>
        {`.splide__pagination {
            @apply mt-6 flex justify-center gap-2;
          }

          .splide__pagination__page {
            @apply w-2.5 h-2.5 rounded-full bg-gray-400 opacity-60 transition-all duration-300;
          }

          .splide__pagination__page.is-active {
            @apply h-3;
          }`}
      </style>
    </section>
  );
};
