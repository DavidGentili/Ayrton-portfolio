import React from "react";
import { Anton } from "next/font/google";
import { GoMail } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-full w-full border-[#eca336] border-t-2 flex  text-[#eca336]"
    >
      <div className=" p-10 w-full">
        {/* web design */}
        <div className="hidden md:flex flex-col ">
          <div className=" border-b-2 border-[#eca336]  w-96  text-6xl py-10 ">
            <div className={anton.className}>¡HABLEMOS!</div>
          </div>
          <div className="grid p-10 gap-72 grid-cols-2  w-full text-2xl ">
            <div className="flex  gap-1 ">
              <GoMail size={45}/>
              Contáctame enviando un correo a: 
ayrtonivansosa@gmail.com
            </div>
            <Link
              href={"https://www.instagram.com/sosa.ayrton/"}
              className="flex  gap-1"
            >
              <BsInstagram size={40} />
              Enviame un md a mi instagram haciendo click aquí
            </Link>
          </div>
        </div>

        {/* mobile design */}
        <div className="md:hidden flex flex-col ">
          <div className="text-[#eca336] border-b-2 border-[#eca336]    text-xl py-3 ">
            <div className={anton.className}>¡HABLEMOS!</div>
          </div>
          <div className="flex flex-col my-4  w-56 text-sm h-10">
            <div className="flex  gap-2 mb-3">
              <GoMail size={25}/>
              Contáctame enviando un correo a: 
ayrtonivansosa@gmail.com
            </div>
            <Link
              href={"https://www.instagram.com/sosa.ayrton/"}
              className="flex  gap-2"
            >
              <BsInstagram size={20}/>
              Enviame un md a mi instagram haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
