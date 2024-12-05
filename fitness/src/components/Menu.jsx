import { useEffect, useRef, useState } from 'react';
import fitness from '../assets/fitness.jpg'
import pool from '../assets/pool.jpg'
import sauna from '../assets/sauna.jpg'
import football from '../assets/football.jpg'
import gsap from 'gsap'
import { ChevronsRight } from 'lucide-react'

const Menu = () => {

    const [currentImage, setCurrentImage] = useState(fitness);
    const imgRef = useRef(null);

    const links = [
        {
            id: 1,
            title: "Fitness",
            img: fitness,
           
        },
        {
            id: 2,
            title: "Pool",
            img: pool,
            
        },
        {
            id: 3,
            title: "Sauna",
            img: sauna,
            
        },
        {
            id: 4,
            title: "Football",
            img: football,
            
        },
    ];

    const handleImages = (img) => {
        if (img !== currentImage) {
            gsap.to(imgRef.current, { opacity: 0, duration: 0.4 });
            setTimeout(() => {
                setCurrentImage(img);
                gsap.to(imgRef.current, { opacity: 1, duration: 0.6 });
            }, 400);
        }

       
        gsap.to(icon, {
            opacity: 1,
            duration: 0.5,
        });
    };

   
  

    useEffect(() => {
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, delay: 0.5 }
            );
        }
    }, [currentImage]);

    return (
        <div className='w-full h-screen bg-transparent absolute top-0 left-0 z-10 flex items-center justify-between gap-[10rem]'>
            <div className='px-[15rem] flex flex-col justify-center gap-6 text-5xl'>
                {links.map((value) => (
                    <div
                        key={value.id}
                        className='titles flex items-center'
                        onMouseOver={() => handleImages(value.img)}
                        
                    >
                        <h1 className='p-4 title duration-500 ease-in hover:text-gray-500 hover:translate-x-1'>
                            {value.title}
                        </h1>
                        {value.link} 
                    </div>
                ))}
            </div>

            <div className='w-full'>
                <img
                    src={currentImage}
                    ref={imgRef}
                    className='trans w-[30rem] h-[30rem] shadow-lg rounded-md object-fill transition-opacity duration-500 ease-in-out'
                />
            </div>
        </div>
    );
};

export default Menu;

