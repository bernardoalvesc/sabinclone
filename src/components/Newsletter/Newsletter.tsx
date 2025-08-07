import { useState } from "preact/hooks";
import mailIcon from "@/assets/Newsletter/mail.png";
import setaIcon from "@/assets/seta.png";

export const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { name, email });
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-[#F7F8FC] w-full py-12 px-4 flex justify-center">
      <div className="max-w-[1140px] w-full flex flex-col items-center text-center">
        <img
          src={mailIcon}
          alt="Ícone de e-mail"
          style={{ width: "310.08px", height: "161.59px" }}
          className="mb-6"
        />

        <h2 className="text-lg md:text-2xl font-bold text-[#4F4F4F] uppercase mb-2">
          SUA SAÚDE É A NOSSA PRIORIDADE
        </h2>

        <p className="text-sm md:text-base text-[#666666] max-w-xl mb-6">
          Assine o nosso boletim informativo e receba ofertas, dicas de saúde e
          muito mais.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center gap-3 mb-4"
        >
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            required
            className="px-6 py-3 rounded-full bg-white shadow border border-gray-200 text-sm text-gray-700 w-[223px] outline-none"
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
            className="px-6 py-3 rounded-full bg-white shadow border border-gray-200 text-sm text-gray-700 w-[223px] outline-none"
          />
          <button
            type="submit"
            className="bg-[#FF4445] text-white text-xs font-bold tracking-wide px-8 py-4 rounded-full flex items-center gap-2"
          >
            ASSINAR
            <img src={setaIcon} alt="Seta" className="w-4 h-4" />
          </button>
        </form>

        <p className="text-xs text-[#666]">
          Ao se cadastrar você concorda em receber nossos e-mails conforme a
          nossa{" "}
          <a href="#" className="underline">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </section>
  );
};
