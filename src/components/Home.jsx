import React from "react";
import video1 from "../../public/videos/video1.mp4";
const Home = () => {
  return (
    <div id="home" className="h-full flex mb-10">
      <div className="flex flex-col w-3/5">
        <div className="text-[#eca336] text-6xl font-bold mb-10 ">
          <h1 className=" mb-4">AYRTON SOSA</h1>
          <h3>MÚSICO</h3>
        </div>
        <p className="w-[568px] h-[375px] text-[31px] mb-10">
          Mi nombre es Ayrton Sosa, soy musico (cantante y guitarrista), nacido
          en Argentina, Buenos Aires, Mar del Plata. Toco varios generos
          musicales, entre alguno de ellos, rock clasico, inde, progresivo,
          folk, blues, boleros, baladas, pop, ya sea en ingles o español. Me
          inspiraron musicos y bandas como Eddie Vedder, Elvis Presley, Gustavo
          Cerati, Queen, Jeff Buckley, entre otros.
        </p>

        <button className="bg-[#93B962] w-[389px] h-[76px] my-10 text-black rounded-md text-4xl">
          ¡Hablemos!
        </button>
      </div>
      <div className="flex w-[370px] mb-10 ">
        
        <video src={video1} autoPlay loop controls  className="rounded-sm"/>
      </div>
    </div>
  );
};

export default Home;
