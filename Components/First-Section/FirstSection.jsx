import {React, useEffect, useRef} from "react";
import Style from "./FirstSection.module.css";
import Profile from "../../Components/First-Section/meee.png";
import Quote from "../../Components/First-Section/quote.png";
import { motion } from "framer-motion";
import Typed from "typed.js";

const HoverZoomImage = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    />
  );
};

function FirstSection() {
  const typedref = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedref.current, {
      strings: ["Full Stack Developer", "Mobile App Developer", "CS Student"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  
    return () => {
      typed.destroy();
    };
  }, []); // <-- Add empty dependency array
  
  return (
    <>
      <div className={Style.firstsection}>
        <div data-aos="zoom-in-right" className={Style.left}>
          <div className={Style.info}>
            <h1>
          Welcome to my <span className={Style.span}> Portfolio</span><br />
          I am a <span className={Style.span}><span ref={typedref}/></span>
            </h1>
          </div>
          <div className={Style.para}>
            <p>
            "I create dynamic, responsive websites where innovation meets design."
            </p>
          </div>
          <button className={Style.contactbtn}>Contact me!</button>
        </div>
        <div data-aos="zoom-in-left" className={Style.right}>
          <HoverZoomImage src={Profile} alt="My Picture" />
          <div className="working bg-[#282C33]  items-center  fit-content justify-end">
            <div className="flex items-center gap-2 border justify-center px-2">
              <div className="w-4 h-4 bg-[#C778DD] "></div>
                <p className="">Currently working on Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className={Style.quote}>
        <img src={Quote} alt="" />
      </div>
    </>
  );o
  
}

export default FirstSection;
