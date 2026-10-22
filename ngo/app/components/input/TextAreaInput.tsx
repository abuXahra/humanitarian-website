"use client";

type InputProps = {
  placeHolder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextAreaInput({
  placeHolder,
  value,
  onChange,
}: InputProps) {
  return (
    <textarea
      className="
         w-full
         text-slate-700
         border
         border-blue-500  
          rounded-lg 
          focus:outline-none 
          focus:ring-2
        focus:ring-blue-500
          transition
          duration-300
          p-1.5 md:p-2"
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      maxLength={50}
    ></textarea>
  );
}
