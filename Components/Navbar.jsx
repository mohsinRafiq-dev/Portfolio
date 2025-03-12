import { IoLogoInstagram } from "react-icons/io"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../Components/Footer/imgs/Logo (1).png";
import Style from "../Components/Navbar.module.css";
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
        <NavLink to="/">
            <img src={Logo} alt="Logo" />
        </NavLink>
          </div>
          <NavLink to="/">
          Mohsin
          </NavLink>
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
              <a href="https://github.com/mohsinRafiq-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
                 <AiFillGithub />
              </a>
              <a  href="https://www.linkedin.com/in/muhammad-mohsin-rafiq-94060333a/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a  href="https://www.instagram.com/_asadmughal/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="text-[37px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
