import React from "react";
import video1 from "/public/videos/video1.mp4";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const Home = () => {
  return (
    <div className="pt-40"id="home">
      {/* web design */}
      <div
        
        className="hidden h-full  md:flex mb-10  md:justify-between "
      >
        <div className="flex flex-col w-[600px] h-[619px] gap-10">
          <div className="text-[#eca336] text-6xl font-bold  p-3 w-50">
            <h1 className={anton.className}> ¡SALUDOS Y BIENVENIDOS!</h1>
          </div>
          <div>
            <p className=" w-[568px]    text-[32px]  p-4">
              Soy Ayrton, un artista (cantante/ guitarrista) apasionado por la
              música. En esta web encontrarán algunos de mis trabajos, y
              conocerán un poco más de mi trayectoria. Toco varios generos
              musicales. Me inspiraron artistas como Eddie Vedder, Elvis
              Presley, Gustavo Cerati, Queen, Jeff Buckley, entre otros. Los
              invito a explorar mi colección de música y ver vídeos de
              actuaciones en vivo.
            </p>
          </div>
          <div className="bg-[#eca336]   w-full  h-[83px] p-3 text-black rounded-md  text-4xl text-center">
            <Link href="/#contact">
              <button>¡HABLEMOS!</button>
            </Link>
          </div>
        </div>
        <div className="flex  w-[480px]">
          <div className="rounded-2xl overflow-hidden">
            <video width="480" height="240" controls autoPlay loop playsInline muted>
              <source src={video1} type="video/mp4"/>
            </video>
            
          </div>
        </div>
      </div>

      {/* mobile design */}
      <div id="home" className="md:hidden h-full  flex ">
        <div className="flex flex-col w-full">
          <div className="text-[#eca336] text-xl font-bold  w-full">
            <h1 className={anton.className}> ¡SALUDOS Y BIENVENIDOS!</h1>
          </div>

          <text className=" w-full  text-sm my-10 ">
            Soy Ayrton, un artista (cantante/ guitarrista) apasionado por la
            música. En esta web encontrarán algunos de mis trabajos, y conocerán
            un poco más de mi trayectoria. Toco varios generos musicales. Me
            inspiraron artistas como Eddie Vedder, Elvis Presley, Gustavo
            Cerati, Queen, Jeff Buckley, entre otros. Los invito a explorar mi
            colección de música y ver vídeos de actuaciones en vivo.
          </text>
          <div className="rounded-2xl overflow-hidden ">
          <video width="480" height="240" controls autoPlay loop playsInline muted>
              <source src={video1.src} type="video/mp4"/>
            </video>
         
          </div>

          <Link
            href="/#contact"
            className="bg-[#eca336]  my-4 p-2 text-center w-full  text-black rounded-md "
          >
            <button>¡HABLEMOS!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
