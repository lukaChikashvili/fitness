import baia from '../assets/baia.jpg'

const AboutText = () => {
  return (
    <div className='w-full min-h-screen p-[5rem] relative '>
        <div className='flex flex-col gap-8  '>
            <div className='absolute -left-12 -top-4 w-36 h-36 bg-orange-500 rounded-full z-10'></div>
            <div className='absolute z-10 left-12 -top-12 w-36 h-36 bg-orange-400 rounded-full'></div>
            <div className='absolute -z-1 left-12 top-12 w-24 h-24 bg-orange-300 rounded-full'></div>
        <h1 className='text-3xl text-center'>About Us</h1>
        <span className='w-full h-[0.12px] bg-gray-500'></span>
        </div>

        <div className='flex items-center justify-between gap-20 mt-16 px-24   '>
            <div className='text-xl leading-[2.5rem] flex flex-col gap-8'>
               <p>
               From humble beginnings as a small local fitness center, Baia Gym quickly grew into a hub for health enthusiasts. Driven by a passion for helping individuals achieve their personal goals, we have built a reputation for excellence in training, state-of-the-art equipment, 
            and innovative fitness programs.
               </p>

               <p>
               At Baia Gym, we don't just focus on physical transformation — we inspire a balanced lifestyle.
                Our mission has always been to empower our members, not just through workouts but through education, motivation, and a supportive environment.
               </p>
            </div>

            <div>
                <img src = {baia} className='w-[120rem] h-[25rem] rounded-md shadow-lg shadow-black duration-500 ease-in hover:grayscale'/>
            </div>
        </div>

     
        
    </div>
  )
}

export default AboutText
