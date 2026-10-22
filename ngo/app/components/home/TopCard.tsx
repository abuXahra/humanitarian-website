"use client";

import ButtonTransparent from "../button/ButtonTransparent";
import { TopCardData } from "@/app/data/home/TopCardData";
import Wrapper from "../container-wrapper/ContainerWrapper";

export default function TopCard() {
  return (
    <div className="w-full bg-[#FCFCFC] py-4">
      <Wrapper>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full justify-center py-8">
          {/* start */}
          {TopCardData.map((data) => (
            <div
              key={data.slug}
              className="flex flex-col gap-4 w-full transition duration-300 hover:-translate-y-1  p-8 bg-white hover:bg-blue-500 hover:text-white  text-slate-600 shadow-xl"
            >
              <div className="flex gap-2">
                {data.icon}
                <div className="flex flex-col gap-2 text-xl font-bold">
                  {data.title}
                  <hr className="border-white hover:border-white" />
                </div>
              </div>
              <p className="text-md">{data.body}</p>
              <ButtonTransparent text={data.btnText} onClick={() => {}} />
            </div>
          ))}
          {/* ends */}
        </div>
      </Wrapper>
    </div>
  );
}
