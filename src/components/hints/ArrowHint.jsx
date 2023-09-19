import React, { useState, useEffect } from "react";
import "./ArrowHint.css"; // Create a CSS file for styling

const ArrowHint = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHint(false);
    }, 3000); // Adjust the timeout as needed for your desired fade-in and fade-out duration

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    showHint && (
      <div className="arrow-hint">
        <div className="arrow"></div>
      </div>
    )
  );
};

export default ArrowHint;
