import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom"; // <-- React Router Link
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser(); // Get the user object
  const { credit, loadCreditData } = useContext(AppContext);
  
  useEffect(() => {
    if (isSignedIn) {
      loadCreditData();
    }
  }, [isSignedIn, loadCreditData]);
  
  return (
    <nav className="bg-white shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center px-8 lg:px-16">
        {/* Logo links to Home - only rendered once */}
        <Link to="/">
          <img src={assets.logo} alt="bg.removal logo" className="w-48 lg:w-64" />
        </Link>
        
        {/* Clerk Auth */}
        {isSignedIn ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_icon} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">Credits: {credit}</p>
            </button>
            {user && (
              <p className="text-gray-600 max-sm:hidden">Hi, {user.firstName} {user.lastName}</p>
            )}
            <UserButton />
          </div>
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