import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion"; //animation
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { LoopRepeat } from "three";
import About from "./About";
import { rotate_finger } from "../assets";

const Hero = () => {
  //check mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width and update state
    const checkWindowWidth = () => {
      if (window.innerWidth < 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener to check window width on resize
    window.addEventListener("resize", checkWindowWidth);

    // Initial check when component mounts
    checkWindowWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);
  return (
    //fullscreen
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`absolute 
    inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the rounded dot */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* the gradient downward line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi I'm <span className="text-[#915eff]">Calvin Lua</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As FullStack programmer , Software Engineer and 3D Web Enthusiast
          </p>
        </div>
      </div>

      <ComputersCanvas />
      {/* <motion.div fade>
        <img
          src={rotate_finger}
          className="relative h-[60px] w-[50px] flex content-center bottom-48 self-center"
        />
      </motion.div> */}
      {/* on xs device bottom-10 but usually bottom-32 */}
      <div className="absolute xs:inset-x-0 xs:bottom-0 bottom-32 w-full flex justify-center items-center">
        {/* anchor tag link */}
        {isMobile ? (
          <a href="#about">
            <div
              className="w-[35] h-[64px] rounded-3xl border-4 border-secondary
              flex justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 30, 0], //motion down
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
