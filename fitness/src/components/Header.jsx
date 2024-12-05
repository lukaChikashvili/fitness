import React from 'react'

const Header = () => {
  return (
  
      <header className='flex items-center justify-between px-[5rem] text-white h-[5rem]'>
         <div>
            Baia
         </div>

         <div className='flex flex-col gap-2 cursor-pointer'>
            <div className='w-12 h-0.5 bg-white' />
            <div className='w-12 h-0.5 bg-white'/>
         </div>
      </header>
    
  )
}

export default Header
