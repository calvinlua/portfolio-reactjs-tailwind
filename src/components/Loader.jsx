// import React from 'react'

// const Loader = () => {
//   return (
//     <div>Loader</div>
//   )
// }

// export default Loader


import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader