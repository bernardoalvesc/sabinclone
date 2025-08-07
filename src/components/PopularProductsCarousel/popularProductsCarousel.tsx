import { useEffect, useRef, useState } from "preact/hooks";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { ProductCard } from "@/components/ProductCard/productCard";
import { productsPage1 } from "@/components/ProductCard/mocks/products-page1";

export const PopularProductsCarousel = () => {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Seleciona 4 produtos aleatórios
  const shuffledProducts = [...productsPage1]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || !splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      perPage: 1,
      gap: "1rem",
      pagination: false,
      arrows: true,
      breakpoints: {
        640: { perPage: 1 },
        768: { perPage: 2 },
      },
      classes: {
        arrows: "splide__arrows custom-arrows",
        arrow: "splide__arrow custom-arrow",
        prev: "splide__arrow--prev",
        next: "splide__arrow--next",
      },
    });

    splide.mount();
  }, [isMobile]);

  return (
    <section className="container mx-auto mb-12 px-4">
      <h2 className="text-lg font-semibold text-[#1e1e1e] mb-4 text-left">
        PRODUTOS MAIS BUSCADOS
      </h2>

      {isMobile ? (
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {shuffledProducts.map((product, idx) => (
                <li className="splide__slide" key={idx}>
                  <ProductCard {...product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {shuffledProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      )}
    </section>
  );
};
