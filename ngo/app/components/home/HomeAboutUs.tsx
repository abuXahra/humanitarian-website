"use client";

import { COLORS } from "@/app/constant/Constant";
import Button from "../button/Button";
import Image from "next/image";
import Wrapper from "../container-wrapper/ContainerWrapper";
import { usePathname, useRouter } from "next/navigation";

function HomeAboutUs() {
  // const navigate = usePathname()
  const router = useRouter();
  return (
    <div className="w-full bg-white">
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-14 py-4 md:py-16">
          <div className="flex flex-col w-full gap-4">
            <div
              className={`flex  white w-full h-100 overflow-hidden relative`}
            >
              <Image src={"/images/house.JPG"} alt="" fill />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 py-8 md:py-8">
            <h2
              className={`text-xl text-blue-500 font-bold ${COLORS.textColor}`}
            >
              ABOUT US
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

            <div>
              {" "}
              <Button text="Learn more" onClick={() => router.push("/about")} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default HomeAboutUs;
