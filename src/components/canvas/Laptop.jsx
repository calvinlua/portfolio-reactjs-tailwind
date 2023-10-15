import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Environment,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

import "./laptop.css";

//helper class
// import RotationHint from "../hints/RotationHint.jsx";
// import { extend } from "@react-three/fiber";

// import CanvasLoader from "../Loader";

//take isMobile as a prop
const Laptop = ({ isMobile }) => {
  //import GLTF model - import the scene
  const laptop = useGLTF("./laptop/scene.gltf");
  console.log(isMobile);

  return (
    <>
      <Environment preset="dawn" />
      {/* limit y axis */}

      <PresentationControls global polar={[0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive object={laptop.scene} position-y={[-1, 2]}>
          <Html
            wrapperClass="laptop"
            position={[0, 1.5, -1.5]}
            transform
            distanceFactor={1.16}
            rotation-rotateX={-0.25}
          >
            <iframe src=""></iframe>
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
      <Laptop />
    </Canvas>
  );
};

export default LaptopCanvas;
