import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { GiFountainPen } from 'react-icons/gi';
import { SiHiveBlockchain } from 'react-icons/si';
import { RxCrop, RxDesktop, RxReader } from 'react-icons/rx';

const ServiceSlider = () => {
  const ServicesData = [
    {
      id: 1,
      icon: <RxCrop />,
      title: 'Branding',
      text: 'Be unique through our hands-on branding.',
    },
    {
      id: 2,
      icon: <RxDesktop />,
      title: 'Web Design, UI/UX Design',
      text: 'Get the best of web designs & web layouts.',
    },
    {
      id: 3,
      icon: <GiFountainPen />,
      title: 'ScriptWriting & Authorship',
      text: 'My wield of pen is not left out. Creativity was born here!',
    },
    {
      id: 4,
      icon: <RxReader />,
      title: 'Finance',
      text: 'Get your accounts right from my expertise.',
    },
    {
      id: 5,
      icon: <SiHiveBlockchain />,
      title: 'Blockchain Technology & dApps Development',
      text: 'The future is here, in Blockchain!',
    },
  ];

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      }}
      loop={true}
    >
      {ServicesData.map((item, index) => {
       return <SwiperSlide key={index}>
          <div className='border'>
            <span>{item.title}</span>
            <small>{item.text}</small>
            <div>{item.icon}</div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default ServiceSlider;
