import Wrapper from "@/app/components/container-wrapper/ContainerWrapper";
import { BLOGPOSTDATA } from "@/app/data/home/BlogPostData";
import Image from "next/image";
import React from "react";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = BLOGPOSTDATA.find((data) => data.slug === slug);

  return (
    <div className="w-full bg-blue-100 flex flex-col pb-6">
      <div className="w-full h-100 flex flex-col relative">
        <Image
          src={post?.imgUrl}
          alt="hero-image"
          fill
          className="object-cover h-75 transition-transform duration-500"
        />
        <div className="w-full h-100 bg-cyan-950 opacity-95 absolute top-0 left-0 justify-center items-center"></div>{" "}
        <div className="w-full flex h-100 absolute top-0 left-0 justify-center items-center">
          <h2 className="text-4xl font-bold text-white absolute text-center">
            {post?.title}
          </h2>
        </div>{" "}
      </div>
      <div className="w-full px-4 pt-8 md:px-8 -mt-30 z-50">
        <div className="w-full flex flex-col gap-4 md:flex-row ">
          <div className="w-full p-4 md:[65%] rounded-xl flex flex-col items-start justify-start gap-4 text-slate-600   bg-white">
            <div className="w-full rounded-xl flex flex-col gap-4">
              <div className="rounded-xl relative w-full h-100 overflow-hidden">
                <Image
                  src={post?.imgUrl}
                  alt="hero-image"
                  fill
                  className="object-cover h-100 transition-transform duration-500"
                />
              </div>

              <div className="w-full flex flex-col gap-4 p-4">
                {" "}
                <p className="text-lg">{post?.description}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[35%] rounded-xl p-4 flex flex-col gap-4 text-slate-600  ">
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-col w-full gap-2">
                <div className="rounded-xl relative w-full h-50 overflow-hidden">
                  <Image
                    src={"/images/house.JPG"}
                    alt="hero-image"
                    fill
                    className="object-cover h-50 transition-transform duration-500 hover:-tranlate-y-1"
                  />
                </div>
                our Project 1
              </div>
            </div>
          </div>
        </div>
        1
      </div>
    </div>
  );
}
