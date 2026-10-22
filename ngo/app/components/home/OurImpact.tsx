"use client";
import { COLORS } from "@/app/constant/Constant";
import { NUMBERCOUNT } from "@/app/data/home/ImpactNumberCount";
import Button from "../button/Button";

function OurImpact() {
  return (
    <div className="flex flex-col w-full bg-cyan-950 py-20 px-4 md:px-16 gap-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}>
          OUR IMPACT
        </h2>
        <h1 className="text-3xl font-bold text-white">Let Numbers Speak..</h1>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        {NUMBERCOUNT.map((data, i) => (
          <div
            key={i}
            className="w-full border rounded-lg border-white flex flex-col gap-3 items-center justify-center px-8 py-12"
          >
            <p className="text-4xl font-bold">{data.count}+</p>
            <p className="font-semibold">{data.title}</p>
          </div>
        ))}
      </div>

      <div className="flex self-center">
        {" "}
        <Button text="Read more" onClick={() => {}} />
      </div>
    </div>
  );
}

export default OurImpact;
