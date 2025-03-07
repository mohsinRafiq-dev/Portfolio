import React from "react";
import Style from "./Contacts.module.css";
import Discord from "./imgs/vector.png";
import Mail from "./imgs/vector (1).png";
import Link from "./imgs/vector (2).png";

function Contacts() {
  return (
    <>
      <div className={Style.contacts}>
        <div className="top">
          <div
            data-aos="fade-down"
            className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
          >
            <div className={Style.h1}>
              <span className="text-[#C778DD]">#</span>contacts
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        <div className={Style.bottom}>
            <div className={Style.left}>
                <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
            <div className={Style.right}>
                <div>
                    <h2>
                        Message me here
                    </h2>
                </div>
                <div className={Style.socials}>
                    <a href="https://discord.com/" target="blank">
                    <img src={Discord} alt="" />
                    <p>urmadmax</p>
                    </a>
                </div>
                <div className={Style.socials}>
                <a href="mailto:muhammadmohsinrafiq54@gmail.com" target="blank">
                    <img src={Mail} alt="" />
                    <p>muhammadmohsinrafiq54@gmail.com</p>
                    </a>
                </div>
                <div className={Style.socials}>
                <a href="https://www.linkedin.com/in/muhammad-mohsin-rafiq-94060333a/" target="blank">
                    <img src={Link} alt="" />
                    <p>Mohsin Rafiq</p>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
