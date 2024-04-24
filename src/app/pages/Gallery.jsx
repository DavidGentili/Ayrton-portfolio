"use client";
import React, { useEffect, useState } from "react";
import { Anton } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import AudioCard from "@/components/AudioCard";
import Carousel from 'react-bootstrap/Carousel';


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
  const tripleCardVideos = []; 
  for (let i = 0; i < dataVideos.length; i += 3) {
    tripleCardVideos.push(dataVideos.slice(i, i + 3));
  }
  const tripleCardAudios = []; 
  for (let i = 0; i < dataAudios.length; i += 3) {
    tripleCardAudios.push(dataAudios.slice(i, i + 3));
  }

  return (
    <div id="gallery" className="flex h-full ">
      {/* web design */}
      <div className="hidden md:flex flex-col text-[#eca336]  w-full">
        <div className="text-[#eca336] border-b-2 border-[#eca336]  w-96  text-6xl py-10 mb-10">
          <div className={anton.className}>GALERIA</div>
        </div>
        {/* map Videos */}
        <div className={`${anton.className} text-2xl m-4 `}>VIDEOS:</div>
        <div className="flex flex-row gap-4 justify-center">


        <Carousel interval={null} className="w-full">
            {tripleCardVideos.map((triple) => (
              <Carousel.Item key={triple.id}>
                <div className="flex justify-center">
                  {triple.map((video) => (
                    <div key={video.id} className="mx-4">
                      <VideoCard
                        video={video.source}
                        title={video.title}
                        description={video.description}
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>




          
        </div>
        {/* map Audios */}
        <div className={`${anton.className} text-2xl m-4 `}>AUDIOS:</div>
        <div className="flex flex-row gap-4 mt-4 justify-center h-full">
        
        <Carousel interval={null} className="w-full "> 
    {tripleCardAudios.map((tripleCard) => (
      <Carousel.Item key={tripleCard.id}>
        <div className="flex justify-center">
          {tripleCard.map((audio) => (
            <div key={audio.id}  className="mx-4">
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
      </Carousel.Item>
    ))}
  </Carousel>
        </div>
      </div>
      {/* mobile design */}
      <div className="md:hidden flex flex-col text-[#eca336] ">
        <div className="text-[#eca336] border-b-2 border-[#eca336]    text-3xl py-3 ">
          <div className={anton.className}>GALERIA</div>
        </div>
        <div className={`${anton.className} text-xl m-4 `}>VIDEOS:</div>
        <div className="flex flex-row gap-4 justify-center">
          <Carousel interval={null}>
            
               {dataVideos.map((video) => (
            <Carousel.Item key={video.id} >
              <VideoCard
                video={video.source}
                title={video.title}
                description={video.description}
              />
            </Carousel.Item>
          ))}
            
          </Carousel>
         
        </div>
        {/* map Audios */}
        <div className={`${anton.className} text-xl m-4 `}>AUDIOS:</div>
        <div className="flex flex-row gap-4 mt-4 justify-center">
          <Carousel interval={null}>

            {dataAudios.map((audio) => (
            <Carousel.Item key={audio.id}>
              <AudioCard
                audio={audio.source}
                title={audio.title}
                description={audio.description}
                image={audio.image}
                alt={audio.id}
              />
            </Carousel.Item>
          ))}
          </Carousel>
          
        </div>

      </div>
    </div>
  );
};

export default Gallery;
