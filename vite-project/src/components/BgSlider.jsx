import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="py-16 md:py-10 mx-auto max-w-5xl px-8 lg:px-16"> {/* Increased max width and padding */}
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-[#4A5568] mb-8 sm:mb-12"> {/* Increased font size and margin */}
        Remove Background With High <br/> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-5xl overflow-hidden m-auto rounded-xl mt-10 shadow-lg"> {/* Increased max width and added shadow */}
        {/* Background Image */}
        <img
          className="w-full h-auto"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          alt=""
        />

        {/* Foreground Image */}
        <img
          className="absolute top-0 left-0 w-full h-auto"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt=""
        />

        {/* Slider */}
        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default BgSlider;