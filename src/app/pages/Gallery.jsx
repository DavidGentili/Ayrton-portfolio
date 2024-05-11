"use client";
import React, { useEffect, useState } from "react";
import { Anton } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import AudioCard from "@/components/AudioCard";
import { GiCancel } from "react-icons/gi";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Spinner from "react-bootstrap/Spinner";
const anton = Anton({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

const Gallery = () => {
  const [dataVideos, setDataVideos] = useState([]);
  const [dataAudios, setDataAudios] = useState([]);
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isLoading,setIsLoading]= useState(true)
  const handleClose = () => setShow(false);
  const handleCloseA = () => setShowA(false);
  const handleShowVideo = (video) => {
    setSelectedVideo(video);
    setShow(true);
  };
  const handleShowAudio = (audio) => {
    setSelectedAudio(audio);
    setShowA(true);
  };
  useEffect(() => {
    const fetchGalleryData = async () => {
      setIsLoading(false);
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
  }, [show]);

  return (
    <div id="gallery" className="flex h-full ">
      <div className="flex flex-col text-[#eca336]  w-full">
        <div className="text-[#eca336] border-b-2 border-[#eca336]  md:w-96 text-3xl md:text-6xl md:py-10 md:mb-10 py-3">
          <div className={anton.className}>GALERIA</div>
        </div>
        {/* map Videos */}
        <div className="my-4 bg-[#eca336]  text-black w-full p-2 text-xs md:text-2xl rounded-lg">
          Videos
        </div>
        <div className=" flex h-full w-full">
         
           
          {isLoading?<div> <Spinner animation='border' role='status'/></div>  
          :<div className="grid grid-cols-2  md:w-full md:grid-cols-5 gap-4 ">{dataVideos.map((video) => (
              <div key={video.id}>
                <VideoCard
                  video={video.source}
                  title={video.title}
                  onClick={() => handleShowVideo(video)}
                />
              </div>
            ))}</div>}
          
        </div>
        {/* Modal video*/}
        <Modal
          show={show}
          onHide={handleClose}
          className=" text-white bg-black/80"
          size="lg"
        >
          <Modal.Header className="flex justify-end">
            <GiCancel onClick={handleClose} />
          </Modal.Header>

          <Modal.Body className="  modal-content" >
            {selectedVideo && (
              <div className="flex justify-center items-center w-full flex-col md:flex-row md:h-full px-4 md:gap-24 ">
                <video
                  src={selectedVideo.source}
                  autoPlay
                  controls
                  loop
                  playsInline
                  muted
                  className="w-full object-cover rounded-2xl md:relative md:flex md:h-[593px] md:w-[480px] "
                />
                <div className="mt-3 md:w-full md:flex  md:flex-col ">
                  <p className="text-xl font-bold">{selectedVideo.title}</p>
                  <p className="text-sm mt-3">{selectedVideo.description}</p>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>

        {/* map Audios */}
        <div className="my-4 bg-[#eca336]  text-black w-full p-2 text-xs md:text-2xl rounded-lg">
          Audios
        </div>
        <div className=" flex h-full w-full">
         {isLoading? <div> <Spinner animation='border' role='status'/></div>:<div className="grid grid-cols-2  md:w-full md:grid-cols-5 gap-4 ">
            {dataAudios.map((audio) => (
              <div key={audio.id}>
                <AudioCard
                  title={audio.title}
                  image={audio.image}
                  alt={audio.id}
                  onClick={() => handleShowAudio(audio)}
                />
              </div>
            ))}
          </div>}
        </div>
        {/* Modal audio */}
        <Modal
          show={showA}
          onHide={handleCloseA}
          className="w-full text-white"
          size="lg"
        >
          <Modal.Header className="w-full bg-black flex justify-end text-2xl">
            <GiCancel onClick={handleCloseA} />
          </Modal.Header>

          <Modal.Body className=" bg-black ">
            {selectedAudio && (
              <div className="flex justify-center items-center w-full flex-col md:flex-row md:h-full px-4 md:gap-24 ">
                <div className=" flex  h-[300px] w-[255px]  md:h-[400px] md:w-[400px]   ">
                  <Image
                    src={selectedAudio.image}
                    alt={selectedAudio.id}
                    width={300}
                    height={300}
                    className=" w-full  object-cover rounded-2xl  "
                  />
                </div>

                <div className="mt-3 md:w-full md:flex  md:flex-col ">
                  <div>
                    {" "}
                    <audio controls className="flex w-full my-2  ">
                      <source src={selectedAudio.source} type="audio/mpeg" />
                    </audio>
                  </div>
                  <p className="text-xl font-bold">{selectedAudio.title}</p>
                  <p className="text-sm mt-3">{selectedAudio.description}</p>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
