import { styles } from "../styles";
import { LaptopCanvas } from "./canvas";

const Showcase = () => {
  return (
    //fullscreen
    <section className={"relative w-full h-screen mx-auto"}>
      <LaptopCanvas></LaptopCanvas>
    </section>
  );
};

export default Showcase;
