import React, { useState } from "react";
import { assets } from "../assets/assets";

const Footer = () => (
    <footer className="bg-gray-800 text-white py-8"> {/* Increased padding */}
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2025 bg.removal. All rights reserved.</p> {/* Increased font size */}
        <div className="mt-4">
          <a href="#" className="text-white mx-4 text-md">Privacy Policy</a> {/* Increased margin and font size */}
          <a href="#" className="text-white mx-4 text-md">Terms of Service</a> {/* Increased margin and font size */}
        </div>
      </div>
    </footer>
  );

export default Footer;