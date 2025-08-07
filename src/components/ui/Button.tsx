import type { ComponentChildren } from "preact";

type Variant = "filled" | "outline" | "disabled";

interface ButtonProps {
  children: ComponentChildren;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  variant = "filled",
  className = "",
  type = "button",
}: ButtonProps) => {
  const base =
    "text-xs uppercase font-semibold py-2 px-4 rounded-full w-full text-center flex items-center justify-center gap-2 transition-all";

  const variants: Record<Variant, string> = {
    filled: "bg-[#3ac092] text-white hover:opacity-90",
    outline: "border border-[#C4C4C4] text-[#333] bg-white hover:bg-gray-100",
    disabled: "bg-[#E5E5E5] text-[#A3A3A3] cursor-not-allowed",
  };

  return (
    <button
      onClick={variant === "disabled" ? undefined : onClick}
      disabled={variant === "disabled"}
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
