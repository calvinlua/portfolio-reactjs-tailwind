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
    // whileTap={{ scale: 0.9 }}

    <Tilt className="xs:w-[250px] w-full">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
        font-bold text-center "
            >
              {title}
            </h3>
          </div>
        </motion.div>
      </motion.button>
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
        I am a seasoned full-stack engineer with a strong professional
        background in the field of IoT devices, coupled with a profound
        expertise in smart device protocols and Programmable Logic Controllers
        (PLC). My experience includes contributing to the development of smart
        factories, demonstrating my commitment to continuous learning and
        innovation. My skill set extends to the frontend realm, encompassing
        technologies such as React.js and Vue.js, while my backend proficiency
        spans languages and frameworks like C#, Java Spring Boot, Node.js, and
        Python. My passion for 3D modeling and web development served as the
        impetus for my involvement in web-based projects.I pride myself on being
        a fast learner, consistently devising and delivering efficient,
        scalable, and user-friendly solutions that address real-world
        challenges. I am eager to collaborate with you to transform our ideas
        into reality. Let's work together to bring our ideas to life!
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
