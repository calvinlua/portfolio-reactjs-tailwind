import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Environment,
  PresentationControls,
  useGLTF,
  OrbitControls,
  Preload,
} from "@react-three/drei";

//helper class
// import RotationHint from "../hints/RotationHint.jsx";
// import { extend } from "@react-three/fiber";

import CanvasLoader from "../Loader";

//take isMobile as a prop
const Laptop = ({ isMobile }) => {
  //import GLTF model - import the scene
  const laptop = useGLTF("./laptop/scene.gltf");
  console.log(isMobile);

  return (
    <>
      <Environment preset="warehouse" />
      {/* limit y axis */}

      <PresentationControls>
        <primitive
          object={laptop.scene}
          position={isMobile ? [0, -2, -5] : [0, -2, 0]}
          zoom={true}
        >
          <Html
            position={isMobile ? [0, 1.96, -1.51] : [0, 1.98, -1.4]}
            transform
            distanceFactor={4}
            rotation-x={-Math.PI / 12}
            translateZ={100}
            occlude
          >
            {/* macbook screen ratio width 8 : 5 height */}
            <iframe
              width="290"
              height="200"
              src="https://www.youtube-nocookie.com/embed/hJwIs4FYV7E?si=r0704yLn13VLxwNO&amp;controls=1&loop=1&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-xl"
            ></iframe>
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/hJwIs4FYV7E?si=r0704yLn13VLxwNO&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
};

//Draw the canvas to place the 3D model in
const LaptopCanvas = () => {
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
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <Laptop isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LaptopCanvas;
