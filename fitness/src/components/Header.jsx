import React, { useState } from 'react'
import Menu from './Menu';
import gsap from 'gsap'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

  return (
  <>
      <header className='flex items-center justify-between px-[5rem]  h-[5rem] text-white' >
         <div>
            Baia
         </div>

         <div className='flex flex-col gap-2 cursor-pointer menu' onClick={() => setIsActive(!isActive)}>
            <div className={`w-10 h-0.5 ${isActive ? "bg-black" : "bg-white"} ${isActive ? "rotate-12": ""} origin-left duration-500 ease-in`} />
            <div className={`w-10 h-0.5  ${isActive ? "bg-black" : "bg-white"} ${isActive ? "-rotate-12": ""} origin-left duration-500 ease-in`}/>
         </div>

         {isActive && <Menu isOpen={isActive} />}
      </header>

    
      </>
    
  )
}

export default Header
