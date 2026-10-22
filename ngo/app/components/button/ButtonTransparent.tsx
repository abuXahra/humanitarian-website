"use client";

import { COLORS } from "@/app/constant/Constant";

type ButtonProps = {
  text: string;
  onClick: () => void;
};
function ButtonTransparent({ text, onClick }: ButtonProps) {
  const color = COLORS.primaryColor;
  return (
    <button
      onClick={onClick}
      className={`
        text-black
        text-sm
        transition duration-300 
        cursor-pointer
        flex justify-start
        hover:bg-${color}-600 font-bold`}
    >
      {text}
    </button>
  );
}

export default ButtonTransparent;
