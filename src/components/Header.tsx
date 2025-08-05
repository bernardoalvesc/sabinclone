import { useState, useRef, useEffect } from "preact/hooks";
import logo from "@/assets/Header/Logo.png";
import cartIcon from "@/assets/Header/carrinho.png";
import userIcon from "@/assets/Header/user.svg";
import menuIcon from "@/assets/Header/menu.png";
import searchIcon from "@/assets/Header/search.svg";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(0);

  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: Event) => {
    e.preventDefault();
    console.log("Buscando por:", searchQuery);
  };

  // Fecha dropdown da conta ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(e.target as Node)
      ) {
        setIsAccountDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Logo + Loja Virtual */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo Sabin" className="w-28 h-auto" />
          <span className="text-sm font-light text-gray-800">
            | LOJA VIRTUAL
          </span>
        </div>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 flex max-w-2xl bg-white border border-gray-300 rounded-full overflow-hidden"
        >
          <input
            type="search"
            value={searchQuery}
            onInput={(e) =>
              setSearchQuery((e.target as HTMLInputElement).value)
            }
            placeholder="O que você procura?"
            className="flex-1 px-5 py-2 text-gray-700 placeholder-gray-400 outline-none"
            aria-label="Buscar produtos e serviços"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-r-full flex items-center justify-center"
            aria-label="Buscar"
          >
            <img src={searchIcon} alt="Buscar" className="w-5 h-5" />
          </button>
        </form>

        {/* Conta do usuário + dropdown ao clique */}
        <div className="relative" ref={accountRef}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsAccountDropdownOpen((prev) => !prev)}
          >
            <div className="flex flex-col items-end text-sm text-right">
              <div className="uppercase font-medium text-gray-800 hover:text-red-500">
                ENTRE / CADASTRE-SE
              </div>
              <div className="text-xs text-gray-500">MINHA CONTA</div>
            </div>
            <img
              src={userIcon}
              alt="Ícone de usuário"
              className="w-6 h-6 hidden lg:block"
            />
            <img
              src={menuIcon}
              alt="Menu"
              className="w-6 h-6 hidden lg:block"
            />
          </div>

          {/* Dropdown da conta */}
          {isAccountDropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="text-gray-700 text-sm divide-y divide-gray-200">
                <li>
                  <a
                    href="/login"
                    className="block px-4 py-3 hover:bg-gray-100 text-center uppercase font-medium"
                  >
                    ENTRE/CADASTRE-SE
                  </a>
                </li>
                <li>
                  <a
                    href="/pedidos"
                    className="block px-4 py-3 hover:bg-gray-100 text-center"
                  >
                    MEUS PEDIDOS
                  </a>
                </li>
                <li>
                  <a
                    href="/cadastro"
                    className="block px-4 py-3 hover:bg-gray-100 text-center"
                  >
                    MEU CADASTRO
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Carrinho de compras com dropdown ao hover no texto */}
        <div className="relative w-[100px] h-[100px] rounded-lg bg-red-500 flex flex-col items-center justify-center text-white hover:opacity-90 transition">
          {/* Ícone do carrinho */}
          <img
            src={cartIcon}
            alt="Carrinho"
            className="w-[40px] h-[40px] object-contain"
          />
          <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-gray-800 text-white text-xs flex items-center justify-center font-bold z-10">
            {cartCount}
          </span>

          {/* Texto + hover trigger */}
          <div className="relative group mt-1">
            <div className="text-[11px] text-center leading-tight font-medium cursor-pointer group-hover:underline">
              MINHAS<br />COMPRAS
            </div>

            {/* Dropdown visível no hover do texto */}
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <ul className="text-gray-700 text-sm divide-y divide-gray-200">
                <li>
                  <a
                    href="/login"
                    className="block px-4 py-3 hover:bg-gray-100 text-center uppercase font-medium"
                  >
                    ENTRE/CADASTRE-SE
                  </a>
                </li>
                <li>
                  <a
                    href="/pedidos"
                    className="block px-4 py-3 hover:bg-gray-100 text-center"
                  >
                    MEUS PEDIDOS
                  </a>
                </li>
                <li>
                  <a
                    href="/cadastro"
                    className="block px-4 py-3 hover:bg-gray-100 text-center"
                  >
                    MEU CADASTRO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
