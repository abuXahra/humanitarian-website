import { COLORS } from "@/app/constant/Constant";

type ButtonProps = {
  text: string;
  onClick: () => void;
};
function Button({ text, onClick }: ButtonProps) {
  const color = COLORS.primaryColor;
  return (
    <button
      onClick={onClick}
      className={`
    bg-${color}-500 py-4 
    px-6 rounded-lg shadow text-md
    transition duration-300 
    hover:-translate-y-1
    hover:bg-${color}-600 font-bold
    cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default Button;
