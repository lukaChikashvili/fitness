import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import fitness from "../assets/fitness.jpg";
import pool from "../assets/pool.jpg";
import sauna from "../assets/sauna.jpg";


const Services = () => {
    const { theme } = useContext(UserContext);
  return (
    <div className={`w-full m-auto p-24 min-h-screen ${theme === 'light' ? "text-black" : "text-white"}  mt-24 ` }>
       
       <div className="grid grid-cols-3 gap-4 bg-[#D9EAFD] p-12">
                
                <div className="col-span-2 row-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src={fitness}
                        alt="Fitness"
                    />
                </div>

             
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src={pool}
                        alt="Pool"
                    />
                </div>

               
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src={sauna}
                        alt="Sauna"
                    />
                </div>
            </div>
    </div>
  )
}

export default Services
