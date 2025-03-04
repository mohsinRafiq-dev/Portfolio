import React from 'react'
import Style from "./FirstSection.module.css";
import Profile from "../../Components/First-Section/profile.jpg";

function FirstSection() {
  return (
    <>
    <div className={Style.firstsection}>
      <div className={Style.left}>
        <div className={Style.info}>
        <h1>Elias is a <span className={Style.span}> web designer </span> and <br /> <span className={Style.span}> front-end developer</span> </h1>
        </div>
        <div className={Style.para}>
        <p>He crafts responsive websites where technologies <br /> meet creativity</p>
      </div>
      <button className={Style.contactbtn}>Contact me!</button>
      </div>
      <div className={Style.right}>
      <img src={Profile} alt="" />
      </div>
    </div>
    <div className={Style.quote}>
      <div className={Style.quotepara}>
        “Design is not just what it looks like and feels like. Design is how it works.”
      </div>
    </div>
    </>
  )
}

export default FirstSection
