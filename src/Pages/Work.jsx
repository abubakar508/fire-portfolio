import React from "react";
import SwiperRun from "../Constants/SwiperRun";
import WorkSlider from "../Constants/WorkSlider";
import { Link } from 'react-router-dom'

function Work() {
  return (
    <div>
      <div className=" h-screen xl:flex-row xl:p-24 md:p-24 items-center justify-center flex flex-col">
        
        <div className=" xl:w-[500px] md:w-[450px] flex flex-col gap-y-4 m-5 p-1">
          <div className=" text-3xl text-zinc-300 uppercase border-b-2 w-fit pb-2 border-orange-500">
            My Work
          </div>
          <p className=" text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            laborum excepturi qui. Obcaecati architecto iusto quia illo.
            Cupiditate praesentium adipisci nulla possimus sit et delectus at
            inventore assumenda culpa!
          </p>
          <Link to='/ProjectView'>
            <button className=" text-zinc-300 border p-3 transiton-all duration-700 hover:bg-orange-500 hover:text-zinc-300" >View my Projects</button>
            </Link>
          <div className=" text-white flex items-center gap-3 p-1 border-t-2 w-fit ">
            <div className=" h-[3px] w-[20px] bg-white" /> Drag to scroll{" "}
            <div className=" h-[3px] w-[20px] bg-white" />
          </div>
        </div>
        <div className=" w-full xl:max-w-[65%]">
          <WorkSlider />
        </div>
      </div>
    </div>
  );
}

export default Work;
