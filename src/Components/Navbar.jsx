import React from 'react';
import Logo from "../assets/Images/logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly px-18 py-3 shadow-md bg-white h-[137px]">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src= {Logo}
          alt="GBIM Logo"
          className="h-[70px] w-[250px] ml-24 "
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-8 text-2xl ml-0">
        <li className="text-[#9E1C1C] font-medium flex items-center cursor-pointer">
          Digital Marketing
          <svg
            className="w-4 h-4 ml-1 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.02 1.097l-4.25 3.84a.75.75 0 01-1.02 0l-4.25-3.84a.75.75 0 01.02-1.097z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="text-black flex items-center cursor-pointer">
          Marketing Technologies
          <svg
            className="w-4 h-4 ml-1 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.02 1.097l-4.25 3.84a.75.75 0 01-1.02 0l-4.25-3.84a.75.75 0 01.02-1.097z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="text-black cursor-pointer">About Us</li>
        <li className="text-black cursor-pointer">Blog</li>
        <li className="text-black cursor-pointer">Careers</li>
        <li className="text-black cursor-pointer">Contact Us</li>
      </ul>

      {/* CTA Button */}
      <button className="flex items-center px-5 py-2 bg-[#9E1C1C] text-white font-bold rounded-full hover:bg-red-800 transition duration-300 h-[70px] w-[300px]">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12h.01M9 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1> Schedule A Call</h1>
      </button>
    </nav>
  );
};

export default Navbar;
