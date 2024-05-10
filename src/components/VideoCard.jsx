import { BsArrowUpRightSquareFill } from "react-icons/bs";

const VideoCard = ({ video, title, onClick }) => {
  return (
    <div className="text-[#eca336] rounded-2xl relative flex md:h-[200px] md:w-[200px] h-36 w-36">
      <video
        src={video}
        autoPlay
        loop
        playsInline
        muted
        className="w-full object-cover rounded-2xl"
      />
      <div
        className="  font-thin text-sm
         md:text-base md:w-full text-white absolute bottom-2 left-2"
      >
        <div className="flex w-full p-2">
          <div className="md:w-full md:flex md:justify-start ">{title}</div>
          <div className="flex w-2/5 justify-end  md:p-4 ">
            <BsArrowUpRightSquareFill
              className="text-[#eca336]"
              size={25}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
