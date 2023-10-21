import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import chess from '../Assets/Chess.png'

const SwiperRun = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const SwiperData = [
    {
      img: chess,
    },
    {
      title: 'Project of the day',
      text: 'Lorem ipsum dolor sit amet!'
    },
    {
      title: 'Project of the day 2',
      text: 'Lorem ipsum dolor sit amet!'
    },
    {
      title: 'Project of the day 3',
      text: 'Lorem ipsum dolor sit amet!'
    },
    {
      title: 'Project of the day 4',
      text: 'Lorem ipsum dolor sit amet!'
    },
  ]
  return (
    <div className=" flex items-center border pt-16">
      <Swiper
        onSwiper={setSwiper}
        navigation
        className=" border-[3px] h-[200px] w-[400px] flex flex-row overflow-hidden"
      >
         {SwiperData.map((items, index) => {
        return  <SwiperSlide key={index}>
          <div className=" border-[2px] m-2 h-[180px] flex flex-col items-center overflow-hidden justify-center">
            <img src={items.img} alt="" className=" object-contain" />
            <h1 className=" text-zinc-300 uppercase">{items.title}</h1>
            <p className=" text-zinc-300">
              {items.text}
            </p>
          </div>
          
        </SwiperSlide>
        })}

      </Swiper>
      <div className="mt-4">
        <button
          onClick={goPrev}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={goNext}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SwiperRun;
