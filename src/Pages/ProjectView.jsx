import React from "react";
import ProjectSlider from "../Constants/ProjectSlider";
import { Link } from "react-router-dom";

const ProjectView = () => {
  return (
    <div>
      <section className=" flex flex-col md:flex-row xl:flex-row items-center jsutify-center h-screen gap-2 md:p-16 xl:p-28">
        <div className=" flex gap-3">
          <div className=" flex flex-col  items-center ">
            <div className=" border-[2px] p-1">
              <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 " />
            </div>
            <div className=" h-[120px] md:h-[300px] w-[6px] bg-gradient-to-b from-orange-500 via-white/10" />
          </div>
          <div className=" flex flex-col items-start space-y-3 justify-center relative">
              <Link to='/Contact' className=" border p-4 text-zinc-200 transiton-all duration-700 hover:bg-orange-500"> Contact Me</Link>
            <div className=" text-zinc-200 uppercase text-3xl">Design Schemes</div>
            <p className=" text-zinc-200 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae fugit explicabo atque voluptatibus dolores asperiores
              hic. Quisquam, consequatur necessitatibus voluptate esse debitis
              deleniti ullam ipsum dolores voluptates ut voluptatum eos.
            </p>
            <div className=" text-white flex items-center gap-3 p-1 border-t-2 w-fit ">
            <div className=" h-[3px] w-[20px] bg-orange-500" /> Drag to scroll{" "}
            <div className=" h-[3px] w-[20px] bg-orange-500" />
          </div>
          </div>
        </div>
        
        <div className=" xl:max-w-[65%] md:max-w-[65%]">
          <ProjectSlider />
        </div>
      </section>
    </div>
  );
};

export default ProjectView;
