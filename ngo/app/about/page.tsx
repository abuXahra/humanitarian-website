import Wrapper from "../components/container-wrapper/ContainerWrapper";
import Image from "next/image";
import { COLORS } from "../constant/Constant";

export default function About() {
  return (
    <div className="w-full bg-white flex flex-col">
      <div className="w-full relative overflow-hidden h-75 ">
        <Image
          alt="banner"
          src="/images/house.JPG"
          fill
          className="object-cover h-75"
        />
        <div className="w-full h-75 absolute top-0 right-0 bg-black text-white opacity-80 flex justify-center items-center">
          <h1 className="text-6xl  font-bold">About Us</h1>
        </div>
      </div>
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-14 py-4 md:py-20">
          <div className="flex flex-col w-full gap-4 py-8 md:py-8">
            <h2
              className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}
            >
              ABOUT USSSSS
            </h2>

            <h1 className="text-3xl font-bold text-black">
              We Can Save More Lives With Your Helping Hand.
            </h1>
            <p className="text-slate-600">
              Humanitarian Foundation is a registered non-governmental
              organization founded in February 2021. We believe in the power of
              charity to uplift society. Our motivation behind starting this
              organization is to provide equal opportunities for orphans and the
              disadvantaged, regardless of religious or cultural background
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className={`flex  white w-130 h-80 overflow-hidden relative`}>
              <Image src={"/images/house.JPG"} alt="" fill />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
