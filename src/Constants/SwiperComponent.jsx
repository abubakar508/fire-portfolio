import React,  { useState } from 'react';
//This is an import of all swiper modules
import 'swiper/modules'; 
//import of swiper components
import Swiper from 'swiper';
//import of icons/images used in the swiper
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
//end of import of icons/images
const SwiperComponent = () => {
  // The element used here is not currently used in the latest React.JS version/ Next.JS 13
  React.useEffect(() => {
    // Start swiper ( Swiper programming stuff )
    const mySwiper = new Swiper('.swiper-container', {
      loop: true, 
      // loop={true} accepts looping through the swiper objects. i.e the loop has no designated ends (start & end)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      //navigation element specifies the action/ interaction received/accepted when the button is clicked. In
      //this scenario, the siwper swipes i.e left for prevEl ad right for nextEl
    });

    // This element remv=oves the swiper instance when the component unmounts
    return () => {
      mySwiper.destroy();
    };
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(-1);
 


  //An ARRAY THAT DISPLAYS THE IAMGES OF THE IMAGE ACCORDION
  const images = [
    {
        image: Rocket,
        icon: <BsBarChartFill className={` text-black w-full h-full  `} />,
        //To Display different icons( many icons in the same swiper), pu the images/icons in n array. the Javascript code
        //will only display objects when in an array. Otherwise an 'Uncaught error' will appear in the console
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



  const handleImageClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);

  };

  return (
    <div className="w-fit sm:hidden flex flex-col">
      <div className="swiper-container w-[370px] items-center justify-center flex h-[200px] overflow-hidden m-4">
        <div className="swiper-wrapper flex w-[400px] h-[180px]">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide w-[370px] items-center justify-center flex relative">
            <div className=" h-full flex items-center justify-center w-[400px]">
              <div className=' z-20 m-5 bottom-0 flex flex-col overflow-hidden'>
                <h1 className=' font-montserrat font-bold uppercase text-xl'>{image.title}</h1>
                <p className=' text-orange-500'>{image.text}</p>
                <small className=' text-black'>{image.subtitle}</small>
                <small className=' text-black'>This is Abisma</small>
              </div>
              <img src={image.image} alt="" className=' object-contain absolute' />
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className='  p-1 flex items-center justify-center mt-4'>
            <small className=' font-montserrat text-white text-base border-t'>Swipe - hold and drag</small>
        </div>
    </div>
  );
};

export default SwiperComponent;
