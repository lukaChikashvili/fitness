import { useContext } from "react";
import fitness from "../assets/fitness.jpg";
import pool from "../assets/pool.jpg";
import sauna from "../assets/sauna.jpg";
import { UserContext } from "../context/UserContext";

const Trainers = () => {
      const { theme } = useContext(UserContext);
    
  return (
    <div className={`w-full min-h-screen flex flex-col gap-12 items-center justify-center mx-auto ${theme === 'light' ? "text-black" : "text-white"} `}>

        <div className="flex flex-col gap-4">
            <h1 className="text-3xl">Our Trainers</h1>
            <span className='w-full h-[0.12px] bg-gray-500'></span>
        </div>
       <div className="flex items-center gap-[4rem] ">
         <img className = "w-[25rem] h-[30rem] object-cover " src = {fitness} />
         <img className = "w-[25rem] h-[30rem] object-cover" src = {pool} />
         <img className = "w-[25rem] h-[30rem] object-cover" src = {sauna} />

       </div>
    </div>
  )
}

export default Trainers
