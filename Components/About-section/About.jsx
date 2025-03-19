import React from 'react'
import Style from './About.module.css'
import Image from '../First-Section/meee.png'

function About() {
  return (
    <>
    <div className={Style.about}>
        <div className="top">
                    <div data-aos="fade-down"
                      className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2" >
                      <div className={Style.h1}>
                        <span className="text-[#C778DD]">#</span>about
                      </div>
                      <div className="line w-2/3 h-px bg-[#C778DD]"></div>
                    </div>
        </div>
        <div className={Style.bottom}>
            <div data-aos="zoom-in-right" className={Style.left}>
                <p>Hello, I’m Mohsin!</p>
                <p>I’m a self-taught full-stack developer and a Computer Science student based in Islamabad, Pakistan. I specialize in building responsive, user-friendly websites from scratch, transforming ideas into seamless digital experiences.</p>
                <p>With expertise in both front-end and back-end development, I’ve been helping clients establish their online presence by crafting modern and efficient web solutions. Passionate about coding, I constantly explore the latest technologies and frameworks to enhance my skills and create innovative digital products.</p>
                <div className="button">
                    <button>Read More -{'>'}</button>
                </div>
            </div>
            <div data-aos="fade-up" className={Style.right}>
                <img src={Image} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About
