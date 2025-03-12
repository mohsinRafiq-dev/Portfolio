import React from "react";
import Picture from "../Skills-section/imgs/Logos.png";
import Style from "./Skills.module.css";

function Skills() {
  const skills = [
    {
      title: "Languages",
      languages: ["TypeScript", "Lua", "Python", "JavaScript"],
    },
    { title: "Databases", languages: ["SQLite", "PostgreSQL", "Mongo"] },
    {
      title: "Tools",
      languages: [
        "VSCode",
        "Neovim",
        "Linux",
        "Figma",
        "XFCE",
        "Arch",
        "Git",
        "Font Awesome",
      ],
    },
    {
      title: "Other",
      languages: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
    },
    {
      title: "Frameworks",
      languages: [
        "React",
        "Vue",
        "Disnake",
        "Discord.js",
        "Flask",
        "Express.js",
      ],
    },
  ];
  return (
    <>
      <div
        id={Style.skills}
        className="px-5 max-w-[1560px] mx-auto mt-20 py-10"
      >
        <div data-aos="fade-right" className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        <div
          id={Style.bottom}
          className=" flex flex-wrap gap-10 justify-between items-center text-white"
        >
          <div data-aos="fade-right" className="mx-auto">
            <img className=" w-full mx-auto" src={Picture} alt="" />
          </div>
          <div
            data-aos="fade-right"
            className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4"
          >
            {skills.map(({ title, languages }, skillIndex) => (
              <div
                key={title} // ✅ Use the skill category title as a key (safer than index)
                className={`${Style.boxes} w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]`}
              >
                <div className={Style.title}>
                  <h2 className="font-semibold">{title}</h2>
                </div>
                <div
                  className={`${Style.languages} flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]`}
                >
                  {languages.map((language, langIndex) => (
                    <span
                      key={`${title}-${language}`}
                      className="text-[#ABB2BF]"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
