import "./styles.css";
import { ReactDOM } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop1.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
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
