import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const rectangleStyle = {
    width: '1150px', // Adjust width to encompass both text and image
    borderRadius: '5px',
    border: '1px solid white',
    backgroundColor: 'white',
    padding: '40px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between', // Space out text and image
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start',
    maxWidth: '500px',
  };

  const imageContainerStyle = {
    // Styles for the image container (adjust as needed)
  };

  return (
    <div className="w-full bg-white py-24 overflow-hidden flex justify-center">
      <div style={rectangleStyle}>
        {/* Text Content */}
        <div style={textContainerStyle}>
          <h1 className="font-outfit font-normal text-neutral-700 leading-tight text-4xl">
            Remove the <br /> <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text">background</span> from <br />images for free.
          </h1>
          <p className="font-outfit font-normal text-lg text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </p>
          <div>
            <input type="file" id="upload-hero" hidden />
            <label
              htmlFor="upload-hero"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-outfit font-medium text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-400/40 animate-pulse"
            >
              <img width={20} src={assets.upload_btn_icon} alt="upload button icon" />
              Upload your image
            </label>
          </div>
        </div>

        {/* Image Content */}
        <div style={imageContainerStyle}>
          <div className="relative">
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
    </div>
  );
};

export default Header;