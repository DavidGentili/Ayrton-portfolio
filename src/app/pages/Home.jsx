import React from "react";
import video1 from "../../../public/videos/video1.mp4";
import Link from "next/link";
const Home = () => {
  return (
  <div>
    {/* web design */}
    <div id="home" className="hidden h-full  md:flex mb-10">
      <div className="flex flex-col w-3/5">
        <div className="text-[#eca336] text-6xl font-bold mb-10 ">
          <h1 className=" mb-4">AYRTON SOSA</h1>
          <h3>MÚSICO</h3>
        </div>
        <p className=" w-[568px]  h-[375px]  text-[31px] mb-10">
          Mi nombre es Ayrton Sosa, soy musico (cantante y guitarrista), nacido
          en Argentina, Buenos Aires, Mar del Plata. Toco varios generos
          musicales, entre alguno de ellos, rock clasico, inde, progresivo,
          folk, blues, boleros, baladas, pop, ya sea en ingles o español. Me
          inspiraron musicos y bandas como Eddie Vedder, Elvis Presley, Gustavo
          Cerati, Queen, Jeff Buckley, entre otros.
        </p>
<Link href='/#contact'>
        <button className="bg-[#93B962]  w-[389px]  h-[76px] my-10 text-black rounded-md  text-4xl">
          ¡Hablemos!
        </button></Link>
      </div>
      <div className="flex w-[370px]">
        <div className="rounded-md overflow-hidden">
          <video src={video1} controls autoPlay loop playsInline muted />
        </div>
      </div>
    </div>

  {/* mobile design */}
  <div id="home" className="md:hidden h-full  flex mb-8">
      <div className="flex flex-col w-full">
        <div className="text-[#eca336] text-3xl font-bold mb-10 ">
          <h1 className=" mb-4 w-full">AYRTON SOSA</h1>
          <h2>MÚSICO</h2>
        </div>

        <div className="flex ">
        <div className="rounded-2xl overflow-hidden ">
          <video src={video1} controls autoPlay loop playsInline muted />
        </div>
      </div>
        <text className=" w-full  text-xl my-10 ">
          Mi nombre es Ayrton Sosa, soy musico (cantante y guitarrista), nacido
          en Argentina, Buenos Aires, Mar del Plata. Toco varios generos
          musicales, entre alguno de ellos, rock clasico, inde, progresivo,
          folk, blues, boleros, baladas, pop, ya sea en ingles o español. Me
          inspiraron musicos y bandas como Eddie Vedder, Elvis Presley, Gustavo
          Cerati, Queen, Jeff Buckley, entre otros.
        </text>
<Link href='/#contact'>

        <button className="bg-[#93B962]  p-4   my-10 text-black rounded-md  text-xl">
          ¡Hablemos!
        </button></Link>
      
      </div>
    </div>
    </div>
  );
};

export default Home;
