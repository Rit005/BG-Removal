import React from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom"; // <-- React Router Link

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-white shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center px-8 lg:px-16">
        {/* Logo links to Home */}
        <Link to="/">
          <img src={assets.logo} alt="bg.removal logo" className="w-48 lg:w-64" />
        </Link>

        


        

          {/* Clerk Auth */}
          {isSignedIn ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn({})}
              className="w-[120px] h-[30px] border-[2px] border-white rounded-full cursor-pointer bg-gradient-to-r from-[#7648FF] to-[#D34AF8] text-white font-outfit font-medium text-base shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2 px-6"
            >
              Get started
              <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
            </button>
          )}
        </div>
      
    </nav>
  );
};

export default Navbar;
