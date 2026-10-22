"use client";
import { COLORS } from "@/app/constant/Constant";
import Image from "next/image";
import ButtonB from "../button/ButtonB";
import { PROJECTDATA } from "@/app/data/home/ProjectData";
import Wrapper from "../container-wrapper/ContainerWrapper";

export default function OurProject() {
  return (
    <div className="w-full bg-blue-50">
      <Wrapper>
        <div
          className={`flex flex-col w-full  bg-blue-50 py-20 gap-8 md:gap-16`}
        >
          <div className="flex flex-col justify-center items-center gap-3 ">
            <h2
              className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}
            >
              OUR PROJECTS
            </h2>
            <h1 className="text-3xl font-bold text-black text-center">
              Empowering Communities Through Purposeful Giving
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
            {PROJECTDATA.map((data, i) => (
              <div
                key={i}
                className="flex flex-col w-full gap-4 bg-white hover:shadow-2xl rounded-xl transition duration-300 hover:-translate-y-1 hover:scale-100"
              >
                <div className="flex flex-col relative h-75 w-full gap-4 overflow-hidden rounded-xl">
                  <Image
                    src={data.imgUrl}
                    alt="hero-image"
                    fill
                    className="object-cover h-75 transition-transform duration-500 hover:scale-110"
                  />
                  <ButtonB
                    text={data.btnText}
                    onClick={() => {}}
                    props={"absolute bottom-0 right-0"}
                  />
                </div>

                <div className="flex flex-col gap-4 p-8 ">
                  <h2 className="text-2xl font-semibold text-black">
                    {data.title}
                  </h2>
                  <p className="text-slate-600">{data.description}</p>
                </div>
              </div>
            ))}
            {/* ends */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
