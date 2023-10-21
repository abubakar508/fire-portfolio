import React from 'react';
import firetel from '../Assets/firetel-transformed.png'

const Contact = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center ">
      <section className=' relative mt-10'>
      <div className=' rounded-lg md:h-screen md:w-screen h-screen w-screen border'>
        <img src={firetel} alt="" className=' w-full h-full object-cover' />
       
      </div>
      <div className=" backdrop-blur-sm border md:w-2/3 md:m-0 absolute md:left-20 top-32 md:top-12 shadow-lg rounded-lg p-8 w-full lg:w-1/3">
        
        <h2 className="text-3xl font-semibold text-white font-montserrat mb-6">Reach Me</h2>
        <form className="space-y-4 font-montserrat">
          <div className="flex flex-col font-montserrat space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-white md:text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 bg-transparent md:bg-white placeholder:text-white md:placeholder:text-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-white md:text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 bg-transparent md:bg-white placeholder:text-white md:placeholder:text-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-white md:text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 bg-transparent md:bg-white md:placeholder:text-gray-600 placeholder:text-white rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-black md:bg-orange-400  text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      
      </section>
    </div>
  );
};

export default Contact;
