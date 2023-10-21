import React from "react";

import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiMiniBars3BottomRight,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const NavData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "About", path: "/About", icon: <HiUser /> },
    { name: "Services", path: "/Services", icon: <HiRectangleGroup /> },
    { name: "Ambitions", path: "/Ambitions", icon: <HiMiniBars3BottomRight /> },
    { name: "Work", path: "/Work", icon: <HiViewColumns /> },
    {
      name: "Testimonials",
      path: "/Testimonials",
      icon: <HiChatBubbleBottomCenterText />,
    },
    { name: "Contact", path: "/Contact", icon: <HiEnvelope /> },
  ];
  return (
   <nav className=" flex flex-col items-center  lg:justify-center gap-y-4 fixed h-max bottom-0
    mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      {/* inner div of the nav tag */}
      <div className=" flex w-full lg:flex-col items-center justify-between
       lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] lg:h-max py-8
       bg-cyan-950 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full"
        >
          {NavData.map((link, index) => {
            return (
              <Link to={link.path} className={`
               relative flex items-center group hover:text-orange-500 transition-all duration-500
               text-zinc-300 `}
                key={index}
                >
                  {/* Tooltip for the navigation bar */}
                  <div className=" absolute pr-14 right-0 hidden lg:group-hover:flex ">
                    <div className=" bg-teal-600 relative flex items-center p-[6px]
                      rounded-md">
                  <div className=" text-[12px] text-white leading-none font-semibold capitalize">
                    {link.name}
                    </div>
                    {/* Triangle */}
                    <div className=" border-solid border-l-teal-600  border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                  </div>
                  {/* icons of the navigation bar */}
                <div>
                  {link.icon}
                </div>
              </Link>
            )
          })}

      </div>

   </nav>
  );
}

export default Navbar;
