import { BsFacebook } from "react-icons/bs"; 
import React from 'react'
import Style from '../Pages/About_page.module.css'
import { FaInstagram } from "react-icons/fa6";

const About_page = () => {
  return (
    <>
    <div className={`${Style.about} flex`}>
    <FaInstagram className='text-9xl text-[magenta]' />
    <BsFacebook className="text-9xl text-[magenta]" />
    </div>
    </>
  )
}

export default About_page