import React from "react";
import { assets } from "../assets/assets";
import { useLocation } from 'react-router-dom'; // Import useLocation

const Upload = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return(
        <div className="pb-16 flex flex-col items-center justify-center">
            {/* Conditionally render the title */}
           {isHomePage && (
               <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold text-[#4A5568] mb-10 w-ful" >See the magic. Try now</h1>
           )}

           {/* Conditionally render the upload button */}
           {isHomePage && (
               <div className="mb-12"> {/* Increased margin below the button */}
               <input type="file" id="upload-hero" hidden />
               <label
                  htmlFor="upload-hero"
                  className="inline-flex items-center gap-5 px-8 py-3 rounded-[100px] cursor-pointer bg-gradient-to-r from-[#7648FF] to-[#D34AF8] text-white font-outfit font-medium text-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-[200px] h-[50px] justify-center">
                  <img width={20} src={assets.upload_btn_icon} alt="upload" />Upload your image
                  </label>
             </div>
       )}

               
                
                    <div className="flex items-center gap-8">
                        <img width={40} src={assets.facebook_icon} alt="Facebook" />
                        <img width={40} src={assets.twitter_icon} alt="Twitter" />
                        <img width={40} src={assets.google_plus_icon} alt="Google Plus" />
                    </div>
                </div>
            
        
    )
}

export default Upload