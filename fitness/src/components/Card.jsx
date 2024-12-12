import React, { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const Card = ({ color, img, i}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    }) ;


    useEffect(() => {
      scrollYProgress.on("change", e => console.log(scrollYProgress.current))
    }, [])

  return (
    <div ref={container} className='h-screen flex items-center justify-center sticky top-0 '>
        <div style={{backgroundColor: color, top: `calc(-10% + ${i * 25}px)`}} className='relative -top-[10%] w-[1000px] h-[500px] rounded-lg shadow-lg flex items-center justify-center'>
        <div className='relative w-[60%] h-[100%] overflow-hidden'>
        <motion.div 
        className='flex items-center justify-center w-full h-screen'>
            <img src = {img} className='w-3/5 object-cover ' />
        </motion.div>
      </div>
        </div>
      
   
    </div>
  )
}

export default Card
