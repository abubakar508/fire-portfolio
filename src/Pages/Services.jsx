import React from "react";
//import of swiper modules and dependencies
//import swiper styles from its module package
import 'swiper/css'


function Services() {
 
  return (
    <div>
      <div className=" flex flex-col   md:h-screen items-center justify-center">
        <div className=" m-4 p-2 items-center sm:flex sm:flex-row flex-col justify-center">
          <div className=" flex items-center justify-center border-[2px] w-fit p-2 backdrop-blur-sm -rotate-[20deg]">
            <div className=" items-center flex flex-col justify-center">
              <div className=" relative p-2 border-[2px] shadow-2xl shadow-white flex items-center justify-center">
                <div className=" aspect-square w-[30px] h-[30px] bg-orange-500 animate-spin -rotate-90" />
                <div className=" bg-sky-500 aspect-square w-[30px] h-[30px] rotate-180 absolute top-2 animate-spin hover:animate-ping " />
              </div>
              <div className=" w-[5px] h-[120px] bg-gradient-to-b from-orange-500 via-white/10 " />
            </div>
            <div className=" items-center flex flex-col justify-center rotate-180">
              <div className=" relative p-2 border-[2px] shadow-2xl shadow-white flex items-center justify-center">
                <div className=" aspect-square w-[30px] h-[30px] bg-orange-500 animate-spin -rotate-90" />
                <div className=" bg-sky-500 aspect-square w-[30px] h-[30px] rotate-180 absolute top-2 animate-spin hover:animate-ping " />
              </div>
              <div className=" w-[5px] h-[120px] bg-gradient-to-b from-orange-500 via-white/10 " />
            </div>
            <div className=" items-center flex flex-col justify-center">
              <div className=" relative p-2 border-[2px] shadow-2xl shadow-white flex items-center justify-center">
                <div className=" aspect-square w-[30px] h-[30px] bg-orange-500 animate-spin -rotate-90" />
                <div className=" bg-sky-500 aspect-square w-[30px] h-[30px] rotate-180 absolute top-2 animate-spin hover:animate-ping " />
              </div>
              <div className=" w-[5px] h-[120px] bg-gradient-to-b from-orange-500 via-white/10 " />
            </div>
          </div>
          <div
            className=" md:w-[500px] md:h-[230px] flex items-center flex-col justify-center border sm:pl-5 text-center sm:text-start
          space-y-5"
          >
            <h1 className=" uppercase text-[32px] sm:text-[32px] text-zinc-300 text-center font-montserrat">
              My Services<span className=" text-orange-500">!</span>
            </h1>
            <small className=" text-zinc-300 text-center font-montserrat">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              dignissimos error tenetur? Ad libero deleniti molestiae asperiores
              modi eos eum, consequatur quos soluta quam, culpa iusto autem?
              Architecto, nobis officiis.
            </small>
            <section>
              <div className=" flex items-center m-5">
                <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 -rotate-[10deg] ">
                  <div className=" w-[30px] h-[30px] aspect-square bg-sky-500 rotate-[10deg] items-center flex justify-center">
                    <div className=" rounded-full w-[20px] h-[20px] bg-cyan-800 flex items-center justify-center text-center">
                      <span className=" uppercase text-zinc-300 font-bold -rotate-[10deg] font-montserrat ">
                        A
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-[30px] h-[4px] bg-gradient-to-r from-orange-500 via-gray-600" />
                <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 -rotate-[10deg] ">
                  <div className=" w-[30px] h-[30px] aspect-square bg-sky-500 rotate-[10deg] items-center flex justify-center">
                    <div className=" rounded-full  w-[20px] h-[20px] bg-cyan-800 flex items-center justify-center text-center">
                      <span className=" uppercase text-zinc-300 font-bold -rotate-[10deg] font-montserrat ">
                        B
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-[30px] h-[4px] bg-gradient-to-r from-orange-500 via-gray-600" />
                <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 -rotate-[10deg] ">
                  <div className=" w-[30px] h-[30px] aspect-square bg-sky-500 rotate-[10deg] items-center flex justify-center">
                    <div className=" rounded-full  w-[20px] h-[20px] bg-cyan-800 flex items-center justify-center text-center">
                      <span className=" uppercase text-zinc-300 font-bold -rotate-[10deg] font-montserrat ">
                        I
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-[30px] h-[4px] bg-gradient-to-r from-orange-500 via-gray-600" />
                <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 -rotate-[10deg] ">
                  <div className=" w-[30px] h-[30px] aspect-square bg-sky-500 rotate-[10deg] items-center flex justify-center">
                    <div className=" rounded-full  w-[20px] h-[20px] bg-cyan-800 flex items-center justify-center text-center">
                      <span className=" uppercase text-zinc-300 font-bold -rotate-[10deg] font-montserrat ">
                        S
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-[30px] h-[4px] bg-gradient-to-r from-orange-500 via-gray-600" />
                <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 -rotate-[10deg] ">
                  <div className=" w-[30px] h-[30px] aspect-square bg-sky-500 rotate-[10deg] items-center flex justify-center">
                    <div className=" rounded-full  w-[20px] h-[20px] bg-cyan-800 flex items-center justify-center text-center">
                      <span className=" uppercase text-zinc-300 font-bold -rotate-[10deg] font-montserrat ">
                        M
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-[30px] h-[4px] bg-gradient-to-r from-orange-500 via-gray-600" />
                <div className=" w-[30px] h-[30px] aspect-square bg-orange-500 -rotate-[10deg] ">
                  <div className=" w-[30px] h-[30px] aspect-square bg-sky-500 rotate-[10deg] items-center flex justify-center">
                    <div className=" rounded-full  w-[20px] h-[20px] bg-cyan-800 flex items-center justify-center text-center">
                      <span className=" uppercase text-zinc-300 font-bold -rotate-[10deg] font-montserrat ">
                        A
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      
        
      </div>
    </div>
  );
}

export default Services;
