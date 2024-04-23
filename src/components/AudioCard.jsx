import React from "react";
import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const AudioCard = ({ audio, title, description, image, alt }) => {
  return (
    <div className="md:w-72 h-full border-[#eca336] border-2 p-6 text-[#eca336] rounded-2xl">
       <div className=" w-300 h-96 flex items-center"> <Image
        src={image}
        alt={alt}
       width={300}
       height={300}
       className="rounded-2xl w-300 h-300"
        />

      </div>
     <div>   <audio controls className="flex w-full my-3  ">
          <source src={audio} type="audio/mpeg"  />
        </audio>
      </div>
      <div className="mt-4 grid gap-3">
        <h1 className={`${anton.className} text-2xl  `}>{title}</h1>
        <text>{description}</text>
      </div>
    </div>
  );
};

export default AudioCard;
