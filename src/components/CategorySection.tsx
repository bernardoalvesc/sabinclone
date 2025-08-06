import { FunctionalComponent } from "preact";

import covid from "@/assets/Hero/Services/exames.png";
import laboratoriais from "@/assets/Hero/Services/exameslab.png";
import vacinas from "@/assets/Hero/Services/vacinas.png";
import pacotes from "@/assets/Hero/Services/pacote.png";

interface Category {
  id: string;
  image: string;
  width: number;
  height: number;
}

const categories: Category[] = [
  {
    id: "covid",
    image: covid,
    width: 264,
    height: 122,
  },
  {
    id: "laboratoriais",
    image: laboratoriais,
    width: 264,
    height: 122,
  },
  {
    id: "vacinas",
    image: vacinas,
    width: 261,
    height: 125,
  },
  {
    id: "pacotes",
    image: pacotes,
    width: 265,
    height: 120,
  },
];

interface Props {
  onCategoryClick?: (id: string) => void;
}

const CategorySection: FunctionalComponent<Props> = ({ onCategoryClick }) => {
  return (
    <section className="w-full max-w-[1140px] mx-auto px-4 py-8">
      <h3 className="text-xl text-center font-semibold text-gray-800 mb-6">
        O que você precisa o Sabin tem:
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-start">
        {categories.map((category) => (
          <button
            key={category.id}
            className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
            onClick={() => onCategoryClick?.(category.id)}
            style={{
              width: `${category.width}px`,
              height: `${category.height}px`,
            }}
          >
            <img
              src={category.image}
              alt=""
              className="w-full h-full object-fill"
            />
            {/* Linha de hover */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-red-500 transition-all duration-300 group-hover:w-10" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
