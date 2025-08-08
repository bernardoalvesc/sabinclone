import { useEffect, useRef } from "preact/hooks";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

import banner1 from "@/assets/Hero/banner1.png";
import banner2 from "@/assets/Hero/banner2.png";
import banner3 from "@/assets/Hero/banner3.png";
import seta from "@/assets/seta.png";
import newad from "@/assets/Hero/newad.png";

const banners = [
  { id: "outubro-rosa", image: banner1 },
  { id: "novo-servico", image: banner2 },
  { id: "promocional", image: banner3 },
];

export const HeroBanner = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splide = new Splide("#hero-splide", {
      type: "loop",
      autoplay: true,
      interval: 2000,
      arrows: true,
      pagination: true,
    });

    splide.on("move", () => {
      if (progressRef.current) {
        progressRef.current.classList.remove("animate-progress");
        // trigger reflow to restart the animation
        void progressRef.current.offsetWidth;
        progressRef.current.classList.add("animate-progress");
      }
    });

    splide.mount();
  }, []);

  return (
    <section className="w-full px-4 lg:px-8 py-6">
      <div className="container mx-auto flex gap-6 justify-center">
        {/* Carrossel Splide */}
        <div className="relative w-[754px] h-[244px] rounded-[20px] overflow-hidden">
          <div id="hero-splide" className="splide w-full h-full">
            <div className="splide__track">
              <ul className="splide__list">
                {banners.map((banner) => (
                  <li className="splide__slide" key={banner.id}>
                    <img
                      src={banner.image}
                      alt="Banner"
                      className="w-[754px] h-[244px] object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Botões personalizados */}
            <div className="splide__arrows absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
              <button className="splide__arrow splide__arrow--prev w-10 h-10">
                <img
                  src={seta}
                  className="w-full h-full rotate-180"
                  alt="Anterior"
                />
              </button>
              <button className="splide__arrow splide__arrow--next w-10 h-10">
                <img src={seta} className="w-full h-full" alt="Próximo" />
              </button>
            </div>
          </div>

          {/* Progress Bar animada */}
          <div
            ref={progressRef}
            className="absolute bottom-0 left-0 h-[4px] bg-red-500 animate-progress"
          />
        </div>

        {/* Espaço para anúncio */}
        <div className="w-[361px] h-[244px]">
          <img
            src={newad}
            alt="Anúncio"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};
