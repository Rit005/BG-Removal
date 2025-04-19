import React from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <nav className="bg-white shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center px-8 lg:px-16">
        <img src={assets.logo} alt="bg.removal logo" className="w-48 lg:w-64" />
        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="bg-zinc-800 text-white flex items-center gap-4 px-8 py-6 sm:px-8 sm:py-6 text-sm rounded-full hover:bg-zinc-900 transition"
          >
            Get started <img src={assets.arrow_icon} alt="" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
