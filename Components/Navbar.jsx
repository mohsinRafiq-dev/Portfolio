import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../Components/Footer/imgs/Logo (1).png";
import Style from "../Components/Navbar.module.css";
import Github from "../Components/Github.svg";
import Link from "../Components/Linkedin (1).svg";
import Twitter from "../Components/Twitter (1).svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div data-aos="flip-down" className={Style.header}>
        <div className={Style.left}>
          <div className={Style.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          Mohsin
        </div>
        <div className={Style.right}>
          <button className={Style.hamburgerIcon} onClick={toggleMenu}>
            &#9776;
          </button>
          <div className={`${Style.menuItems} ${isOpen ? Style.open : ""}`}>
            <NavLink
              onClick={closeMenu}
              className={({ isActive }) => isActive ? `${Style.element} ${Style.active}` : Style.element}
              to="/"
            >
              <span className={Style.span}>#</span>home
            </NavLink>

            <NavLink
              onClick={closeMenu}
              className={({ isActive }) => isActive ? `${Style.element} ${Style.active}` : Style.element}
              to="/projects"
            >
              <span className={Style.span}>#</span>projects
            </NavLink>

            <NavLink
              onClick={closeMenu}
              className={({ isActive }) => isActive ? `${Style.element} ${Style.active}` : Style.element}
              to="/about-me"
            >
              <span className={Style.span}>#</span>about-me
            </NavLink>

            <NavLink
              onClick={closeMenu}
              className={({ isActive }) => isActive ? `${Style.element} ${Style.active}` : Style.element}
              to="/contacts"
            >
              <span className={Style.span}>#</span>contacts
            </NavLink>
            <div className={Style.socials}>
              <a className={Style.github} href="https://github.com/mohsinRafiq-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" />
              </a>
              <a className={Style.driblle} href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <img src={Link} alt="Dribbble" />
              </a>
              <a className={Style.figma} href="https://figma.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Figma" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
