import type { FunctionalComponent } from "preact";
import librasIcon from "@/assets/TopBar/libras.svg";
import acessibilidadeIcon from "@/assets/TopBar/acessibilidade.svg";

type TopBarProps = {
  currentCity?: string;
};

export const TopBar: FunctionalComponent<TopBarProps> = ({
  currentCity = "Brasília",
}) => {
  return (
    <header className="bg-white text-sm text-gray-800">
      <div className="relative w-full max-w-[1140px] mx-auto px-4 h-12 flex items-center font-['Roboto']">
        {/* Links (desktop only) */}
        <nav className="hidden md:flex gap-6 tracking-normal text-[12px] leading-[28px]">
          <a href="#">PORTAL SABIN</a>
          <a href="#">IR PARA O BLOG</a>
          <a href="#">RESULTADO DE EXAMES</a>
        </nav>

        {/* Seletor de localização */}
        <button
          className={`
            flex items-center justify-center text-white text-[12px] leading-[28px] font-['Roboto']
            ${"md:absolute md:left-1/2 md:-translate-x-1/2"}
            ${"md:w-[194px] md:h-[30px] md:gap-1"}
            ${"w-[100px] h-[28px] justify-start px-3 md:px-0"}
          `}
          style={{
            backgroundColor: "#5C5F69",
            borderRadius: "9999px",
          }}
          aria-label={`Você está em ${currentCity}`}
        >
          <span className="hidden md:inline">Você está em</span>
          <span>{currentCity}</span>
          <span className="text-xs">▼</span>
        </button>

        {/* Ações à direita */}
        <div className="ml-auto flex items-center">
          {/* Versão desktop: botões com texto */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="flex items-center justify-center gap-2 text-gray-800 text-[12px] leading-[28px] font-['Roboto']"
              style={{
                width: "112.7px",
                height: "34px",
                borderRadius: "9999px",
                backgroundColor: "#F3F3F3",
              }}
            >
              <span>Libras</span>
              <img src={librasIcon} alt="Libras" className="w-5 h-5" />
            </button>
            <button
              className="flex items-center justify-center gap-2 text-gray-800 text-[12px] leading-[28px] font-['Roboto']"
              style={{
                width: "171.61px",
                height: "34px",
                borderRadius: "9999px",
                backgroundColor: "#F3F3F3",
              }}
            >
              <span>Acessibilidade</span>
              <img
                src={acessibilidadeIcon}
                alt="Acessibilidade"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Versão mobile: apenas ícones */}
          <div className="flex md:hidden items-center gap-3">
            <button aria-label="Libras">
              <img src={librasIcon} alt="" className="w-5 h-5" />
            </button>
            <button aria-label="Acessibilidade">
              <img src={acessibilidadeIcon} alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
