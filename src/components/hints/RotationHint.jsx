import React, { useState, useEffect } from "react";
import "./RotationHint.css"; // Create a CSS file for styling

const RotationHint = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHint((prev) => !prev); // Toggle the hint's visibility
    }, 5000); // Adjust the interval as needed (e.g., every 2 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    showHint && (
      <div className="rotation-hint">
        <div className="arrow"></div>
        <div className="hint-text">Rotate</div>
      </div>
    )
  );
};

export default RotationHint;
