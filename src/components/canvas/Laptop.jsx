import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
  const group = useRef();
  console.log(isMobile);

  // useFrame(() => {});

  return (
    <group ref={group}>
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={true} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[0, Math.PI / 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        // domElement={events.connected} // The DOM element events for this controller will attach to
      >
        <mesh />

        <Environment preset="warehouse" />
        <primitive
          object={laptop.scene}
          position={isMobile ? [0, -1, -5] : [0, -1.8, 0]}
          zoom={true}
        />

        <Html
          position={isMobile ? [0, 1.96, -1.51] : [0, 0.19, -1.52]}
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
            src="https://e.notionhero.io/e1/p/26242b1-17e440db8350455b28d16cf0b039603"
            // title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
      </PresentationControls>
    </group>
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
          enablePan={false}
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
