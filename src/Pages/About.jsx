import React from "react";
import { Link } from "react-router-dom";
import { SiCircle, SiCss3, SiEslint, SiFigma, SiFramer, SiHeadlessui, SiHtml5, SiNextdotjs, SiNodedotjs, SiReact, SiSwiper, SiTailwindcss, SiThreedotjs, SiTypescript, SiVuedotjs } from "react-icons/si";
import { GiAchievement, GiSkills } from "react-icons/gi";
import orange from "../Assets/orange.png";

function About() {
  return (
    <div>
    <div className=" sm:h-screen md:h-screen items-center grid">
      <div className=" md:flex md:mx-24 md:my-8 md:items-center md:justify-center  md:gap-14">
        <div className=" flex  flex-col items-center justify-center md:flex-row md:space-x-32 md:justify-center">
          <section className=" border-[2px] border-green-200 w-[220px] h-[220px] items-center justify-center flex rotate-6 bg-orange-500 mt-10">
            <section className=" border-[2px] items-center flex justify-center h-[200px] w-[200px]   border-orange-500 -rotate-12 bg-cyan-800">
              <div className=" w-fit items-center justify-center animate-spin ">
                <div className="  items-center justify-center pb-3 flex">
                  <div className=" flex items-center rotate-90 w-fit">
                    <div className=" p-1 border-[2px] border-gray-700 w-fit aspect-square">
                      <Link>
                        <div
                          className="  aspect-square w-[19px] h-[19px] bg-sky-500 hover:bg-orange-600 animate-ping "
                          title="Projects"
                        />
                      </Link>
                    </div>
                    <div className=" w-[40px] h-[2px] bg-gray-700" />
                  </div>
                </div>
                <div className=" flex justify-between items-center">
                  <div>
                    <div className=" flex items-center w-fit">
                      <div className=" p-1 border-[2px] border-gray-700 w-fit aspect-square">
                        <Link>
                          <div
                            className="  aspect-square w-[19px] h-[19px] bg-sky-500 hover:bg-orange-600 animate-ping"
                            title="Projects"
                          />
                        </Link>
                      </div>
                      <div className=" w-[40px] h-[2px] bg-gray-700" />
                    </div>
                  </div>
                  <Link to="/Work">
                    <div className=" flex items-center justify-center">
                      <SiCircle className=" w-[30px] h-[30px] text-orange-600" />
                    </div>
                  </Link>
                  <div>
                    <div className=" flex items-center -rotate-180 w-fit">
                      <div className=" p-1 border-[2px] border-gray-700 w-fit aspect-square">
                        <Link>
                          <div
                            className="  aspect-square w-[19px] h-[19px] bg-sky-500 hover:bg-orange-600 animate-ping"
                            title="Projects"
                          />
                        </Link>
                      </div>
                      <div className=" w-[40px] h-[2px] bg-gray-700" />
                    </div>
                  </div>
                </div>
                <div className=" items-center justify-center flex pt-3">
                  <div className=" flex items-center -rotate-90 w-fit">
                    <div className=" p-1 border-[2px] border-gray-700 w-fit aspect-square">
                      <Link>
                        <div
                          className="  aspect-square w-[19px] h-[19px] bg-sky-500 hover:bg-orange-600 animate-ping"
                          title="Projects"
                        />
                      </Link>
                    </div>
                    <div className=" w-[40px] h-[2px] bg-gray-700" />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className=" m-10 md:m-3 md:w-[350px] p-3 flex flex-col space-y-2 relative pl-10">
          <div className=" flex flex-col items-center absolute left-0">
            <div className=" border-[2px] border-b-none p-1 border-zinc-300 ">
              <div className=" aspect-square w-[25px] h-[25px]  bg-orange-500" />
            </div>
            <div className=" w-[6px] h-[240px]  bg-gradient-to-b from-orange-500/90 via-white/10" />
          </div>
          <h1 className=" text-zinc-300 text-3xl uppercase font-montserrat ">
            About Abisma<span className=" text-orange-500">!</span>
          </h1>
          <small className=" text-zinc-300 font-montserrat">
            <span className=" uppercase text-orange-500 font-medium">
              Abisma
            </span>{" "}
            is a Full Stack Developer, experienced in website design, UI/UX
            design and web development. His experience is evidently seen when he
            codes with NodeJs & ReactJS and NextJS 13 frameworks.
          </small>
          <small className=" text-zinc-300 font-montserrat">
            Apart from desigining websites and being a Backend Developer, he is
            a Blockchain Developer with intermediate skills in EtherJS.
          </small>
          <small className=" text-zinc-300 font-montserrat">
            He happens to share a portion of the wield of pen: An Author &
            Scriptwriter.
          </small>
        </div>
      </div>
      <div className=" pb-10 md:pb-0 m-10 p-1 items-center flex md:flex-row lg:flex-col flex-col gap-2 justify-center">
        <div className=" items-center flex">
          <GiSkills className=" w-[50px] h-[50px] text-zinc-300" />
          <div className=" border-[2px] border-zinc-300 p-1">
            <div className=" apsect-square w-[20px] h-[20px] bg-orange-500" />
          </div>
          <div className=" w-[100px] h-[4px] bg-gradient-to-r from-orange-500/90 via-white/10" />
          <div className=" font-montserrat">
            <small className=" text-zinc-300 border-[2px] p-1 uppercase">
              SkillSet
            </small>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-3  md:grid-cols-5 md:gap-2 sm:grid-cols-4 font-montserrat">
          <div className=" border rounded-md p-1">
            <GiAchievement className=" text-orange-500" />
            <small className=" text-zinc-300">ReactJS Latest version</small>
            <div>
              <SiReact className=" text-zinc-300 animate-spin" />
            </div>
          </div>
          <div  className=" border rounded-md p-1">
            <GiAchievement className=" text-orange-500" />
            <small className=" text-zinc-300">NextJS 13 </small>
            <div>
              <SiNextdotjs className=" text-zinc-300" />
            </div>
          </div>
          <div className=" border rounded-md p-1">
            <GiAchievement className=" text-orange-500" />
            <small  className=" text-zinc-300">TailwindCSS - Expert</small>
            <div>
              <SiTailwindcss className=" text-zinc-300"  />
            </div>
          </div>
          <div className=" border rounded-md p-1" >
            <GiAchievement  className=" text-orange-500"/>
            <small className=" text-zinc-300">VueJs</small>
            <div>
              <SiVuedotjs   className=" text-zinc-300" />
            </div>
          </div>
          <div className=" border rounded-md p-1" >
            <GiAchievement   className=" text-orange-500"/>
            <small className=" text-zinc-300">ThreeJS - Intermediate</small>
            <div>
              <SiThreedotjs  className=" text-zinc-300" />
            </div>
          </div>
          <div className=" border rounded-md p-1" >
            <GiAchievement  className=" text-orange-500" />
            <small className=" text-zinc-300">Framer Motion/SwiperJS</small>
            <div className=" flex gap-3">
              <SiFramer className=" text-zinc-300"  />
              <SiSwiper  className=" text-zinc-300"/>
            </div>
          </div>
          <div className=" border rounded-md p-1">
            <GiAchievement className=" text-orange-500" />
            <small className=" text-zinc-300">Headless UI - Expert</small>
            <div>
              <SiHeadlessui className=" text-zinc-300" />
            </div>
          </div>
          <div  className=" border rounded-md p-1">
            <GiAchievement  className=" text-orange-500"  />
            <small className=" text-zinc-300">HTML5 & CSS3</small>
            <div className=" flex gap-3">
              <SiHtml5  className=" text-zinc-300" />
              <SiCss3  className=" text-zinc-300" />
            </div>
          </div>
          <div   className=" border rounded-md p-1">
            <GiAchievement className=" text-orange-500"  />
            <small className=" text-zinc-300">TypeScript/ EsLint / NodeJS</small>
            <div className=" flex gap-3">
              <SiTypescript  className=" text-zinc-300" />
              <SiEslint  className=" text-zinc-300" />
              <SiNodedotjs className=" text-zinc-300"  />
            </div>
          </div>
          <div className=" border rounded-md p-1" >
            <GiAchievement  className=" text-orange-500" />
            <small className=" text-zinc-300">Figma - Intermediate</small>
            <div>
              <SiFigma className=" text-zinc-300"  />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
