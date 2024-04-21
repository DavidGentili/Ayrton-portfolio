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
        <div className="text-[#eca336] border-b-2 border-[#eca336]  w-96  text-6xl py-10 ">
          <div className={anton.className}>SOBRE MI</div>
        </div>
        {/* --contenido */}
        <div className=" grid grid-cols-2 grid-rows-2  justify-center  mt-10">
          <div>
            <Image src={photo1} alt="photo1" className="rounded-2xl" />
          </div>
          <div className=" flex justify-center items-center">
            <text className=" w-[539px]  h-[466px] border-[#93B962] rounded-2xl border-2 p-8 text-[#93B962]  text-2xl">
              Naci en 1999 Argentina, Buenos Aires, en la ciudad de Mar Del
              Plata. A los 9 años, comencé con la musica cuando un amigo me
              quiso enseñar a tocar la.guitarra, y desde alli, me enamore de
              hacer musica, siempre fui aprendiendo por mi cuenta y por otras
              personas, soy autodidacta, toque solo la guitarra hasta los 16
              años, y luego, empeze a utilizar mi voz, solo de acompañamiento
              para otros musicos, hasta que en 2019, tuve mi primera
              presentacion en publico, de segunda voz, y guitarra principal, con
              un amigo que me habia invitado a tocar.
            </text>
          </div>
          <div className="flex justify-center items-start mt-20">
            <text className="w-[539px] h-[466px] border-[#93B962] rounded-2xl border-2 p-8 text-[#93B962] text-2xl">
              Y la segunda presentacion el 8 de marzo de 2020, fue cuando me
              presente como cantante principal, desde alli comence a presentarme
              como cantante solista en varios eventos, shows, conciertos, donde
              pude desenvolverme cada dia mas, haciendo musica que es lo que
              tanto amo, y al publico que me ha apoyado en esto. Actualmente me
              mude a España, a seguir con este proyecto musical, y estare
              tocando en varias partes de Mallorca, y poco a poco, ire tocando
              en distintas partes de España y mas adelante del continente.
            </text>
          </div>
          <div className="mt-8">
            <Image src={photo2} alt="photo2" className="rounded-2xl  " />
          </div>
        </div>
      </div>
      {/* mobile design */}
      <div id="about" className=" md:hidden h-full flex flex-col">
        <div className="text-[#eca336] border-b-2 border-[#eca336]    text-3xl py-5 ">
          <div className={anton.className}>SOBRE MI</div>
        </div>
        {/* --contenido */}
        <div className=" grid gap-4 mt-10">
          <div >
            <Image src={photo1} alt="photo1" className="rounded-2xl" />
          </div>
          <div className=" flex justify-center ">
            <text className="  border-[#93B962] rounded-2xl border-2 p-4 text-[#93B962]  text-base">
              Naci en 1999 Argentina, Buenos Aires, en la ciudad de Mar Del
              Plata. A los 9 años, comencé con la musica cuando un amigo me
              quiso enseñar a tocar la.guitarra, y desde alli, me enamore de
              hacer musica, siempre fui aprendiendo por mi cuenta y por otras
              personas, soy autodidacta, toque solo la guitarra hasta los 16
              años, y luego, empeze a utilizar mi voz, solo de acompañamiento
              para otros musicos, hasta que en 2019, tuve mi primera
              presentacion en publico, de segunda voz, y guitarra principal, con
              un amigo que me habia invitado a tocar.
            </text>
          </div>
          <div >
            <Image src={photo2} alt="photo2" className="rounded-2xl  " />
          </div>
          <div className="flex justify-center  ">
          <text className="  border-[#93B962] rounded-2xl border-2 p-4 text-[#93B962]  text-base">
              Y la segunda presentacion el 8 de marzo de 2020, fue cuando me
              presente como cantante principal, desde alli comence a presentarme
              como cantante solista en varios eventos, shows, conciertos, donde
              pude desenvolverme cada dia mas, haciendo musica que es lo que
              tanto amo, y al publico que me ha apoyado en esto. Actualmente me
              mude a España, a seguir con este proyecto musical, y estare
              tocando en varias partes de Mallorca, y poco a poco, ire tocando
              en distintas partes de España y mas adelante del continente.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
