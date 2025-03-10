import React from "react";
import Style from "../Footer/Footerr.module.css";
import Logo from "../Footer/imgs/Logo (1).png";
import Github from "../Footer/imgs/Github.svg";
import Twitter from "../Footer/imgs/Twitter (1).svg";
import Link from "../Footer/imgs/Linkedin (1).svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Footerr() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className={Style.footer}
      >
        <div className={Style.left}>
          <div className={Style.contain}>
            <img className={Style.logo} src={Logo} alt="" />
            <h1>Mohsin</h1>
          </div>
          <div className="email">
            <a href="">muhammadmohsinrafiq54@gmail.com</a>
          </div>
        </div>
        <div className={Style.right}>
          <h1>Media</h1>
          <div className={Style.imgs}>
            <a href="">
              <img src={Github} alt="" />
            </a>
            <a href="">
              <img src={Twitter} alt="" />
            </a>
            <a href="">
              <img src={Link} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div data-aos="fade-right"
     data-aos-anchor-placement="bottom-bottom" className={Style.bottom}>
        <p>Computer Science Student & Full-Stack Developer based in Pakistan</p>
      </div>
      <div  className={Style.copyright}>
        &copy; Copyright 2025. Made by Mohsin
      </div>
    </>
  );
}

export default Footerr;
