import React from 'react'

const Menu = () => {

    const links = [
        {
            id: 1,
            title: "Fitness"
        },

        {
            id: 2,
            title: "Pool"
        },


        {
            id: 3,
            title: "Sauna"
        },

        {
            id: 4,
            title: "Football"
        },




    ];


  return (
    <div className='w-full h-screen bg-transparent absolute top-0 left-0 z-10 flex items-center justify-between px-[10rem] '>
       <div className='p-[10rem] flex flex-col gap-6 text-5xl '>
           {links.map((value) => (
            <div key = {value.id}  >
                <h1 className='p-4 title duration-500 ease-in hover:text-gray-500 hover:translate-x-1 '>{value.title}</h1>
                
                </div>
           ))}
       </div>

       <div>

        image
       </div>
    </div>
  )
}

export default Menu
