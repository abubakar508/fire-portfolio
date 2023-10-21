import React from "react";
import TestimonialSlider from "../Constants/TestimonialSlider";
import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <div>
      <div className=" flex flex-col gap-20 md:flex-row md:items-center md:justify-center h-screen md:p-24">
      <div className=" flex flex-col space-y-4 relative">
        <div className=" text-zinc-300 text-3xl md:text-4xl p-4 border-t-2 w-fit border-orange-500">Client Testimonials</div>
        <small className=" text-zinc-300 md:w-[400px] leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          voluptate, aperiam nobis libero fugit reprehenderit! Magni quidem
          reprehenderit iure cum laudantium praesentium odit nihil quod
          perspiciatis. Vel provident animi doloremque.
        </small>
        <Link to='/Contact' className=" border text-zinc-300 p-4 hover:bg-orange-500 transition-all duration-500 w-fit">Give Feedback</Link>
        <div className=" text-white md:absolute md:rotate-90 md:right-0 md:bottom-0 flex items-center gap-3 p-1 border-t-2 w-fit ">
            <div className=" h-[3px] w-[20px] bg-white" /> Drag to scroll{" "}
            <div className=" h-[3px] w-[20px] bg-white" />
          </div>
      </div>
      <div className=" md:max-w-[65%] md:shadow-2xl md:rounded-xl">
        <TestimonialSlider />
      </div>
      </div>
    </div>
  );
}

export default Testimonials;
