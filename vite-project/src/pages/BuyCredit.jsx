import React from "react";

import Footer from '../components/Upload'; // Import the Upload component (assuming it contains the footer)
import { assets, plans } from "../assets/assets";

const Buycredit = () => {
  const rectangleStyle = {
    width: '90%',
    maxWidth: '1100px',
    borderRadius: '20px',
    border: '1px solid white',
    backgroundColor: 'transparent',
    padding: '20px',
    margin: '20px auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',

  };

  const planBoxStyle = {
    backgroundColor: 'white',
    borderRadius: '30px',
    border: '1px solid #EDEDED',
    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.08)',
    padding: '20px', // Adjusted padding
    width: '280px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    textAlign: 'center', // Center text within elements
  };

  const logoIconStyle = {
    width: '32px',
    marginBottom: '10px', // Adjusted margin
  };

  const titleStyle = {
    marginTop: '10px', // Adjusted margin
    fontSize: '1.2rem',
    fontWeight: 'semibold',
    color: '#4A5568', // Lighter shade of gray
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#6B7280',
    marginTop: '8px', // Adjusted margin
  };

  const priceStyle = {
    marginTop: '15px', // Adjusted margin
    color: '#4A5568', // Lighter shade of gray
    fontSize: '1.5rem',
    fontWeight: 'semibold',
  };

  const creditsStyle = {
    fontSize: '0.9rem',
    fontWeight: 'medium',
    color: '#6B7280',
  };

  const buttonStyle = {
    marginTop: '20px', // Adjusted margin
    width: '100%',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'semibold',
    padding: '10px',
    borderRadius: '25px',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    
      
    
      // No Navbar tag needed here
      <div className="min-h-[80vh] text-center pt-20 mb-10 bg-[#F9F9F9] py-16">
        <button className="border border-gray-400 px-8 py-2 rounded-full mb-8 text-sm hover:bg-gray-100 transition mt-4">
          Our Plans
        </button>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-[#4A5568] mb-8 sm:mb-12">
          Choose the plan that's right for you
        </h1>
  
        <div style={rectangleStyle}>
          {plans.map((item, index) => (
            <div key={index} style={planBoxStyle}>
              <img src={assets.logo_icon} alt="" style={logoIconStyle} />
              <h3 style={titleStyle}>{item.id}</h3>
              <p style={descriptionStyle}>{item.desc}</p>
              <p style={priceStyle}>
                ${item.price} <span style={creditsStyle}>/ {item.credits} credits</span>
              </p>
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: item.id === "Business" ? '#24272B' : '#24272B',
                }}
              >
                {item.id === "Business" ? "Purchase" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default Buycredit;