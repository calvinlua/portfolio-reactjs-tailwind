import { styles } from "../styles";
import { LaptopCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Showcase = () => {
  return (
    //fullscreen

    <section className={"relative w-full h-screen mx-auto"}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Enjoyment</p>

        <h2 className={styles.sectionHeadText}>Hobby.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am passionate about coding while immersing myself in music. It brings
        back my fond memories. I find that the fusion of these two elements not
        only fuels my creativity but also serves as a source of motivation
        throughout my professional journey. I have always believed that the
        coding, even when seemingly painful,it has the potential to yield
        remarkable and innovative solutions as you try to have fun in it. In
        fact, I have often found that what initially may appear as a silly
        experiment can transform into something extraordinary and exciting.
        These experiences have not only honed my coding skills but also
        instilled in me a sense of curiosity and an ability to think outside the
        box. I look forward to continually pushing the boundaries of what is
        possible in my field, and I am enthusiastic about the exciting
        developments that lie ahead in my career.
      </motion.p>
      <LaptopCanvas></LaptopCanvas>
    </section>
  );
};

export default SectionWrapper(Showcase, "showcase");
