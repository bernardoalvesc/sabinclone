import covidIcon from "@/assets/Footer/icons/covid.svg";
import jornalIcon from "@/assets/Footer/icons/jornal.svg";
import seringaIcon from "@/assets/Footer/icons/seringa.svg";

import facebookIcon from "@/assets/Footer/logos/facebook.svg";
import instagramIcon from "@/assets/Footer/logos/instagram.svg";
import linkedinIcon from "@/assets/Footer/logos/linkedin.svg";
import spotifyIcon from "@/assets/Footer/logos/spotify.svg";
import youtubeIcon from "@/assets/Footer/logos/youtube.svg";
import tiktokIcon from "@/assets/Footer/logos/tiktok.svg";
import xIcon from "@/assets/Footer/logos/x.svg";

import appleIcon from "@/assets/Footer/icons/apple.png";
import androidIcon from "@/assets/Footer/icons/android.png";

import partner1 from "@/assets/Footer/partners/image42.png";
import partner2 from "@/assets/Footer/partners/image43.png";
import partner3 from "@/assets/Footer/partners/image44.png";
import partner4 from "@/assets/Footer/partners/image45.png";

export const Footer = () => {
  return (
    <footer className="w-full text-black font-sans">
      {/* Top Section - full width background */}
      <div className="bg-[#F4E8D1] w-full">
        <div className="max-w-[1140px] mx-auto px-6 py-20 flex flex-wrap justify-center gap-12">
          {/* Navegação com ícones */}
          <div className="flex flex-col gap-8 w-full max-w-[240px]">
            <div className="flex items-center gap-4">
              <img src={covidIcon} alt="Covid" className="w-6 h-6" />
              <span className="font-bold">Exames Covid-19</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={jornalIcon} alt="Jornal" className="w-6 h-6" />
              <span className="font-bold">Exames Laboratoriais</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={seringaIcon} alt="Vacinas" className="w-6 h-6" />
              <span className="font-bold">Vacinas</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={seringaIcon} alt="Pacotes" className="w-6 h-6" />
              <span className="font-bold">Pacotes infantins</span>
            </div>
          </div>

          {/* Links institucionais */}
          <div className="flex flex-col gap-6 text-sm underline min-w-[200px]">
            <a href="#">Fale Conosco</a>
            <a href="#">Nossas Unidades</a>
            <a href="#">Termos de uso para vacina</a>
            <a href="#">Perguntas Frequentes</a>
          </div>

          {/* App Download */}
          <div className="flex flex-col gap-4 min-w-[180px] text-left">
            <p className="text-sm">Baixe nosso aplicativo</p>
            <div className="flex flex-col gap-2">
              <img src={appleIcon} alt="App Store" className="w-[130px]" />
              <img src={androidIcon} alt="Google Play" className="w-[130px]" />
            </div>
          </div>

          {/* Contato e redes sociais */}
          <div className="flex flex-col gap-4 text-left">
            <p className="text-sm">Contato:</p>
            <p className="font-bold text-base">(61) 3329-8000</p>
            <p className="text-xs text-[#5A5D67] mt-4">Nossas redes</p>
            <div className="flex flex-wrap gap-3 mt-1">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
              <img src={spotifyIcon} alt="Spotify" className="w-6 h-6" />
              <img src={tiktokIcon} alt="TikTok" className="w-6 h-6" />
              <img src={xIcon} alt="X" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos - fundo branco, largura total */}
      <div className="bg-white border-t border-[#F4E8D1] w-full">
        <div className="max-w-[1140px] mx-auto py-8 flex justify-center gap-12 items-center flex-wrap px-6">
          <img src={partner1} alt="Parceiro 1" className="w-[198px]" />
          <img src={partner2} alt="Parceiro 2" className="w-[133px]" />
          <img src={partner3} alt="Parceiro 3" className="w-[167px]" />
          <img src={partner4} alt="Parceiro 4" className="w-[117px]" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="bg-[#F7F8FC] text-center text-sm text-black py-6 px-4 w-full">
        <div className="max-w-[1140px] mx-auto">
          <p className="mb-1">
            Sabin Medicina Diagnóstica - CNPJ - 00.718.528/0001-09
          </p>
          <p className="underline">
            Termos de consentimento &nbsp;&nbsp;|&nbsp;&nbsp; Política de
            Privacidade &nbsp;&nbsp;|&nbsp;&nbsp; Mapa do site
          </p>
        </div>
      </div>
    </footer>
  );
};
