import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    // tilt effect card size
    <Tilt className="xs:w-[250px] w-full">
      {/* motion */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
      rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px]
        font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>

    //show title
    // <p>{title}</p>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a professional fullstack engineer with working background in IoT
        devices and deep understanding of knowledge in smart devices protocols
        and PLC. Have worked to developed smart factory.But that doesn't stop me
        from learning. I am equipped with frontend knowledge like React.js and
        Vue.js. I am also very experienced backend with C#, Java Springboot,
        Node.js and Python. My interest in 3D model and web also sparks how I
        started to develop with this website. I am quick learner and I devised
        fast creating efficient, scalable , user-friendly solutions that solve
        real-world problems. Let's work together to bring our ideas to life!
      </motion.p>

      {/* display cards, spread the title */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Wrap about and recognised as about id
export default SectionWrapper(About, "about");
