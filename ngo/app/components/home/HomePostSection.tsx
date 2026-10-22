"use client";
import Image from "next/image";
import { COLORS } from "@/app/constant/Constant";
import { FaTrash } from "react-icons/fa";
import { BsCalendar4Event } from "react-icons/bs";
import { BLOGPOSTDATA } from "@/app/data/home/BlogPostData";
import Button from "../button/Button";
import Wrapper from "../container-wrapper/ContainerWrapper";
import { useRouter } from "next/navigation";

function HomePostSection() {
  const navigation = useRouter();
  return (
    <div className="w-full bg-blue-50">
      <Wrapper>
        <div className={`flex flex-col w-full   py-20 gap-8 md:gap-16`}>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <h2
              className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}
            >
              OUR BLOG
            </h2>
            <h1 className="text-3xl font-bold text-black text-center">
              Latest News & Update
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
            {BLOGPOSTDATA.slice(0, 3).map((data, i) => (
              <div
                key={i}
                className="flex flex-col w-full bg-white hover:shadow-2xl rounded-xl transition duration-300 hover:-translate-y-1 hover:scale-100"
              >
                <div className="flex flex-col relative h-60 w-full gap-4 rounded-xl overflow-hidden rounded-tl-xl rounded-tr-xl">
                  <Image
                    src={data.imgUrl}
                    alt="hero-image"
                    fill
                    className="object-cover h-60 transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="flex flex-col gap-4 p-8 ">
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex gap-2 text-blue-500">
                      <FaTrash />
                      <p>News</p>
                    </div>
                    <div className="flex gap-2 text-blue-500">
                      <BsCalendar4Event />
                      {/* <p>{data?.date}</p> */}
                    </div>
                  </div>
                  <h2
                    className={`text-2xl font-semibold text-black hover:${COLORS.textHover}`}
                  >
                    {data.title}
                  </h2>
                  <p className="text-slate-600">
                    {data.description.slice(0, 100)}...
                  </p>
                  <p className="text-blue-500">Author: {data.author}</p>
                  <div>
                    {" "}
                    <Button
                      text={data.btnText}
                      onClick={() => navigation.push(`/blog/${data.slug}`)}
                    />
                  </div>
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

export default HomePostSection;
