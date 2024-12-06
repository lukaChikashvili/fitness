import { useEffect, useRef, useState } from "react";
import fitness from "../assets/fitness.jpg";
import pool from "../assets/pool.jpg";
import sauna from "../assets/sauna.jpg";
import football from "../assets/football.jpg";
import gsap from "gsap";
import {motion} from 'framer-motion'

const Menu = ({isOpen}) => {
  const [currentImage, setCurrentImage] = useState(fitness);
  const imgRef = useRef(null);
  const [hover, setHover] = useState(null);

  // menu ref
  let menuRef = useRef(null);
  


  const links = [
    { id: 1, title: "Fitness", img: fitness },
    { id: 2, title: "Pool", img: pool },
    { id: 3, title: "Sauna", img: sauna },
    { id: 4, title: "Football", img: football },
  ];

  const handleImages = (img, id) => {
    if (img !== currentImage) {
      gsap.to(imgRef.current, { opacity: 0, duration: 0.4 });
      setTimeout(() => {
        setCurrentImage(img);
        gsap.to(imgRef.current, { opacity: 1, duration: 0.6 });
      }, 400);
    }
    handleHover(id);
  };

  const handleHover = (id) => {
    setHover(id);

   
    gsap.to(`.circle1-${id}`, {
      translateX: 20,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(`.circle2-${id}`, {
      translateX: 15,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(`.circle3-${id}`, {
      translateX: 10,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleLeave = (id) => {
    setHover(undefined);

    
    gsap.to(`.circle1-${id}`, {
      translateX: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(`.circle2-${id}`, {
      translateX: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(`.circle3-${id}`, {
      translateX: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.5 }
      );
    }


  
  }, [currentImage]);





  // framer motion
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;


  const curve = {

    initial: {

        d: initialPath

    },

    enter: {

        d: targetPath,

        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}

    },

    exit: {

        d: initialPath,

        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}

    }

  };




  return (
    <motion.div  ref={menuRef} 
         initial={{translateX: "103rem"}} animate = {{translateX: 0}} transition={{duration: 1.2, ease: [0.76, 0, 0.24, 1]}} exit={{translateX: "103rem"}}
         className="w-full h-screen bg-[#EEEEEE] absolute top-0 right-0 z-10 flex items-center justify-between gap-[10rem] text-[#343131]">
        <svg className='svgCurve'>

<motion.path variants={curve} initial="initial" animate="enter" exit="exit">
  
</motion.path>

</svg>
      <div className="px-[15rem] flex flex-col justify-center gap-6 text-5xl">
        {links.map((value) => (
          <div
            key={value.id}
            className="titles flex items-center"
            onMouseEnter={() => handleImages(value.img, value.id)}
            onMouseLeave={() => handleLeave(value.id)}
          >
            <h1 className=" cursor-pointer p-4 title duration-500 ease-in hover:text-gray-500 hover:translate-x-1 flex items-center gap-12">
              <div>
                <div
                  className={`w-4 h-4 rounded-full circle1-${value.id} ${
                    hover === value.id ? "bg-blue-500" : "bg-orange-500"
                  }`}
                />
                <div
                  className={`w-4 h-4 -mt-8 rounded-full circle2-${value.id} ${
                    hover === value.id ? "bg-blue-400" : "bg-orange-400"
                  }`}
                />
                <div
                  className={`w-4 h-4 -ml-2 -mt-2 rounded-full circle3-${value.id} ${
                    hover === value.id ? "bg-blue-300" : "bg-orange-300"
                  }`}
                />
              </div>
              {value.title}
            </h1>
          </div>
        ))}
      </div>

      <div className="w-full">
        <img
          src={currentImage}
          ref={imgRef}
          className="trans w-[30rem] h-[30rem] shadow-lg rounded-md object-fill transition-opacity duration-500 ease-in-out"
        />
      </div>
    </motion.div>
  );
};

export default Menu;
