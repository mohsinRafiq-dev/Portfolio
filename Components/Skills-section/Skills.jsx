import React from "react";
import Picture from "../Skills-section/imgs/Logos.png";
import Style from "./Skills.module.css";

function Skills() {
  return (
    <>
      <div className={Style.skills}>
        <div data-aos="fade-down"
          className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2" >
          <div className={Style.h1}>
            <span className="text-[#C778DD]">#</span>skills
          </div>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>
        <div className="skills-section">
          <div className="left">
            <img src={Picture} alt="" />
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
