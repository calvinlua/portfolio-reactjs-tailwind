import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  SpotLight,
  useGLTF,
  Html,
} from "@react-three/drei"; //helper class
import { ArrowHint } from "../hints/ArrowHint.jsx";
import { extend } from "@react-three/fiber";

import CanvasLoader from "../Loader";

//take isMobile as a prop
const Computers = ({ isMobile }) => {
  //import GLTF model - import the scene
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(isMobile);

  return (
    <mesh>
      {/* create light */}
      <hemisphereLight intensity={0.8} groundColor="black" />
      <SpotLight
        position={[2, 2, -3]}
        angle={1}
        // anglePower={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Call for computer object */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.9}
        position={isMobile ? [0, -2, -1] : [0, -3.25, -1.5]} //x,y,z
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

//Draw the canvas to place the 3D model in
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add a listener for listening to changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");

    //set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //Add a callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} //x,y,z fov
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* React Loader */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} //enable left and right turn only >> angle
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Html justify-center>
          <ArrowHint />
        </Html>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
