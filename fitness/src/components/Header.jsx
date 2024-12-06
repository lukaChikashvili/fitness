import React, { useState } from 'react'
import Menu from './Menu';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
  return (
  <>
      <header className='flex items-center justify-between px-[5rem] text-white h-[5rem]'>
         <div>
            Baia
         </div>

         <div className='flex flex-col gap-2 cursor-pointer menu' onClick={() => setIsActive(!isActive)}>
            <div className={`w-10 h-0.5 bg-white ${isActive ? "rotate-12": ""} origin-left duration-500 ease-in`} />
            <div className={`w-10 h-0.5 bg-white ${isActive ? "-rotate-12": ""} origin-left duration-500 ease-in`}/>
         </div>

         {isActive && <Menu />}
      </header>

    
      </>
    
  )
}

export default Header
