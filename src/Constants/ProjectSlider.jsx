import React from 'react'
//importation of swiper components
import { Swiper, SwiperSlide} from 'swiper/react'

//importation of swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
//import the design and branding/logo images to be placed on the swiper
import DC from '../Assets/DC.png'
import GPS from '../Assets/GPS.png'
import hb from '../Assets/hb.png'
import NK from '../Assets/NK.png'
import QB from '../Assets/QB.png'
import SR from '../Assets/SR.png'
import UDGF from '../Assets/UDGF.png'
import UIC from '../Assets/UIC.png'
import XD from '../Assets/XD.png'

//This is an array of images that will be mapped in the swiper {projects}
const projectData = [
    {
        img:DC,

    },
    {
        img:GPS,

    },
    {
        img:hb,

    },
    {
        img:NK,

    },
    {
        img:QB,

    },
    {
        img:SR,

    },
    {
        img:UDGF,

    },
    {
        img:UIC,

    },
    {
        img:XD,

    },
]
const ProjectSlider = () => {
  return (
    <Swiper
    breakpoints={{
        340: {
        slidesPerView: 1,
        spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 25,
        }
    }}
    loop= {true}
    className=" items-center py-6 h-[370px] sm:h-[400px] rounded-xl pb-2 p-2 shadow-2xl shadow-white/30"
    >
        {projectData.map((item, index) => {
            return <SwiperSlide key={index}>
                <div className=' h-[370px] rounded-xl shadow-lg shadow-gray-200/10'>
                    <img src={item.img} alt="" className=' w-full h-full object-contain md:object-cover rounded-xl' />
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default ProjectSlider;