import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
    const rectangleStyle = {
        border: '1px solid white',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        gap: '20px',
        backgroundColor: 'transparent',
    };

    const innerBoxStyle = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #E1E1E1',
        borderRadius: '8px',
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.05)',
    };

    return (
        <div className="mx-auto max-w-6xl py-10 xl:py-40 px-8 lg:px-16">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-[#4A5568] mb-8 sm:mb-12">
                Steps to remove background<br/> image in seconds
            </h1>

            <div style={rectangleStyle}>
                <div className="flex-1 flex flex-col items-center gap-4 p-8 rounded hover:scale-105 transition-all duration-500 max-w-md" style={innerBoxStyle}>
                    <div className="rounded-md bg-purple-100 p-3 lg:p-4">
                        <img className='w-8 h-8 lg:w-10 lg:h-10' src={assets.upload_icon} alt="Upload Icon" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl lg:text-2xl font-semibold text-neutral-800">Upload image</p> {/* Darker heading */}
                        <p className="text-sm lg:text-base text-neutral-500 mt-2"> {/* Lighter text */}
                            This is a demo text, will replace it later.<br /> This is a demo..
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center gap-4 p-8 rounded hover:scale-105 transition-all duration-500 max-w-md" style={innerBoxStyle}>
                    <div className="rounded-md bg-purple-100 p-3 lg:p-4">
                        <img className='w-8 h-8 lg:w-10 lg:h-10' src={assets.remove_bg_icon} alt="Remove Background Icon" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl lg:text-2xl font-semibold text-neutral-800">Remove background</p> {/* Darker heading */}
                        <p className="text-sm lg:text-base text-neutral-500 mt-2"> {/* Lighter text */}
                            This is a demo text, will replace it later.<br/> This is a demo..
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center gap-4 p-8 rounded hover:scale-105 transition-all duration-500 max-w-md" style={innerBoxStyle}>
                    <div className="rounded-md bg-purple-100 p-3 lg:p-4">
                        <img className='w-8 h-8 lg:w-10 lg:h-10' src={assets.download_icon} alt="Download Icon" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl lg:text-2xl font-semibold text-neutral-800">Download image</p> {/* Darker heading */}
                        <p className="text-sm lg:text-base text-neutral-500 mt-2"> {/* Lighter text */}
                            This is a demo text, will replace it later.<br/> This is a demo..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;