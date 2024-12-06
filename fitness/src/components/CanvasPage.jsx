import {Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Text3D, useGLTF} from "@react-three/drei"
import Lights from './Lights';
import { Physics, RigidBody } from '@react-three/rapier'
import { useRef } from 'react';
import * as THREE from 'three'
import vertex from '../shaders/plane/vertex.glsl'
import fragment from '../shaders/plane/fragment.glsl'
import Experience from './Experience';

const CanvasPage = () => {


  return (
    <>
      <Canvas camera={{position: [10, 15.2, 4],   fov: 75, near: 0.1, far: 1000 }}>
    <Physics >
        <Lights />
        <Experience />
</Physics>
      </Canvas>
    </>
  )
}

export default CanvasPage
