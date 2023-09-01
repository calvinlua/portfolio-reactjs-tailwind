import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei'; //helper class 
import { extend } from '@react-three/fiber'

import CanvasLoader from '../Loader';
const Computers = () => {

  //import GLTF model
  const computer = useGLTF('/public/desktop_pc/scene.gltf');

  return (
    
    <mesh>
      {/* create light */}
      <hemisphereLight intensity={0.6} 
      groundColor='black'/>
       <SpotLight
        position={[2, 2, -3]}
        angle={1}
        // anglePower={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1}/>
      

    {/* Call for computer object */}
    <primitive 
    object={computer.scene}
    scale={0.75}
    position={[0,-3.25, -1.5]} //x,y,z
    rotation={[-0.01, -0.2, -0.1]}
    />
    </mesh>
  );
};


//Draw the canvas to place the 3D model in
const ComputersCanvas = () => {
  return(

   <Canvas 
    frameloop="demand"
    shadows
    dpr={[1, 2]}
    camera={{position: [20, 3, 5], fov: 25}} //x,y,z fov
    gl={{preserveDrawingBuffer:true}}
    >
        
        {/* React Loader */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
          enableZoom={false} 
          maxPolarAngle={Math.PI/2} //enable left and right turn only >> angle
          minPolarAngle={Math.PI/2}
          />
          <Computers/>
       </Suspense>
       <Preload all/> 
   </Canvas>

  );
};



export default ComputersCanvas;