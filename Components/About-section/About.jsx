import React from 'react'
import Style from './About.module.css'
import Image from '../About-section/imgs/Group 50.png'

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
            <div className={Style.left}>
                <p>Hello, i’m Mohsin!</p>
                <p>I’m a self-taught front-end developer based in Islamabad, Pakistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                <div className="button">
                    <button>Read More -{'>'}</button>
                </div>
            </div>
            <div className={Style.right}>
                <img src={Image} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About
