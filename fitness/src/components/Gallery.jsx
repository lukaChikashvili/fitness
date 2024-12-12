import { data } from '../components/CardData'
import Card from './Card'

const Gallery = () => {
  return (
    <div className='mt-[50vh] mb-[50vh]'>
       
       {data.map((value, i) => {
          return <Card key={i} i = {i} {...value} />
       })}
    </div>
  )
}

export default Gallery
