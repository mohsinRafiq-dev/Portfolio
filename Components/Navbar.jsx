// src/Components/Navbar.jsx
import React, { useState } from "react";
import Logo from "../Components/Logo.png";
import Style from "../Components/Navbar.module.css";
import Github from "../Components/Github.png";
import Dribble from "../Components/Dribble.png";
import Figma from "../Components/Figma.png";
import Stroke from "../Components/Stroke.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={Style.header}>
      <div className={Style.left}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        Mohsin
      </div>
      <div className={Style.right}>
        <button className={Style.hamburgerIcon} onClick={toggleMenu}>
          &#9776; 
        </button>
        <div className={`${Style.menuItems} ${isOpen ? Style.open : ''}`}>
          <a className={Style.element} href="#home">
            <span className={Style.span}>#</span>home
          </a>
          <a className={Style.element} href="#projects">
            <span className={Style.span}>#</span>projects
          </a>
          <a className={Style.element} href="#about-me">
            <span className={Style.span}>#</span>about-me
          </a>
          <a className={Style.element} href="#contacts">
            <span className={Style.span}>#</span>contacts
          </a>
          <div className={Style.socials}>
            <a className={Style.github} href="https://github.com/mohsinRafiq-dev?tab=repositories" target="blank"><img src={Github} alt="" /></a>
            <a className={Style.dribble} href="" target="blank"><img  src={Dribble} alt="" /></a>
            <a className={Style.figma} href="" target="blank"><img src={Figma} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;