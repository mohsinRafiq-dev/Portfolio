import Style from '../project_card/Project_card.module.css'
const Project_card = ({ img, langs, title, disc }) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="300" className="border mx-auto w-full sm:w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        <div className="">
          <img className=" w-full" src={img} alt="" />
        </div>
        <div id={Style.skills} className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e, index) => {
            return <span key={index} className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        <div id={Style.disc} className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
          <div id={Style.livebtn} className="">
            <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
              Live {"<"}~{">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_card;
