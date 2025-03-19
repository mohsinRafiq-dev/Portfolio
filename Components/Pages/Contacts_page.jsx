import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiFillFacebook } from "react-icons/ai"; 
import React from 'react'
import Style from '../Pages/Contacts_page.module.css'

const Contacts_page = () => {
  return (
    <>
    <div className={Style.contacts}>
      <div className={Style.top}>
      <h1><span className='text-[#C778DD]'>/</span>Contacts</h1>
      <p>My contacts</p>
      </div>
      <div className={Style.bottom}>
        <div className={Style.left}>
          <p>I'm open to freelance opportunities, but if you have any other requests or questions, feel free to reach out!</p>
        </div>
        <div className={Style.right}>
          <div className={Style.messagebox}>
            <h2 className="border-b-1 border-[#ABB2BF]">Message me here</h2>
            <div className={Style.imgs}>
            <a className="flex items-center gap-[5px]" href=""><AiFillFacebook/>MadMax</a>
            <a className="flex items-center gap-[5px]" href=""><AiOutlineInstagram />Madmax</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={Style.media}>
      <h1><span className="text-[#C778DD]">#</span>all-media</h1>
    </div>
    </>
  )
}

export default Contacts_page