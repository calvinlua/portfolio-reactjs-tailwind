import { styles } from "../styles";
import { LaptopCanvas } from "./canvas";

const Showcase = () => {
  return (
    //fullscreen
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`absolute 
    inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <LaptopCanvas></LaptopCanvas>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
