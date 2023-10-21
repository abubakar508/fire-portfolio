import React, { useState, useEffect } from "react";
import me from "../Assets/me.png";
import { HiChartBarSquare, HiOutlineDocumentArrowDown } from "react-icons/hi2";
//framer motion imports
import { motion } from "framer-motion";
import { SiGithub, SiTwitter } from "react-icons/si";
import watermark from '../Assets/watermark-transformed.png'

function SplashPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    //This code declares a delay from the splash page in the homepage
    const delay = 8000;

    // This hides the splash page after the delay, whihc is 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, delay);

    // this removes the timer just after three seconds, no tops.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //Animate properties
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5 } },
  };
  //Slide in animate properties
  const slideInVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  //scale up with bounce
  const scaleUpVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 10 },
    },
  };
  //background- animation
  const colorChangeVariants = {
    hidden: { backgroundColor: "#000", color: "#fff" },
    visible: {
      backgroundColor: "#fff",
      color: "#000",
      transition: { duration: 1 },
    },
  };
  //partical showdown spalsh page
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: [0, 2, 0],
      rotate: [0, 360, 0],
      transition: { duration: 2,repeat: Infinity,
        repeatType: 'loop', },
      
    },
  };
 

  return (
    <motion.div
      className={` absolute z-50 h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-black ${
        showSplash
          ? " opacity-100 transition-opacity duration-1000 ease-in"
          : " opacity-0 transition-opacity duration-1000 ease-out hidden" 
         
      }`}
    
    >
      <div className=" absolute h-screen w-screen -z-50">
      <motion.img
      initial= 'hidden'
      animate= 'visible'
      variants={fadeInVariants}
      src={watermark}
       alt=""
       className=" h-full w-full object-cover mix-blend-darken brightness-125" />
      </div>
  
      {/* Splash apge content */}
      <motion.div
        className=" sm:w-[700px] p-1 z-1 flex flex-col space-y-5 items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        
        <h1 className=" text-[72px] text-center font-montserrat text-zinc-300 font-bold">
          My name, <span className=" text-orange-700 uppercase">Abisma</span>
        </h1>
        <div className=" p-2 sm:w-[500px] text-start sm:text-center flex flex-col leading-9">
          <small className=" text-zinc-300 font-montserrat md:text-xl">
            I am a <span>Web designer</span>,<span>Full Stack Developer</span>,{" "}
            <span>Blockchain Developer</span>, <span>Accounts & Finance</span> &{" "}
            <span> Author & Scriptwriter</span>
          </small>
          <small className=" font-montserrat text-zinc-300">
            Follow me on Github & Twitter!
          </small>
        </div>
        <p className=" text-zinc-300 font-montserrat text-[30px] text-center">
          Loading{" "}
          <span className=" text-[50px] text-purple-600 animate-ping">.</span>
          <span className=" text-[50px] text-orange-500 animate-ping delay-1000">
            .
          </span>
          <span className=" text-[50px] text-sky-500 animate-ping">.</span>
        </p>
        <div className=" flex gap-5 items-center justify-center">
          <div className=" animate-spin -rotate-90  w-[80px] h-[80px] bg-sky-500 ">
            <div className=" animate-spin -rotate-180  w-[80px] h-[80px] bg-orange-500 " />
          </div>
          <div className=" animate-spin -rotate-90  w-[80px] h-[80px] bg-purple-500 ">
            <div className=" animate-spin -rotate-180  w-[80px] h-[80px] bg-sky-500 " />
          </div>
          <div className=" animate-spin -rotate-90  w-[80px] h-[80px] bg-orange-500 ">
            <div className=" animate-spin -rotate-180  w-[80px] h-[80px] bg-purple-500 " />
          </div>
        </div>
      </motion.div>
      <div className=" m-5 p-2 flex flex-col items-center leading-9`">
        <motion.div
          className=" text-black font-bold font-montserrat text-xl"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {" "}
          Welcome to Abisma Portfolio Website
        </motion.div>
        <motion.div className=" text-orange-500 font-bold text-sm font-montserrat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        >
        We are what we repeatedly do,excellence then is not an act but a habit.
        </motion.div>
        <motion.div
        className=" text-white flex items-center leading-10 text-3xl gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        >
          <SiGithub />
          <SiTwitter />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Home() {
  return (
    <div>
      <SplashPage />
      <div className=" items-center flex justify-center h-screen">
        <div
          className=" items-center flex flex-col gap-1 justify-center md:flex-row md:gap-12 md:items-center 
         "
        >
          <div className=" items-center relative justify-center flex flex-col md:w-[400px] pb-14 font-montserrat ">
            <h1 className=" text-zinc-300 font-bold text-[32px] text-center ">
              This is
            </h1>
            <span className="text-orange-500 font-montserrat font-medium text-[72px] uppercase">
              Abisma
            </span>
            <div className=" items-center w-fit flex absolute bottom-0">
              <div className=" border-[2px] rounded-full border-zinc-300 p-1">
                <div className=" rounded-full w-[30px] h-[30px]  bg-orange-500" />
              </div>
              <div className=" h-[5px] w-[50px] xl:w-[100px] bg-orange-500" />
              <div className=" border-[2px] rounded-full border-zinc-300 p-1">
                <div className=" rounded-full w-[30px] h-[30px]  bg-orange-500" />
              </div>
              <div className=" h-[5px] w-[50px] xl:w-[100px] bg-orange-500" />
              <div className=" border-[2px] rounded-full border-zinc-300 p-1">
                <div className=" rounded-full w-[30px] h-[30px]  bg-orange-500" />
              </div>
            </div>
            <p className=" text-center text-zinc-300 ">
              A Frontend Developer, Backend Developer, Blockchain Developer,
              UI/UX Designer, Accounts & Finance, Scriptwriter & Author.
            </p>
          </div>
          <div className=" relative">
            <div className=" md:flex md:gap-8 items-center ">
              <div className=" mt-7 md:mt-0 border-[2px] border-green-200 rotate-[13deg] w-[270px] md:w-[400px] md:h-[400px] ">
                <div className=" bg-sky-500 -rotate-[10deg] md:w-[400px] md:h-[400px]">
                  <img
                    src={me}
                    alt=""
                    className=" saturate-0 border-[2px] border-black rotate-[4deg] md:w-[400px] md:h-[400px] "
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-10 p-1 md:hidden font-montserrat ">
                <button
                  className=" border p-4 items-center flex gap-3 text-zinc-100 rounded-md
           hover:transition-all hover:duration-500 hover:ease-in-out hover:bg-sky-500 hover:border-none hover:rounded-md
            "
                >
                  <HiChartBarSquare className=" text-zinc-100" /> Download CV
                </button>
                <button
                  className=" border p-4 items-center flex gap-3 text-zinc-100 bg-sky-500 hover:bg-teal-600 rounded-md 
             "
                >
                  Lets Talk
                </button>
              </div>
              <div className=" hidden md:flex flex-col gap-12 text-zinc-100 items-center justify-center font-montserrat">
                <HiOutlineDocumentArrowDown className=" w-[30px] h-[30px]  hover:text-orange-500" />
                <button className=" rotate-90 text-zinc-300 p-3  border rounded-md hover:bg-orange-500 hover:text-stone-800">
                  Let's Talk
                </button>
                <br />
                <button className=" rotate-90 text-zinc-300 p-3 border rounded-md hover:bg-orange-500 hover:text-stone-800">
                  Download CV
                </button>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
