import React from 'react'

const Lights = () => {
  return (
    <>
     <ambientLight intensity={1} />
     <directionalLight position={[5, 5, 5]} intensity={10} />
    </>
  )
}

export default Lights
