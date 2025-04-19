import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const originalImage = assets.originalImage;
  const removedBgImage = assets.processedImage;

  const rectangleStyle = {
    width: '900px',
    height: '370px',
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

  const imageContainerStyle = {
    textAlign: 'center',
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    borderRadius: '10px',
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    maxHeight: 'calc(100% - 50px)', // Reduced max height to create space for the button
  };

  const buttonsContainerStyle = {
    marginTop: '30px', // Added margin-top to create space
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    width: '100%',
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      {/* Main Content */}
      <div style={rectangleStyle}>
        {/* Original Image */}
        <div style={imageContainerStyle}>
          <p className="text-sm font-medium mb-1">Original</p>
          <img
            src={assets.image_w_bg}
            alt="Original"
            style={imageStyle}
          />
        </div>

        {/* Background Removed Image */}
        <div style={imageContainerStyle}>
          <p className="text-sm font-medium mb-1">Background Removed</p>
          <img
            src={assets.image_wo_bg}
            alt="Background Removed"
            style={imageStyle}
          />
          <div style={buttonsContainerStyle}>
            <button className="px-4 py-2 border border-[#A259FF] rounded-full text-[#A259FF] hover:bg-[#f3e8ff] transition text-xs">
              Try another image
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#A259FF] to-[#FF6250] text-white rounded-full hover:opacity-90 transition text-xs">
              Download image
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Result;