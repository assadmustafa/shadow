"use client";
import React, { useState } from "react";
import Logout from "./logout";
import { SessionProvider } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-full flex flex-wrap items-center justify-between bg-blue-600 p-6">
      <a href="/">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png" alt="logo" className="w-10 pr-2" />
          <span className="text-xl font-semibold tracking-tight">
            Shadow
          </span>
        </div>
      </a>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="hover:bg-blue-500 flex items-center rounded border border-white px-3 py-2 text-white hover:border-white hover:text-white"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:w-auto lg:items-center`}
      >
        <div className="font-medium lg:flex-grow py-4 md:py-0 text-center sm:text-start">
          <a
            href="/dashboard"
            className="mr-4 mt-4 block text-blue-300 hover:text-white lg:mt-0 lg:inline-block transition duration-500"
          >
            Dashboard
          </a>
        </div>




       

      


      
        
        <div>
          <SessionProvider>
            <Logout />
          </SessionProvider>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
