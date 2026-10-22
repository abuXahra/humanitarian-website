"use client";

import { COLORS } from "@/app/constant/Constant";
import { ACTIVITIES } from "@/app/data/home/ActivityData";
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "../container-wrapper/ContainerWrapper";

function OurActivities() {
  const [showCaption, setShowCaption] = useState(false);
  return (
    <div className="w-full bg-white">
      <Wrapper>
        <div className={`flex flex-col w-full  py-20 gap-8 md:gap-16`}>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <h2
              className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}
            >
              OUR ACTIVITIES
            </h2>
            <h1 className="text-3xl font-bold text-black text-center">
              Changing Lives Through Purposeful Action
            </h1>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="w-full md:w-2/5  rounded-2xl h-50 md:h-100 shadow relative overflow-hidden">
              <div className="w-full h-full relative cursor-pointer">
                <Image
                  src={ACTIVITIES[0].imgUrl}
                  alt="hero-image"
                  fill
                  className={
                    "object-cover h-75 transition-transform duration-500 hover:scale-110"
                  }
                />{" "}
                <p className="text-white font-semibold text-xl absolute bottom-12 left-5 z-30">
                  {ACTIVITIES[0].subTitle}
                </p>
                <h2 className="text-white text-2xl font-bold absolute bottom-5 left-5 z-30">
                  {ACTIVITIES[0].title}
                </h2>
              </div>
            </div>

            <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 rounded-2xl h-auto gap-4">
              {ACTIVITIES.slice(0, 4).map((data) => (
                <div
                  key={data.id}
                  className={`w-full rounded-2xl h-50 shadow relative overflow-hidden ${data.id === 1 && "none"}`}
                >
                  <div className="w-full h-full z-10 relative cursor-pointer">
                    <Image
                      src={data.imgUrl}
                      alt="hero-image"
                      fill
                      className={
                        "object-cover h-75 transition-transform duration-500 hover:scale-110"
                      }
                    />
                    <p className="text-white font-semibold text-xl absolute bottom-8 left-5 z-30">
                      {data.subTitle}
                    </p>
                    <h2 className="text-white text-2xl font-bold absolute bottom-2 left-5 z-30">
                      {data.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            {/* ends */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default OurActivities;
