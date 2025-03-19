import { RiDiscordFill } from "react-icons/ri"; 
import { BiMailSend } from "react-icons/bi"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import React, {useRef, useState} from "react";
import Style from "./Contacts.module.css";
import {ToastContainer, toast} from 'react-toastify';
import Logos from "../Contacts/imgs/Logos.png";

function Contacts({ contactRef }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <div ref={contactRef} className={Style.contacts}>
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
            <div data-aos = "fade-right" className={Style.left}>
                <p>I'm open to freelance opportunities, but if you have any other requests or questions, feel free to reach out!</p>
            </div>
            <div data-aos="fade-up-left"  className={Style.right}>
                <div>
                    <h2>
                        Message me here
                    </h2>
                </div>
                <div className={Style.socials}>
                    <a href="https://discord.com/" target="blank">
                    <RiDiscordFill className="size-[22px]" />
                    <p>urmadmax</p>
                    </a>
                </div>
                <div className={Style.socials}>
                <a href="mailto:muhammadmohsinrafiq54@gmail.com" target="blank">
                    <BiMailSend className="size-[22px]" />
                    <p>muhammadmohsinrafiq54@gmail.com</p>
                    </a>
                </div>
                <div className={Style.socials}>
                <a href="https://www.linkedin.com/in/muhammad-mohsin-rafiq-94060333a/" target="blank">
                    <AiFillLinkedin className="size-[22px]" />
                    <p>Mohsin Rafiq</p>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <div className={Style.bottomm}>
      <div data-aos="zoom-in-right" className={Style.formContainer}>
            <form onSubmit={handleSubmit}>
            <h2>Send a <span className="text-[#C778DD]">#</span>message</h2>
                <label htmlFor="name"><span className="text-[#C778DD]">#</span>name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                
                <label htmlFor="email"><span className="text-[#C778DD]">#</span>email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <label htmlFor="message"><span className="text-[#C778DD]">#</span>message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    required
                ></textarea>
                <button className={Style.btn} type="submit">send </button>
            </form>
        </div>
        <ToastContainer/>
        <div data-aos="zoom-in-left" className={Style.bottRight}>
          <img src={Logos} alt="" />
        </div>
        </div>
    </>
  );
}

export default Contacts;
