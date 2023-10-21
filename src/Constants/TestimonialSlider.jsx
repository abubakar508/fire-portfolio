import React from "react";
//importation of swiper components from swiper/react
import { Swiper, SwiperSlide } from "swiper/react";
//importation of swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

//importaion of images

import me from "../Assets/me.png";
//array of testimonial slider content: i.e images, titles(name), positions/roles

const testomonialData = [
  {
    image: me,
    name: "Abubakar Ismail",
    role: " Full Stack Developer; UI/UX Designer.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumqu laborum excepturi qui. Obcaecati architecto iusto quia illo.",
  },
  {
    image: me,
    name: "Haroun ismail",
    role: "  Backend Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumqu laborum excepturi qui. Obcaecati architecto iusto quia illo.",
  },
  {
    image: me,
    name: "Bashir Ismail",
    role: " Product Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumqu laborum excepturi qui. Obcaecati architecto iusto quia illo.",
  },
  {
    image: me,
    name: "Ahmad Ismail",
    role: " Full Stack Developer; UI/UX Designer.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumqu laborum excepturi qui. Obcaecati architecto iusto quia illo.",
  },
  {
    image: me,
    name: "Shamsa Issa",
    role: " Junior Product Desiner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumqu laborum excepturi qui. Obcaecati architecto iusto quia illo.",
  },
  {
    image: me,
    name: "Suleiman Hakim",
    role: " Blockchain Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumqu laborum excepturi qui. Obcaecati architecto iusto quia illo.",
  },
];
const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      loop={true}
    >
      {testomonialData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" flex md:flex-col md:p-8 gap-4 md:items-center backdrop-blur-sm md:rounded-lg">
              <div className=" h-[200px] w-[550px] md:h-[200px] md:w-[200px] bg-orange-500 md:rounded-full md:overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className=" object-cover md:object-contain md:absolute md:top-0 md:h-[200px] md:w-[200px] w-full h-full aspect-square md:rounded-b-full drop-shadow-2xl"
                />
              </div>
              <div className=" md:w-[500px] flex flex-col gap-2 md:items-center md:text-center justify-center">
                <div className=" text-2xl md:text-3xl text-zinc-300">
                  {item.name}
                </div>
                <small className=" text-white p-3 w-fit bg-teal-600">
                  {item.role}
                </small>
                <div className=" md:w-[500px] text-zinc-300">{item.text}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
