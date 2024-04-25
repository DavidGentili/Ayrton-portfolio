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
        Saludos y Bienvenidos!
Soy Ayrton, un artista (cantante/ guitarrista) apasionado por la música. 
En esta web encontrarán algunos de mis trabajos, y conocerán un poco más de mi trayectoria. 
Toco varios generos musicales.
Me inspiraron artistas como Eddie Vedder, Elvis Presley, Gustavo Cerati, Queen, Jeff Buckley, entre otros.
Los invito a explorar mi colección de música y ver vídeos de actuaciones en vivo.
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
        Saludos y Bienvenidos!
Soy Ayrton, un artista (cantante/ guitarrista) apasionado por la música. 
En esta web encontrarán algunos de mis trabajos, y conocerán un poco más de mi trayectoria. 
Toco varios generos musicales.
Me inspiraron artistas como Eddie Vedder, Elvis Presley, Gustavo Cerati, Queen, Jeff Buckley, entre otros.
Los invito a explorar mi colección de música y ver vídeos de actuaciones en vivo.
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
