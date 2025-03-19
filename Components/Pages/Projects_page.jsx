import React from 'react'
import Style from  '../Pages/Projects_page.module.css'
import Project_card from '../project_card/Project_card'
import first from "../projects_section/imgs/rock-paper-scissors-neon-icons-vector.jpg";
import second from "../projects_section/imgs/OIP.jpg";
import third from "../projects_section/imgs/text.jpg";
import Fourth from "../projects_section/imgs/portfolio.png";

const Projects_page = () => {
   const projects = [
      {
        img: first,
        langs: ["html", "css", "javascript"],
        title: "Rock Paper Scissors",
        disc: "Game ",
      },
      {
        img: second,
        langs: ["html", "css", "javascript", "Node.js"],
        title: "Amazon Clone",
        disc: "Amazon Clone Website ",
      },
      {
        img: third,
        langs: ["html", "css", "javascript", "react.js",],
        title: "Text Analyzer",
        disc: "Text Analysis Tool",
      },
      {
        img: Fourth,
        langs: ["html", "css", "javascript", "react.js",],
        title: "Portfolio Website",
        disc: "Interactive Portfolio Website",
      },
    ];
  return (
    <>
    <div className={Style.projects}>
      <div className={Style.heading}><h1><span className='text-[#C778DD]'>/</span>Projects</h1>
      <p>List of my projects</p></div>
      <div className={Style.complete}>
      <h1><span className='text-[#C778DD]'>#</span>complete-projects</h1>
      </div>
      <div className="Projects">
      <div
          id={Style.cards}
          className="flex flex-wrap justify-between gap-4 my-12"
        >
          {projects.map(({ img, langs, title, disc }, index) => (
            <Project_card
              key={title}
              img={img}
              langs={langs}
              title={title}
              disc={disc}
            />
          ))}
        </div>
      </div>
      <div className={Style.small}>
      <h1><span className='text-[#C778DD]'>#</span>small-projects</h1>
      </div>
    </div>
    </>
  )
}

export default Projects_page