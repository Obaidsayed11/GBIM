import React from 'react';
import Logo from "../assets/Images/logo.png"
import { Phone } from 'lucide-react';
import phone from '../assets/Icons/phone.png'

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
   <button className="flex items-center bg-[#9E1C1C] text-white font-bold rounded-full hover:bg-red-800 transition duration-300 h-[70px] w-[300px]">
  <span className="flex items-center justify-center w-10 h-10 border border-white rounded-full mr-3 ml-4">
     <img src={phone} className="w-5 h-5" />
  </span>
  <h1 className='text-2xl'> Schedule A Call</h1>
 
</button>


    </nav>
  );
};

export default Navbar;
