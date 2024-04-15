import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../mocks/data";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Projects() {
  const { mainTitle, section } = useSelector((store) => ({
    mainTitle: store.projects.mainTitle,
    section: store.projects.section,
  }));

  return (
    <section className="w-screen bg-white overflow-hidden relative dark:bg-[#484148] dark:text-white">
      <header>
        <h1 className="text-[36px] my-[50px] font-medium">{mainTitle}</h1>
      </header>
      <article className="w-4/6 mx-auto flex justify-between gap-5 [&>*:nth-child(1)]:bg-[#DDEEFE] [&>*:nth-child(2)]:bg-[#D9F6F1] dark:[&>*:nth-child(1)]:bg-[#2D3235] dark:[&>*:nth-child(2)]:bg-[#495351]">
        {Object.values(section).map((base, index) => {
          return (
            <div
              className={`w-[500px] h-[650px] rounded-xl p-[30px] relative mb-[100px] text-start ${base.baseColor}`}
              key={index}
            >
              <h5 className="font-bold text-[29px] my-[10px]">{base.title}</h5>
              <p className="text-[16px] mb-[20px] w-4/5">{base.des}</p>
              <div className="flex gap-2 text-center mb-[20px] flex-wrap w-3/4 items-center">
                {base.prog.map((pr, index) => {
                  return (
                    <p
                      key={index}
                      className=" w-[82px] h-[32px] rounded-xl bg-white dark:bg-[#525252] font-bold"
                    >
                      {pr}
                    </p>
                  );
                })}
              </div>
              <div className="text-[20px] font-semibold flex justify-between mb-[20px]">
                <a href={base.link.github.url}>{base.link.github.name}</a>
                <a href={base.link.app.url}>
                  {base.link.app.name}{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="w-[12px]" />
                </a>
              </div>
              <img
                src={base.image}
                className="absolute bottom-[-50px] left-[0px]"
              />
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Projects;
