import { COLORS } from "@/app/constant/Constant";

type ButtonProps = {
  text: string;
  onClick: () => void;
  props: string;
};
function ButtonB({ text, onClick, props }: ButtonProps) {
  const color = COLORS.primaryColor;
  return (
    <button
      onClick={onClick}
      className={`
    bg-${color}-500 py-4 
    px-6 shadow text-md
    transition duration-300 
    hover:bg-${COLORS.bgHover}-600 font-semibold
    cursor-pointer ${props}`}
    >
      {text}
    </button>
  );
}

export default ButtonB;
