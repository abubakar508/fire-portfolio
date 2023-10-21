import React from "react";
import headerimg from "../Assets/HeaderLeft.png";
import {
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiFacebook,
  SiJetpackcompose,
} from "react-icons/si";
// import the link router
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className=" fixed left-0 z-50 top-0 w-[100px] md:w-[200px]">
        <img src={headerimg} alt="" />
      </div>
      <div className=" sm:absolute sm:left-4 sm:h-screen sm:p-2 sm:items-center sm:flex sm:flex-col sm:justify-center hidden">
        <div className=" flex flex-col backdrop-blur-sm p-3 rounded-full border ml-2 fixed w-[35px] items-center space-y-5 z-50">
          <div className=" flex flex-col space-y-4">
            <SiGithub className=" text-zinc-100" />
            <SiInstagram className=" text-zinc-100" />
            <SiTwitter className=" text-zinc-100" />
            <SiFacebook className=" text-zinc-100" />
          </div>
          <div className=" w-[3px] h-[100px] bg-white" />
          <div className=" group">
            <SiJetpackcompose className=" hover:text-orange-500" />
            <div className=" absolute pl-4 left-0 hidden md:group-hover:flex ">
              <div
                className=" bg-teal-600 relative flex items-center p-[6px]
                      rounded-md"
              >
                <div className=" text-[12px] leading-none font-semibold capitalize">
                  <span>Follow Me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-2 pr-24  fixed w-full items-center justify-end flex z-40 backdrop-blur-sm  text-slate-100">
        <div className=" p-2 justify-between space-x-3 font-montserrat">
        <Link className=" border p-2 rounded-md text-lg hover:bg-orange-500 "> Journey</Link>
        <Link className=" border p-2 rounded-md text-lg hover:bg-orange-500 ">Blog</Link>
        </div>  
      </div>
    </div>
  );
}

export default Header;
