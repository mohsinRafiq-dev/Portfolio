import React from 'react'
import Style from '../Pages/Contacts_page.module.css'
import moduleName from 'module'

const Contacts_page = () => {
  return (
    <>
    <div className={Style.contacts}>
      <div className="top">
      <h1><span className='text-[#C778DD]'>/</span>Contacts</h1>
      <p>My contacts</p>
      </div>
      <div className={Style.bottom}>
        <div className={Style.left}>
          <p>I'm open to freelance opportunities, but if you have any other requests or questions, feel free to reach out!</p>
        </div>
        <div className={Style.right}>
          <div className={Style.messagebox}>
            <h2>Message me here</h2>
            <div className={Style.imgs}>
            <a href=""><img src={""} alt="" />MadMax</a>
            <a href=""><img src={""} alt="" />Madmax</a>
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