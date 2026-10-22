import Image from "next/image";
import Wrapper from "../container-wrapper/ContainerWrapper";
import { FaTrash } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-cyan-950 flex flex-col">
      <Wrapper>
        <div className="flex flex-col w-full py-16">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full p-4">
              <div className="w-30 justify-center items-center bg-white rounded-xl p-2">
                <Image
                  alt="logo"
                  src="/images/house.JPG"
                  width={100}
                  height={100}
                  className="rounded w-ful mx-auto"
                />
              </div>{" "}
              <p className="text-gray-300">
                Our Humanitarian Foundation is one of the ngo foundation
                registered 2026, dedicated to uplifting humanity by helping the
                orphans, the less privileged through education, empowerment,
                health and hunger relief — regardless of background.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full pb-8">
              <h2 className="text-gray-300 font-bold text-2xl pb-8">
                Our Links
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="py-2 hover:cursor-pointer">Programs</li>
                <hr />
                <li className="py-2  hover:cursor-pointer">About</li>
                <hr />
                <li className="py-2  hover:cursor-pointer">Gallery</li>
                <hr />
                <li className="py-2  hover:cursor-pointer">Blog</li>
                <hr />
                <li className="py-2 hover:cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
              <h2 className="text-gray-300 font-bold text-xl pb-8">Gallery</h2>
              <ul className="w-full grid grid-cols-3 gap-4">
                <li className="w-full bg-yellow-500">
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>

                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>

                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>

                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    src={"/images/house.JPG"}
                    alt={"gallery"}
                  />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
              <div className="flex gap-4">
                <FaTrash className="text-2xl" />
                <p>
                  No. 24 Monrovia Street Wuse 2, Abuja FCT, Nigeria
                  humanitarian@domain.com
                </p>
              </div>
              <div className="flex gap-4">
                <FaTrash className="text-2xl" />
                <p>
                  No. 24 Monrovia Street Wuse 2, Abuja FCT, Nigeria
                  humanitarian@domain.com
                </p>
              </div>
              <div className="flex gap-4">
                <FaTrash className="text-2xl" />
                <p>
                  No. 24 Monrovia Street Wuse 2, Abuja FCT, Nigeria
                  humanitarian@domain.com
                </p>
              </div>
              <div className="flex gap-4">
                <FaTrash className="text-2xl" />
                <p>
                  No. 24 Monrovia Street Wuse 2, Abuja FCT, Nigeria
                  humanitarian@domain.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* copyright */}
      <div className="w-full flex justify-center items-center py-10 bg-cyan-950">
        <Wrapper>
          {" "}
          © 2026 Our Humanitarian Foundation. All Rights Reserved.
        </Wrapper>
      </div>
    </div>
  );
}
