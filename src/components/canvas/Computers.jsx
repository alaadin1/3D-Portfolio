import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  const spaceship = useGLTF('./spaceship/scene.gltf')
  const man = useGLTF('./holograming_man/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={.85} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight 
        position={[-20,50,10]}
       angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive object = {computer.scene}
        scale={.75}
        position = {[0,-3.00, -1.5]}
      rotation = {[-0.01, -0.2, -0.10]}
      />
    </mesh>
  )
}

const ComputerCanvas = () =>{
  return (
    <Canvas 
    frameLoop = "demand"
    shadows
    camera ={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls
         enableZoom={false} 
         maxPolarAngle={Math.PI/2}
         minPolarAngle={Math.PI/2}
         />
         <Computers />
      </Suspense>
      <Preload all />
    </Canvas>

  )
}

export default ComputerCanvas;