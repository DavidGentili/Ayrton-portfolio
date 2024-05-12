import React from "react";
import { Anton } from "next/font/google";
import Image from "next/image";
import photo1 from "../../../public/assets/photo1.jpg";
import photo2 from "../../../public/assets/photo2.jpeg";

const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const About = () => {
  return (
    <div>
      {/* web design */}
      <div id="about" className=" hidden h-full md:flex flex-col">
        <div className="text-[#eca336] border-b-2 border-[#eca336]  w-96  text-6xl py-10 mb-16 ">
          <div className={anton.className}>SOBRE MI</div>
        </div>
        {/* --contenido */}
        <div className="flex flex-col gap-16">
          <div className="flex justify-between">
  <div>
            <Image src={photo1} alt="photo1" className="rounded-2xl w-[507px]" />
          </div>
          <div className=" flex justify-center items-center">
            <text className=" w-[616px]  h-[451px]    p-8  text-2xl">
            Soy Argentino.
Nací en 1999, Buenos Aires/ Mar del Plata.
Incursioné en el mundo musical a los 9 años cuando un amigo de la misma edad me enseñó los primeros acordes de guitarra. 
Desde entonces no paré de aprender por mi cuenta y de cada persona que me regalaba un momento para enseñarme algo.
A los 16 comencé a cantar, y en 2019, a los 20 años, tuve mi primera presentación en público, invitado por un amigo, como segunda voz y guitarra principal.
            </text>
          </div>
          </div>
          <div className="flex justify-between">
   <div className="flex justify-center items-start mt-20">
            <text className="w-[624px] h-[287px]   p-8 text-2xl">
            El 8 de Marzo del 2020 fue mi primer presentación como artista principal.
Desde ese momento me presenté como solista en eventos, shows, conciertos, donde pude desenvolverme cada día mas haciendo lo que amo. 
Actualmente me mudé a España. Toqué en varios lugares de Mallorca y pronto estaré tocando en diferentes partes del el continente.
            </text>
          </div>
          <div className="flex justify-end">
            <Image src={photo2} alt="photo2" className="rounded-2xl w-[509px] " />
          </div>
          </div>
        
       
        </div>
      </div>
      {/* mobile design */}
      <div id="about" className=" md:hidden h-full flex flex-col">
        <div className="text-[#eca336] border-b-2 border-[#eca336]    text-xl py-3 ">
          <div className={anton.className}>SOBRE MI</div>
        </div>
        {/* --contenido */}
        <div className=" grid gap-4 mt-10">
          <div >
            <Image src={photo1} alt="photo1" className="rounded-2xl" />
          </div>
          <div className=" flex justify-center ">
            <text className="     text-sm">
            Soy Argentino. 
Nací en 1999, Buenos Aires/ Mar del Plata.
Incursioné en el mundo musical a los 9 años cuando un amigo de la misma edad me enseñó los primeros acordes de guitarra. 
Desde entonces no paré de aprender por mi cuenta y de cada persona que me regalaba un momento para enseñarme algo.
A los 16 comencé a cantar, y en 2019, a los 20 años, tuve mi primera presentación en público, invitado por un amigo, como segunda voz y guitarra principal.
            </text>
          </div>
          <div >
            <Image src={photo2} alt="photo2" className="rounded-2xl  " />
          </div>
          <div className="flex justify-center  ">
          <text className="       text-sm">
          El 8 de Marzo del 2020 fue mi primer presentación como artista principal.
Desde ese momento me presenté como solista en eventos, shows, conciertos, donde pude desenvolverme cada día mas haciendo lo que amo. 
Actualmente me mudé a España. Toqué en varios lugares de Mallorca y pronto estaré tocando en diferentes partes del el continente.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
