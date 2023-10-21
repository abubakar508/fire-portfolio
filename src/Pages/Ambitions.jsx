import React from 'react'
import SwiperComponent from '../Constants/SwiperComponent'
import SwiperRun from '../Constants/SwiperRun'
import ImageAccordion from '../Constants/ImageAccordion'



function Ambitions() {
  return (
    <div className=' flex-col h-screen flex items-center justify-center'>
      <div className=' w-[300px] sm:w-[400px] md:w-[500px] text-center items-center justify-center'>
      <h1 className=' uppercase text-zinc-300 text-6xl'>Ambitions</h1>
      <small className=' font-montserrat text-zinc-300'>This are my ambitions. Ambitions that birth resistance. Resisitance that grow consistency. Consistency that overcomes success mental decomposition.</small>
      </div>
      <ImageAccordion />
      <SwiperComponent />
    </div>
  )
}

export default Ambitions