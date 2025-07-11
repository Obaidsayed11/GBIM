import React from 'react';
import Banners from '../assets/Images/banner.png';

import Frame0 from "../assets/Icons/Frame0.png";
import Frame1 from "../assets/Icons/Frame1.png";
import Frame2 from "../assets/Icons/Frame2.png";
import Frame3 from "../assets/Icons/Frame3.png";
import Frame4 from "../assets/Icons/Frame4.png";

const stats = [
  { icon: Frame0, count: "20+", label: "Years of Design Innovation" },
  { icon: Frame1, count: "50+", label: "Brands Launched from Scratch" },
  { icon: Frame2, count: "30+", label: "Industries Designed For" },
  { icon: Frame3, count: "100+", label: "Digital Interfaces Crafted" },
  { icon: Frame4, count: "200+", label: "Clients Collaborated With" },
];

const Banner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="relative -mt-28">
        <img src={Banners} alt="Banner" className="w-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0A132E] leading-snug">
            Strategic <span className="text-[#B22222] font-bold">Design</span>{' '}
            <span className="text-[#4B0082] font-bold">Thinking</span> for Smarter<br />
            Digital Solutions
          </h1>
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <button className="bg-[#0A132E] text-white px-6 py-2 rounded-full hover:bg-[#1b1b2e] transition">
              Get service
            </button>
            <button className="border border-[#0A132E] text-[#0A132E] px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Stats Navbar */}
      <div className="w-full flex items-center justify-center">
        <nav className="w-[80%] bg-white rounded-xl shadow-lg -mt-24 z-10 flex justify-between items-center flex-wrap px-2 py-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-2 px-2 py-2 min-w-[180px]">
              <img src={stat.icon} alt="icon" className="w-10 h-10" />
              <div className="p-1">
                <h3 className="text-3xl font-bold text-[#0A132E]">{stat.count}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;




