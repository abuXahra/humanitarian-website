"use client";

import { COLORS } from "@/app/constant/Constant";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

function TopHeader() {
  const color = COLORS.primaryColor;

  return (
    <div className="w-full sm:none md:flex">
      <div
        className={`w-[35%] py-4 flex gap-4 items-center bg-${color}-500  pl-8`}
      >
        <div className="flex gap-2 items-center text-sm">
          <IoIosCall />
          <p>+2348135701458</p>
        </div>
        <div className={`flex gap-2 items-center ${COLORS.textColor} text-sm`}>
          <CiMail />
          <p>humanitarian@gmailcom</p>
        </div>
      </div>
      <div className="w-[65%] flex gap-4 items-center justify-between bg-cyan-950 py-2 px-8">
        <div className="flex gap-2 items-center text-sm">
          <CiLocationOn />
          <p>No. 54 Monrovia Street, Wuse 2, Abuja FCT, Nigeria</p>
        </div>

        <div
          className={`flex gap-2 items-center text-sm transition hover:${COLORS.textColor} cursor-pointer`}
        >
          <FaSearch />
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
