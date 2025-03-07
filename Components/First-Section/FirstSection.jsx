import React from "react";
import Style from "./FirstSection.module.css";
import Profile from "../../Components/First-Section/profile.png";
import Quote from "../../Components/First-Section/quote.png";

function FirstSection() {
  return (
    <>
      <div className={Style.firstsection}>
        <div className={Style.left}>
          <div className={Style.info}>
            <h1>
              Mohsin is a <span className={Style.span}> web designer </span> and{" "}
              <br /> <span className={Style.span}> front-end developer</span>{" "}
            </h1>
          </div>
          <div className={Style.para}>
            <p>
              He crafts responsive websites where technologies <br /> meet
              creativity
            </p>
          </div>
          <button className={Style.contactbtn}>Contact me!</button>
        </div>
        <div className={Style.right}>
          <img src={Profile} alt="" />
          <div className="working bg-[#282C33]  items-center  fit-content justify-end">
            <div className="flex items-center gap-2 border justify-center px-2">
              <div className="w-4 h-4 bg-[#C778DD] "></div>
                <p className="">Currently working on Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.quote}>
        <img src={Quote} alt="" />
      </div>
    </>
  );o
  
}

export default FirstSection;
