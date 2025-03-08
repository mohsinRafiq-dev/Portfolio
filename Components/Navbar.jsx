import React, { useEffect, useState } from "react";
import Logo from "../Components/Footer/imgs/Logo (1).png";
import Style from "../Components/Navbar.module.css";
import Github from "../Components/Github.png";
import Dribble from "../Components/Dribble.png";
import Figma from "../Components/Figma.png";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(()=>{
   Aos.init(); 
  })

  return (
    <>
    <div data-aos="flip-down"  className={Style.header}>
      <div className={Style.left}>
        <div className={Style.logo}>
          <img src={Logo} alt="" />
        </div >
        Mohsin
      </div>
      <div className={Style.right}>
        <button className={Style.hamburgerIcon} onClick={toggleMenu}>
          &#9776; 
        </button>
        <div className={`${Style.menuItems} ${isOpen ? Style.open : ''}`}>
          <NavLink activeClassName="active" onClick={closeMenu} className={Style.element} to="/">
            <span className={Style.span}>#</span>home
          </NavLink>
          <NavLink activeClassName="active" onClick={closeMenu} className={Style.element} to="/projects">
            <span className={Style.span}>#</span>projects
          </NavLink>
          <NavLink activeClassName="active" onClick={closeMenu} className={Style.element} to="/about-me">
            <span className={Style.span}>#</span>about-me
          </NavLink>
          <NavLink activeClassName="active" onClick={closeMenu} className={Style.element} to="/contacts">
            <span className={Style.span}>#</span>contacts
          </NavLink>
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