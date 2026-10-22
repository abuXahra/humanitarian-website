"use client";
import Link from "next/link";
import Button from "../button/Button";

function Navbar() {
  return (
    <div className="shadow-lg px-8 flex items-center justify-between bg-white py-4">
      <div className="text-black">logo</div>
      <div className="flex gap-30 items-center ">
        <nav className="flex gap-15 items-center  text-slate-800">
          <Link className="font-semibold text-md" href={"/"}>
            Home
          </Link>
          <Link className="font-semibold text-md" href={"/about"}>
            About
          </Link>
          <Link className="font-semibold text-md relative" href={"/programs"}>
            Programs
          </Link>
          <Link className="font-semibold text-md" href={"/gallery"}>
            Gallery
          </Link>
          <Link className="font-semibold text-md" href={"/blog"}>
            Blog
          </Link>
          <Link className="font-semibold text-md" href={"/contact"}>
            Contact
          </Link>
        </nav>
        <Button
          text="Donate Now"
          onClick={() => {
            alert("clicked");
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
