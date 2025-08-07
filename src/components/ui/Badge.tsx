import { FunctionalComponent } from "preact";

interface BadgeProps {
  text: string;
  variant: "warning" | "exclusive";
}

export const Badge: FunctionalComponent<BadgeProps> = ({ text, variant }) => {
  const base = "text-[10px] font-medium uppercase px-2 py-1 rounded-bl-lg";

  const variants = {
    warning: "bg-[#FFA726] text-white", 
    exclusive: "bg-[#DE3618] text-white",
  };

  return <div className={`${base} ${variants[variant]}`}>{text}</div>;
};
