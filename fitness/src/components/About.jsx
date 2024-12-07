import weight from '../assets/weight.png'
import group from '../assets/group.png'
import gym from '../assets/gym-cycle.png'
import trainer from '../assets/fitness.png'

const About = () => {
     
  const icons = [
    {id: 1, img: weight, title:  "Muscle building"},
    {id: 2, img: group, title: "Group workouts"},
    {id: 3, img: gym, title: "Lose weight"},
    {id: 4, img: trainer, title: "Get Trainer"},
  ]
    
  return (
    <div className='bg-transparent w-full h-screen flex flex-col gap-24 items-center justify-center px-[15rem]'>
      <div>
        <h2 className='text-2xl text-center leading-[3rem]'>
        Baia Gym offers a range of benefits for anyone looking to improve their fitness. 
        With state-of-the-art equipment, personalized training plans, and expert trainers,
         members can achieve their health and wellness goals effectively. 
        </h2>
      </div>

      <div className='flex items-center gap-[10rem] '>
         {icons.map((value) => (
            <div className='flex flex-col items-center gap-8'>
              <img src = {value.img} className='w-36 h-36' />
              <h2>{value.title}</h2>
            </div>
         ))}
      </div>
    </div>
  )
}

export default About
