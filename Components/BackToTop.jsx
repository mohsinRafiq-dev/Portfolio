import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Style from "./BackToTop.module.css"; 

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className={Style.backtotop}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTop;
