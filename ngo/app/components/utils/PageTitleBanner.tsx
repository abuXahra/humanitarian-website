import Image from "next/image";
import React from "react";

type PageTitleDataType = {
  pageTitle: string;
  subTitle: string;
  imgUrl: string;
};

export default function PageTitleBanner({
  pageTitle,
  subTitle,
  imgUrl,
}: PageTitleDataType) {
  return (
    <div className="w-full relative overflow-hidden h-75 ">
      <Image alt="banner" src={imgUrl} fill className="object-cover h-75" />
      <div className="w-full h-75 absolute top-0 right-0 bg-black text-white opacity-80 flex justify-center items-center flex-col gap-4">
        <h1 className="text-6xl  font-bold">{pageTitle}</h1>
        <p className="text-lg italic">{subTitle}</p>
      </div>
    </div>
  );
}
