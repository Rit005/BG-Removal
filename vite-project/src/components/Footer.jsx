import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full bg-white py-6 flex justify-center">
      <div className="flex justify-center gap-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            className="w-10 h-10 rounded-full shadow hover:opacity-80 transition"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            className="w-10 h-10 rounded-full shadow hover:opacity-80 transition"
          />
        </a>
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
          <img
            src={assets.google_plus_icon}
            alt="Google Plus"
            className="w-10 h-10 rounded-full shadow hover:opacity-80 transition"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
