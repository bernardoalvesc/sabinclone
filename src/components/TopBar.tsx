import librasIcon from "@/assets/BarraTopo/libras.svg";
import acessibilidadeIcon from "@/assets/BarraTopo/acessibilidade.svg";

export function TopBar() {
  return (
    <header className="bg-white text-sm text-gray-800">
      <div className="relative w-full max-w-[1140px] mx-auto px-4 h-12 flex items-center font-['Roboto']">
        <div className="flex gap-6 tracking-normal text-[12px] leading-[28px]">
          <a href="#">PORTAL SABIN</a>
          <a href="#">IR PARA O BLOG</a>
          <a href="#">RESULTADO DE EXAMES</a>
        </div>

        <button
          className="absolute left-1/2 -translate-x-1/2 text-white text-[12px] leading-[28px] font-['Roboto']"
          style={{
            backgroundColor: "#5C5F69",
            width: "194px",
            height: "30px",
            borderRadius: "9999px",
          }}
        >
          <div className="flex items-center justify-center gap-1">
            Você está em Brasília <span className="text-xs">▼</span>
          </div>
        </button>

        <div className="ml-auto flex items-center gap-3">
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
            <img src={librasIcon} alt="Ícone Libras" className="w-5 h-5" />
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
              alt="Ícone Acessibilidade"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
