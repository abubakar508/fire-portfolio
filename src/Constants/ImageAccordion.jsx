// IMPORT CONTAINIGN THE REACT DEPENDENCIES, IAMGES AND REACT ICONS

import React, { useState } from 'react';
import Rocket from '../Assets/Rocket.png';
import Learning from '../Assets/Learning.png'
import Goals from '../Assets/Goals.png'
import Personal from '../Assets/Personal.png'
import Inspiration from '../Assets/Inspiration.png'
import Africa2 from '../Assets/Africa2.png'
import { BsBarChartFill, BsBookHalf } from 'react-icons/bs'
import { GiHumanTarget, GiAfrica } from 'react-icons/gi'
import { FaSeedling } from "react-icons/fa6"
import  { RiLightbulbFlashFill } from 'react-icons/ri'


//dECLARATION FOR THE IMAGE TRANSITION
//Javascript code for the image accordion to receive an effect hen clickded. in this case
//expandable when clicked
const ImageAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
   //the useState(-1) enables the image accordion to resize once clicked again or anothe iamge is clicked.


  //An ARRAY THAT DISPLAYS THE IAMGES OF THE IMAGE ACCORDION
  const images = [
    {
        image: Rocket,
        icon: <BsBarChartFill className={` text-black w-full h-full  `} />,
        title: 'Blast off! Dream Big...',
        text: ' Get a full time job at a tech company involiving my area of specialities.',
        subtitle: 'Building web wonders in my imagination'
    },
    {
        image: Learning,
        icon: <BsBookHalf className={` text-black w-full h-full  `} />,
        title: 'Geeky Adventures & Web Wizardry',
        text: 'Not long ago in the age of my ancestors; just a 12-year aged boy. Since, its a battle between curiosity and brilliance in my brain',
        subtitle: 'My cerebrum is all dirty, rough & messy: I need a brain washing.'
    },
    
    {
        image: Goals,
        icon: <GiHumanTarget className={` text-black w-full h-full  `} />,
        title: ' Blockchain Proficiency',
        text: ' As I am writing this, my proficiency in blockchain is way below creating a decentralized app and initializing smart contracts',
        subtitle: 'lorem ipsum dolor sit amet'
    },
    {
        image: Personal,
        icon: <FaSeedling className={` text-black w-full h-full  `} />,
        title: ' I am Abisma, ismail Abisma!',
        text: ' Personal growth. It has been a journey and its still a journey to greatness.',
        subtitle: 'Becoming a super progeny of my ancestry!'
    },

    {
        image: Inspiration,
        icon: <RiLightbulbFlashFill className={` text-black w-full h-full  `} />,
        title: ' Lightbulb moments in my progress',
        text: ' A Tech-based background is the inspiration. Just staring the screen of a computer is also an inspiration.',
        subtitle: ' *The last part is a messy idea. You will ruin your optics.'
    },
    {
        image: Africa2,
        icon: <GiAfrica className={` text-black w-full h-full  `} />,
        title: ' Lightbulb moments in my progress',
        text: ' A Tech-based background is the inspiration. Just staring the screen of a computer is also an inspiration.',
        subtitle: ' *The last part is a messy idea. You will ruin your optics.'
    },
  ];


//This javascript code is for the click of th eimage i.e when clicked the image resizes toa specified width/height as stated in the code.
  const handleImageClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);

  };

  return (
    <div className=" md:relative hidden sm:hidden md:flex md:justify-between md:gap-5 md:p-4 md:max-w-screen-xl md:mx-auto md:overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={` flex-none cursor-pointer transform-gpu transition-transform border ${expandedIndex === index ? ' flex-grow scale-100 w-[400px] h-[400px] rounded-3xl transition-all duration-500 ease-in-out '
            : ' scale-95 w-[60px] h-[400px] transition-all ease-in delay-300 rounded-full mix-blend-color-dodge shadow-lg shadow-white/20'}`}
          onClick={() => handleImageClick(index)}
        >
          <img src={image.image} alt={`Image ${index + 1}`} className={` w-full h-full ${ expandedIndex === index ? ' hover:scale-95 overflow-hidden rounded-3xl object-cover transition-all ease-in ' : 'rounded-full object-cover'}`} />
          <div className={` absolute bottom-0 rounded-b-full ${ expandedIndex === index ? '  w-full h-full rounded-t-3xl grid grid-cols-2 ' :  ' w-full h-[4rem] items-center flex justify-center bg-zinc-300 '}`}>
            <div className={ ` ${expandedIndex === index ? ' w-[120px] h-[120px] m-3' : ' w-[40px] h-[40px]'} `}>
          {image.icon}
          </div>
            <div className=' m-2 absolute bottom-0'>
            <h1 className={` ${ expandedIndex === index ? '' : 'hidden'} text-start uppercase text-sky-600 font-montserrat font-bold`}>{image.title}</h1>
            <p  className={` ${ expandedIndex === index ? '' : 'hidden'} text-start text-balck font-montserrat font-medium`}>{image.text}</p>
            <small className={` ${ expandedIndex === index ? '' : 'hidden'} text-start text-balck font-montserrat font-light italic`}>{image.subtitle}</small>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default ImageAccordion;
