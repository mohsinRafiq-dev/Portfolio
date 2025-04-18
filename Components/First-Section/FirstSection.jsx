import { React, useEffect, useRef, useState } from "react";
import Style from "./FirstSection.module.css";
import Profile from "../../Components/First-Section/meee.png";
import Quote from "../../Components/First-Section/quote.png";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiEye, FiX } from "react-icons/fi";
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

function FirstSection({ scrollToContact }) {
  const typedref = useRef(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

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
  }, []);

  return (
    <>
      <div className={Style.firstsection}>
        <div data-aos="zoom-in-right" className={Style.left}>
          <div className={Style.info}>
            <h1>
              Welcome to my <span className={Style.span}> Portfolio</span>
              <br />
              I am a{" "}
              <span className={Style.span}>
                <span ref={typedref} />
              </span>
            </h1>
          </div>
          <div className={Style.para}>
            <p>
              "I create dynamic, responsive websites where innovation meets
              design."
            </p>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            <button onClick={scrollToContact} className={Style.contactbtn}>
              Contact me!
            </button>
            <button
              onClick={() => setShowResumeModal(true)}
              className={`${Style.contactbtn} border border-purple-400 hover:bg-purple-700 transition`}
            >
              Resume
            </button>
          </div>
        </div>

        <div data-aos="zoom-in-left" className={Style.right}>
          <HoverZoomImage src={Profile} alt="My Picture" />
          <div className="working bg-[#282C33] items-center fit-content justify-end">
            <div className="flex items-center gap-2 border justify-center px-2">
              <div className="w-4 h-4 bg-[#C778DD]"></div>
              <p className="">Currently working on Portfolio</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className={Style.quote}>
        <img src={Quote} alt="" />
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/10 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                  className={`${Style.resume} relative text-white text-center w-[90%] max-w-sm p-6 rounded-xl shadow-[0_0_10px_#C778DD] border border-[#C778DD]  `}
                >
              <button
                onClick={() => setShowResumeModal(false)}
                className={`${Style.crossbtn} absolute top-2 right-2 text-gray-400 hover:text-[#C778DD]`}
              >
                <FiX />
              </button>

              <h2 className={`${Style.resumeheading}`}>
                Resume
              </h2>

              <div className={`${Style.resumebtns} flex justify-center gap-4`}>
              <a
  href="https://drive.google.com/file/d/1oWOnwEy2C-WXA7qVEB_NXQAAV6fB5gcQ/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  type="application/pdf"
  className="px-5 py-2 flex items-center justify-center gap-2 transition"
>
  <FiEye /> <span>View</span>
</a>
  <a
    href="/Mohsin Rafiq Resume.pdf"  
    download                    
    className="px-5 py-2 flex items-center justify-center gap-2 transition"
  >
    <FiDownload /> <span>Download</span>
  </a>
</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FirstSection;
