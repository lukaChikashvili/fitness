
import { useContext } from "react";
import video from "../assets/video.mp4";
import { UserContext } from "../context/UserContext";
import { motion } from 'framer-motion'

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
           <motion.h1 initial = {{opacity: 0,  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
                      whileInView={{opacity: 1, clipPath:  "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"}}
                      transition={{duration: 0.8, ease: 'easeIn', delay: 1}}
            className="text-7xl font-bold">{geo ? "ბაია ფიტნესი " : "Welcome to baia"}</motion.h1>
           <motion.span initial = {{width: 0, opacity: 0}} whileInView={{width: '100%', opacity: 1}}
             transition={{duration: 1, ease: 'easeIn', delay: 1.2}}
            className="w-full h-[0.2px] bg-white" />
           <motion.p initial = {{opacity: 0,  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
                      whileInView={{opacity: 1, clipPath:  "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"}}
                      transition={{duration: 0.8, ease: 'easeIn', delay: 1.3}} className="text-xl">Your Journey to Strength and Wellness Begins Here</motion.p>
         </div>
            
      </div>

      <p className="absolute bottom-12 right-12 cursor-pointer" onClick={() => setGeo(!geo)}>{geo ? "ENG" : "GEO"}</p>
    </div>
  );
};

export default Hero;
