import { useEffect, useRef, useState } from "react";
import fitness from "../assets/fitness.jpg";
import pool from "../assets/pool.jpg";
import sauna from "../assets/sauna.jpg";
import football from "../assets/football.jpg";
import gsap from "gsap";

const Menu = () => {
  const [currentImage, setCurrentImage] = useState(fitness);
  const imgRef = useRef(null);
  const [hover, setHover] = useState(null);

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

    // Animate circles for the hovered link
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

    // Reset circle animations
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

  return (
    <div className="w-full h-screen bg-transparent absolute top-0 left-0 z-10 flex items-center justify-between gap-[10rem]">
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
    </div>
  );
};

export default Menu;
