
import { useContext } from "react";
import video from "../assets/video.mp4";
import { UserContext } from "../context/UserContext";

const Hero = () => {
  
  const { setGeo, geo } = useContext(UserContext);

   
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black" style={{ opacity: 0.4 }}></div>
      <div className="relative z-10 text-center text-white p-8 flex  items-end justify-start h-screen -mt-[6rem] ml-[10rem]">
         <div className="flex flex-col gap-6">
           <h1 className="text-6xl font-bold">{geo ? "ბაია ფიტნესი " : "Welcome to baia"}</h1>
           <span className="w-full h-[0.2px] bg-white" />
           <p>Your Journey to Strength and Wellness Begins Here</p>
         </div>
        
      </div>

      <p className="absolute bottom-12 right-12 cursor-pointer" onClick={() => setGeo(!geo)}>{geo ? "ENG" : "GEO"}</p>
    </div>
  );
};

export default Hero;
