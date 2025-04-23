import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const rectangleStyle = {
    width: '1100px',
    height: '450px',
    borderRadius: '5px',
    border: '1px solid #EDEDED',
    backgroundColor: '#FFFFFF',
    padding: '15px',
    display: 'flex',
    gap: '5px',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.08)',
  };

  const buttonStyle = {
    backgroundImage: 'linear-gradient(to right, #8B5CF6, #A855F7)', // Tailwind's purple-400 to purple-700
    color: 'white',
    fontWeight: '600', // Tailwind's semibold
    fontSize: '1.125rem', // Tailwind's lg
    padding: '0.75rem 2rem', // Tailwind's py-3 px-8
    borderRadius: '0.375rem', // Tailwind's rounded-md
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Tailwind's shadow-md
    transition: 'transform 0.3s ease-in-out',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div className="w-full bg-white py-24 overflow-hidden flex justify-center">
      <div style={rectangleStyle}>
        {/* Text on Left */}
        <div className="w-1/2 flex flex-col justify-start z-10 pt-10"> {/* Adjusted alignItems to flex-start and added paddingTop */}
          <h1 className="font-outfit font-normal text-neutral-700 leading-tight mb-6 text-5xl lg:text-6xl">
            Remove the <br /><span className="font-semibold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text ">background</span> from <br /> images for free. {/* Added white background to "background" */}
          </h1>
          <p className="font-outfit font-normal text-lg text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </p>
          <div>
            <input type="file" id="upload-hero" hidden />
            <label
              htmlFor="upload-hero"
              className="inline-flex items-center gap-3 cursor-pointer font-outfit font-medium shadow-md transition-transform duration-300 hover:scale-105"
              style={buttonStyle}
            >
              <img width={20} src={assets.upload_btn_icon} alt="upload" />
              Upload your image
            </label>
          </div>
        </div>

        {/* Image with background shapes and floating elements */}
        <div className="w-1/2 flex justify-end relative -ml-0 lg:translate-y-0 items-start pt-5"> {/* Adjusted alignItems and paddingTop */}
          <div className="absolute top-4 left-4 w-80 h-96 bg-gradient-to-br from-pink-100 via-violet-100 to-white rounded-3xl shadow-md -z-10"></div>

          <div className="absolute top-8 left-0 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-16 right-0 w-5 h-5 bg-orange-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-8 w-5 h-5 bg-blue-400 rounded-full animate-spin-slow"></div>

          <img
            src={assets.header_img}
            alt="Header Visual"
            className="w-[550px] h-auto object-contain rounded-xl shadow-xl transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;