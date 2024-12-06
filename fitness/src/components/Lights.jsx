import React from 'react'

const Lights = () => {
  return (
    <>
     <ambientLight intensity={2} />
     <directionalLight position={[5, 5, 5]} intensity={30} />
    </>
  )
}

export default Lights
