import { motion } from "framer-motion";
import "./Context.css";

import { useEffect } from "react";
import { staggerContainer } from "../motion";

const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-2.5 py-12 sm:px-2",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  heroHeading:
    "font-bold lg:text-[125px] md:text-[90px] sm:text-[50px] text-[2.4rem] sm:pl-3 lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
  heroDText:
    "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-[auto] mx-[auto]",
};

function Context() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={`${styles.yPaddings} flex justify-center`} id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div
          className="flex justify-center items-center flex-col z-10 lg:mt-[70px] mt-[70px] bg-cover bg-center"
          id="heroPage"
        >
          <h1 className={`${styles.heroHeading} font-press-start`}>
            NO RAGE QUIT 2024
          </h1>
          {/* <div className="frontPageBtn">
            <button className="Btn font-press-start font-normal" type="button">
              <a href="https://discord.com">Discord</a>
            </button>
            <button className="Btn font-press-start font-normal" type="button">
              <a href="https://devfolio.com">Devfolio</a>
            </button>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}

export default Context;
