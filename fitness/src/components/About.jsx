import weight from '../assets/weight.png'
import group from '../assets/group.png'
import gym from '../assets/gym-cycle.png'
import trainer from '../assets/fitness.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const About = () => {
     
  const icons = [
    {id: 1, img: weight, title:  "Muscle building"},
    {id: 2, img: group, title: "Group workouts"},
    {id: 3, img: gym, title: "Lose weight"},
    {id: 4, img: trainer, title: "Get Trainer"},
  ];

  const { theme } = useContext(UserContext);
    
  return (
    <div className='bg-transparent w-full h-screen flex flex-col gap-24 items-center justify-center px-[15rem]'>
      <div>
        <motion.h2 initial = {{opacity: 0, translateX: "-10px"}}
         whileInView={{opacity: 1, translateX: 0}} transition = {{duration: 1.2,  delay: 1}}
         className={`text-2xl text-center leading-[3rem] ${theme === 'light' ? "text-black" : "text-white"}`}>
        Baia Gym offers a range of benefits for anyone looking to improve their fitness. 
        With state-of-the-art equipment, personalized training plans, and expert trainers,
         members can achieve their health and wellness goals effectively. 
        </motion.h2>
      </div>

      <div className={`flex items-center gap-[10rem] ${theme === 'light' ? "text-black" : "text-white" }`}>
         {icons.map((value, i) => (
            <motion.div initial = {{opacity: 0, translateY: "-8px"}}
             whileInView={{opacity: 1, translateY: 0}} 
             transition = {{duration: 0.6, delay: i * 0.3}}
             className='flex flex-col items-center  gap-8  duration-200 ease-in cursor-pointer hover:-mt-2' key = {value.id}>
              <img src = {value.img} className='w-36 h-36' />
              <h2>{value.title}</h2>
            </motion.div>
         ))}
      </div>
    </div>
  )
}

export default About
