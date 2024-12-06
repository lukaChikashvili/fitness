import {Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF} from "@react-three/drei"
import Lights from './Lights';

const CanvasPage = () => {
    const model = useGLTF('./dumb.glb ');

  return (
    <>
      <Canvas>
        <Lights />
        <OrbitControls makeDefault />
      
       <primitive object={model.scene} scale = {0.5} />
      </Canvas>
    </>
  )
}

export default CanvasPage
