"use client";

type InputProps = {
  inputType: string;
  placeHolder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  inputType,
  placeHolder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className="
         w-full
         border
          text-slate-700
         border-blue-500  
          rounded-lg 
          focus:outline-none 
          focus:ring-2
        focus:ring-blue-500
          transition
          duration-300
          p-1.5 md:p-2"
      type={inputType}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
}
