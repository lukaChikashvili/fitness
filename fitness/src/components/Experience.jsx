import {useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Text3D, useGLTF} from "@react-three/drei"
import {  RigidBody } from '@react-three/rapier'
import { useRef } from 'react';
import * as THREE from 'three'
import vertex from '../shaders/plane/vertex.glsl'
import fragment from '../shaders/plane/fragment.glsl'

const Experience = () => {
    const model = useGLTF('./dumb.glb ');

    const uniforms = useRef({
        color1: { value: new THREE.Color('#474F7A')},
        color2: { value: new THREE.Color('#98ABEE')},
        rippleCenter: { value: new THREE.Vector2(0.5, 0.5) },
        time: { value: 0 },
        rippleIntensity: { value: 0.3 },
      });

      const rippleMesh = useRef();

      useFrame((state, delta) => {
        uniforms.current.time.value += 0.0025;
    });
  

    const handleImpact = (position) => {
        const uv = new THREE.Vector2(
            (position.x + 6) / 150, 
            (position.z + 5) / 150
        );
        uniforms.current.rippleCenter.value = uv;
        uniforms.current.rippleIntensity.value = 0.5; 
        setTimeout(() => (uniforms.current.rippleIntensity.value = 0.3), 300);
    };


  return (
   <>
    <OrbitControls makeDefault />

<RigidBody type='fixed' onCollisionEnter={(e) => handleImpact(e.worldPosition)}>
        <mesh   ref={rippleMesh} rotation={[-Math.PI / 2, 0, 0]} position={[-6, 0, -5]} receiveShadow>
        <planeGeometry args={[150, 150]} />
        <shaderMaterial  ref={rippleMesh} uniforms={uniforms.current} vertexShader={vertex} fragmentShader={fragment} />
      </mesh>
      </RigidBody>

     <RigidBody colliders = "hull" restitution={1}>
       <primitive
        object={model.scene}
        scale={1}
        castShadow
        rotation={[0, 0.3, 0]}
        position={[4, 20, -5]}  
      />
</RigidBody>

<RigidBody colliders = "hull" restitution={1}>
       <primitive
        object={model.scene.clone()}
        scale={1}
        castShadow
        rotation={[0, 0.3, 0]}
        position={[4, 30, -2]}  
      />
</RigidBody>

<RigidBody colliders = "hull" restitution={1}>
       <primitive
        object={model.scene.clone()}
        scale={1}
        castShadow
        rotation={[0, 0.3, 0]}
        position={[4, 40, -8]}  
      />
</RigidBody>

<Text3D font='./helvetiker_regular.typeface.json'
 size={ 5 }
 height={ 0.2 }
 curveSegments={ 12 }
 bevelEnabled
 bevelThickness={ 0.4 }
 bevelSize={ 0.02 }
 bevelOffset={ 0 }
 bevelSegments={ 5 }
 rotation = {[-Math.PI * 0.5, 0, 1.2]}
 position = {[-8, 0, 17]}
>
  Baia Fitness
  <meshStandardMaterial color="orange" />
</Text3D>

<Text3D font='./helvetiker_regular.typeface.json'
 size={ 1 }
 height={ 0.2 }
 curveSegments={ 12 }
 bevelEnabled
 bevelThickness={ 0.02 }
 bevelSize={ 0.02 }
 bevelOffset={ 0 }
 bevelSegments={ 5 }
 rotation = {[-Math.PI * 0.5, 0, 1.2]}
 position = {[-4, 0, 15]}
>
Your Journey to Strength and Wellness Begins Here.
</Text3D>


   </>
  )
}

export default Experience
