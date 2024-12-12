import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import football from '../assets/football.jpg';
import fitness from "../assets/fitness.jpg";
import pool from "../assets/pool.jpg";
import sauna from "../assets/sauna.jpg";

const Zoom = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Create transforms for each image based on scrollYProgress
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);

  const images = [
    { src: football, scale: scale4 },
    { src: fitness, scale: scale5 },
    { src: sauna, scale: scale6 },
    { src: pool, scale: scale8 },
    { src: pool, scale: scale9 },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, scale }, index) => (
          <motion.div
            key={index}
           
            style={{ scale }}
            className={`w-full h-full absolute top-0 flex items-center justify-center img img-${index + 1}`}
          >
            <img
              src={src}
              className="object-cover"
              alt={`Image ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Zoom;
