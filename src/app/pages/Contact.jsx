import React from "react";
import { Anton } from "next/font/google";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-full w-full border-[#eca336] border-t-2 flex my-10 text-[#eca336]"
    >
      <div className="m-10 w-full">
        {/* web design */}
        <div className="hidden md:flex flex-col ">
          <div className=" border-b-2 border-[#eca336]  w-96  text-6xl py-10 ">
            <div className={anton.className}>¡HABLEMOS!</div>
          </div>
          <div className="flex m-10 gap-72  w-full text-xl pl-20">
            <div className="flex items-center gap-1">
              <GoMail />
              Ayrtonivansosa@gmail.com
            </div>
            <Link
              href={"https://www.instagram.com/sosa.ayrton/"}
              className="flex items-center gap-1"
            >
              <FaInstagram />
              Instagram
            </Link>
          </div>
        </div>

        {/* mobile design */}
        <div className="md:hidden flex">
          <div className="text-[#eca336] border-b-2 border-[#eca336]    text-3xl py-5 ">
            <div className={anton.className}>CONTACTO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
