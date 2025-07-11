import React from 'react';
import Logo from "../assets/Images/logo.png";
import phone from '../assets/Icons/phone.png';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between md:justify-evenly px-4 md:px-18 py-4 md:py-3 shadow-md bg-white h-auto md:h-[137px] space-y-4 md:space-y-0">
      
      {/* Logo Section */}
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
        <img
          src={Logo}
          alt="GBIM Logo"
          className="h-[50px] md:h-[70px] w-[180px] md:w-[250px] md:ml-24"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-base md:text-2xl w-full md:w-auto">
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
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <button className="flex items-center justify-center bg-[#9E1C1C] text-white font-bold rounded-full hover:bg-red-800 transition duration-300 h-[60px] md:h-[70px] w-full md:w-[300px] px-4">
          <span className="flex items-center justify-center w-10 h-10 border border-white rounded-full mr-3">
            <img src={phone} className="w-5 h-5" alt="phone icon" />
          </span>
          <h1 className="text-lg md:text-2xl">Schedule A Call</h1>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
