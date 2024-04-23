import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const VideoCard = ({ video, title, description }) => {
  return (
    <div className="md:w-80 h-full border-[#eca336] border-2 p-8  text-[#eca336] rounded-2xl">
      <div >
        <video src={video} controls autoPlay loop playsInline muted className="rounded-2xl"/>
      </div>
      <div className="mt-4 grid gap-3">
        <h1 className={`${anton.className} text-2xl  `}>{title}</h1>
        <text>{description}</text>
      </div>
    </div>
  );
};

export default VideoCard;
