import destaque1 from "@/assets/PopularProducts/destaque_01.png";
import destaque2 from "@/assets/PopularProducts/destaque_02.png";

const highlights = [
  { src: destaque1, alt: "Vacinas para Atletas" },
  { src: destaque2, alt: "Check Up Executivo" },
];

export const HighlightsSection = () => {
  return (
    <section className="container mx-auto flex flex-wrap justify-center gap-4 mb-8">
      {highlights.map(({ src, alt }, index) => (
        <div
          key={index}
          className="w-[560px] h-[210px] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </section>
  );
};
