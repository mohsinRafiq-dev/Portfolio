import Project_card from "../project_card/Project_card";
import Style from "./Projects.module.css";
import first from "./imgs/Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "ChertNodes",
      disc: "Minecraft servers hosting ",
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Node.js"],
      title: "ProtectX",
      disc: "Discord anti-crash bot ",
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "Node.js", "python"],
      title: "Kahoot Answers Viewer",
      disc: "Get answers to your kahoot quiz ",
    },
  ];

  return (
    <>
      <div id={Style.projects} className="px-5 max-w-[1560px] mx-auto mt-20 py-10 bg-[#282C33]">
        <div id={Style.line} className=" flex justify-between items-center gap-5">
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className={Style.h1}>
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          <div id={Style.view} data-aos="fade-down" className=" text-white font-medium">
            <NavLink  to="/projects">
              <span>View all ~~&gt;</span>
            </NavLink>
          </div>
        </div>
        <div id={Style.cards} className="flex flex-wrap justify-between gap-4 my-12">
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
