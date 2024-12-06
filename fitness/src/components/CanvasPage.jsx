import {Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF} from "@react-three/drei"
import Lights from './Lights';
import { Physics, RigidBody } from '@react-three/rapier'

const CanvasPage = () => {
    const model = useGLTF('./dumb.glb ');

  return (
    <>
      <Canvas camera={{position: [10, 15.2, 4],   fov: 75, near: 0.1, far: 1000 }}>
    <Physics >
        <Lights />
        <OrbitControls makeDefault />

<RigidBody type='fixed'>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-6, 0, -5]} receiveShadow>
        <planeGeometry args={[150, 150]} />
         <meshPhysicalMaterial color="black" />
      </mesh>
      </RigidBody>

     <RigidBody colliders = "hull" restitution={1}>
       <primitive
        object={model.scene}
        scale={0.9}
        castShadow
        rotation={[0, 0.3, 0]}
        position={[4, 20, -4]}  
      />
</RigidBody>
</Physics>
      </Canvas>
    </>
  )
}

export default CanvasPage
