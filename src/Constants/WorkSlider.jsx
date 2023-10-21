import React from "react";
//importaton of swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//importation of swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

//icons for the swiper {WorkSlider}

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxMobile,
} from "react-icons/rx";

//importation fo required modules

//WorkSlider data

const workData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Get the best product development experience from our hands on job",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Still having a meths facade? We'll make the button jump every time its clicked. Hire us",
  },
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "From UI/UX to web dev, we complete the whole architecture through our trusted team",
  },
  {
    icon: <RxReader />,
    title: "Authorship",
    description: "Get our creativity bustling the reading experiences.",
  },
  {
    icon: <RxRocket />,
    title: " Fast Development",
    description: "Want a fast development experience? Hire us & wait!",
  },
  {
    icon: <RxMobile />,
    title: " Responsiveness",
    description: " Mobile responsiveness is our top priority the moment we start coding!",
  },
];

const WorkSlider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        loop={true}
        className=" items-center py-6 h-[240px] sm:h-[290px] shadow-2xl shadow-gray-600 backdrop-blur-md p-1 rounded-xl"
      >
        {workData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className=" bg-teal-600 items-center h-[200px] lg:h-[250px] rounded-lg px-6 py-8 flex sm:flex-col 
              gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-teal-600/50 transiton-all duration-700 justify-between"
              >
                {/* icons of the Work slider */}
                <div className=" xl:text-5xl text-4xl text-rose-600 mb-4 ">
                  {item.icon}
                </div>
                {/* Arrow top right <RxArrowTopRight /> */}
                <div className=" text-3xl ">
                  <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-orange-500 transition-all duration-500" />
                </div>
                {/* title & description of the work slider */}
                <div>
                  <div className=" text-lg font-medium text-zinc-300">
                    {item.title}
                  </div>
                  <p className=" font-light max-w-[350px] lg:max-w-[370px] leading-normal text-zinc-300">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
