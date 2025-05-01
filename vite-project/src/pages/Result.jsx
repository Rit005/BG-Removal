// src/pages/Result.jsx

import React from "react";
// Removed --> import Navbar from '../components/Navbar';
import Footer from '../components/Upload'; // Assuming this is correct for your project structure
import { assets, plans } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();

  const handleTryAnotherImage = () => {
    navigate('/');
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = assets.image_wo_bg;
    link.download = 'background_removed_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const rectangleStyle = {

    width: '90%', // Make responsive
    
    maxWidth: '900px',
    
    height: 'auto', // Make responsive
    
    minHeight: '370px',
    
    borderRadius: '5px',
    
    border: '1px solid #EDEDED',
    
    backgroundColor: '#FFFFFF',
    
    padding: '20px', // Increased padding
    
    display: 'flex',
    
    flexDirection: 'column', // Stack on smaller screens
    
    gap: '20px', // Increased gap
    
    justifyContent: 'flex-start',
    
    alignItems: 'center',
    
    boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.08)',
    
    };
    
    const imageContainerStyle = {

      textAlign: 'center',
      
      width: '100%', // Take full width on smaller screens
      
      maxWidth: '45%', // Half width on larger screens
      
      display: 'flex',
      
      flexDirection: 'column',
      
      alignItems: 'center',
      
      };
      
      
      
      const imageStyle = {
      
      borderRadius: '10px',
      
      width: '100%',
      
      height: 'auto',
      
      objectFit: 'contain',
      
      maxHeight: '300px', // Limit image height
      
      marginBottom: '10px',
      
      };
      
      
      
      const buttonsContainerStyle = {
      
      marginTop: '20px',
      
      display: 'flex',
      
      gap: '16px',
      
      justifyContent: 'center',
      
      width: '100%',
      
      };
      
       

  return (
    // No Navbar tag needed here, App.jsx handles it.
    // The main content div starts immediately.
    <div className="flex flex-col justify-center items-center min-h-[70vh] py-10 bg-[#F9F9F9]">
      <div style={rectangleStyle}>
        {/* Original Image */}
        <div style={imageContainerStyle}>
          <p className="text-sm font-medium mb-1">Original</p>
          <img src={assets.image_w_bg} alt="Original" style={imageStyle} />
        </div>

        {/* Background Removed Image */}
        <div style={imageContainerStyle}>
          <p className="text-sm font-medium mb-1">Background Removed</p>
          <img src={assets.image_wo_bg} alt="Background Removed" style={imageStyle} />
          <div style={buttonsContainerStyle}>
            <button
              className="px-6 py-3 border border-[#A259FF] rounded-full text-[#A259FF] hover:bg-[#f3e8ff] transition text-sm cursor-pointer"
              onClick={handleTryAnotherImage}
            >
              Try another image
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-[#A259FF] to-[#FF6250] text-white rounded-full hover:opacity-90 transition text-sm cursor-pointer"
              onClick={handleDownloadImage}
            >
              Download image
            </button>
          </div>
        </div>
      </div>
      {/* ✅ Footer at the bottom */}

<Footer />

</div>

);

};


   

export default Result;