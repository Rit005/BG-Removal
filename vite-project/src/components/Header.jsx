import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-full bg-white py-24 overflow-hidden flex justify-center">
      <div className="w-[1100px] h-[500px] rounded bg-white px-6 py-10 flex gap-8 justify-between items-center relative shadow-md">
        {/* Left Text Side - Centered Vertically */}
        <div className="w-1/2 flex flex-col justify-center z-10">
          <h1 className="font-outfit font-normal text-neutral-700 leading-tight mb-6 text-4xl sm:text-5xl lg:text-6xl">
            Remove the <br />
            <span className="text-gradient font-semibold">background</span>&nbsp;from
            <br /> images for free.
          </h1>

          <p className="font-outfit font-normal text-lg text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
          </p>

          <div>
            <input type="file" id="upload-hero" hidden />
            <label
           htmlFor="upload-hero"
           className="inline-flex items-center gap-5 px-8 py-3 rounded-[100px] cursor-pointer bg-gradient-to-r from-[#7648FF] to-[#D34AF8] text-white font-outfit font-medium text-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-[200px] h-[50px] justify-center">
           <img width={20} src={assets.upload_btn_icon} alt="upload" />Upload your image
           </label>
  
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-1/2 flex justify-end relative items-center">
          <div className="absolute top-4 left-4 w-80 h-96 bg-gradient-to-br from-pink-100 via-violet-100 to-white rounded-3xl shadow-md -z-10"></div>

          <div className="absolute top-8 left-0 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-16 right-0 w-5 h-5 bg-orange-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-8 w-5 h-5 bg-blue-400 rounded-full animate-spin-slow"></div>

          <img
            src={assets.header_img}
            alt="Header Visual"
            className="w-[500px] h-auto object-contain rounded-xl shadow-xl transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;