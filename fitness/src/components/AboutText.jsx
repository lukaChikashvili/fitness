import { useContext } from 'react';
import baia from '../assets/baia.jpg'
import { motion } from 'framer-motion'
import { UserContext } from '../context/UserContext';

const AboutText = () => {

    
  const { theme } = useContext(UserContext);


  return (
    <div className={`w-full min-h-screen p-[5rem] relative ${theme === 'light' ? "text-black" : "text-white"} `}>
        <div className='flex flex-col gap-8  '>
            
        <motion.h1 initial = {{opacity: 0,  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}}
                      whileInView={{opacity: 1, clipPath:  "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"}}
                      transition={{duration: 1, ease: 'easeIn', delay: 1}} 
        className='text-3xl text-center'>About Us</motion.h1>
        <motion.span initial = {{width: 0, opacity: 0}} whileInView={{width: '100%', opacity: 1}}
             transition={{duration: 1, ease: 'easeIn', delay: 1.2}}
        className='w-1/2 h-[0.12px] bg-gray-500'></motion.span>
        </div>

        <div className='flex items-center justify-between gap-20 mt-16 px-24   '>
            <div className='text-xl leading-[2.5rem] flex flex-col gap-8'>
               <motion.p initial = {{opacity: 0, translateX: "-10px"}}
           whileInView={{opacity: 1, translateX: 0}} transition = {{duration: 1.2,  delay: 0.8}}>
               From humble beginnings as a small local fitness center, Baia Gym quickly grew into a hub for health enthusiasts. Driven by a passion for helping individuals achieve their personal goals, we have built a reputation for excellence in training, state-of-the-art equipment, 
            and innovative fitness programs.
               </motion.p>

               <motion.p initial = {{opacity: 0, translateX: "-10px"}}
           whileInView={{opacity: 1, translateX: 0}} transition = {{duration: 1.2,  delay: 0.9}}>
               At Baia Gym, we don't just focus on physical transformation — we inspire a balanced lifestyle.
                Our mission has always been to empower our members, not just through workouts but through education, motivation, and a supportive environment.
               </motion.p>
            </div>

            <div>
                <motion.img initial = {{opacity: 0, translateX: "10px"}}
           whileInView={{opacity: 1, translateX: 0}} transition = {{duration: 0.2,  delay: 1}}  src = {baia} className='w-[120rem] h-[25rem] rounded-md shadow-lg shadow-black duration-500 ease-in hover:grayscale'/>
            </div>
        </div>

     
        
    </div>
  )
}

export default AboutText
