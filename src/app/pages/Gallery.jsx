"use client";
import React, { useEffect, useState } from "react";
import { Anton } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import AudioCard from "@/components/AudioCard";

const anton = Anton({weight: ["400"], style: ["normal"], subsets: ["latin"] });

const Gallery = () => {
  const [dataVideos, setDataVideos] = useState([]);
  const [dataAudios, setDataAudios] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const res = await fetch("/galleryData.json");
        const data = await res.json();
        setDataVideos(data.videos);
        setDataAudios(data.audios);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <div id="gallery" className="flex h-full">
      {/* web design */}
      <div className="hidden md:flex flex-col text-[#eca336] ">
        <div className="text-[#eca336] border-b-2 border-[#eca336]  w-96  text-6xl py-10 mb-10">
          <div className={anton.className}>GALERIA</div>
        </div>
        {/* map Videos */}
        <div className={`${anton.className} text-2xl m-4 `}>VIDEOS:</div>
        <div className="flex flex-row gap-4">
          {dataVideos.map((video) => (
            <div key={video.id}>
              <VideoCard
                video={video.source}
                title={video.title}
                description={video.description}
              />
            </div>
          ))}
        </div>
        {/* map Audios */}
        <div className={`${anton.className} text-2xl m-4 `}>AUDIOS:</div>
        <div className="flex flex-row gap-4 mt-4">
          {dataAudios.map((audio) => (
            <div key={audio.id}>
              <AudioCard
                audio={audio.source}
                title={audio.title}
                description={audio.description}
                image={audio.image}
                alt={audio.id}
              />
            </div>
          ))}
        </div>
      </div>
      {/* mobile design */}
      <div className="md:hidden flex">
        <div className="text-[#eca336] border-b-2 border-[#eca336]    text-3xl py-5 ">
          <div className={anton.className}>GALERIA</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
