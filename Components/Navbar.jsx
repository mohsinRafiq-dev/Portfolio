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
  
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; 
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
              <a className={Style.driblle} href="https://www.linkedin.com/in/muhammad-mohsin-rafiq-94060333a/" target="_blank" rel="noopener noreferrer">
                <img src={Link} alt="Linkedin" />
              </a>
              <a className={Style.figma} href="https://figma.com" target="_blank" rel="noopener noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
