import React, { useState } from "react";
import { motion } from "framer-motion";

import Group1 from "../assets/Icons/Group1.png";
import Group2 from "../assets/Icons/Group2.png";
import Group3 from "../assets/Icons/Group3.png";
import Group4 from "../assets/Icons/Group4.png";
import Group5 from "../assets/Icons/Group5.png";

import img1 from "../assets/Images/work1.png";
import img2 from "../assets/Images/work2.png";
import img3 from "../assets/Images/work3.png";
import img4 from "../assets/Images/work4.png";
import img5 from "../assets/Images/work5.png";

const images = [img1, img2, img3, img4, img5];

const VerticalColumn = ({ delay }) => (
  <motion.div
    className="flex flex-col gap-8"
    animate={{ y: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 15,
      ease: "linear",
      delay,
    }}
  >
    <div className="flex flex-col gap-8">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Work ${index + 1}`}
          className="rounded-2xl shadow-lg w-[300px] h-auto"
        />
      ))}
    </div>
    <div className="flex flex-col gap-8">
      {images.map((src, index) => (
        <img
          key={`duplicate-${index}`}
          src={src}
          alt={`Work Duplicate ${index + 1}`}
          className="rounded-2xl shadow-lg w-[300px] h-auto"
        />
      ))}
    </div>
  </motion.div>
);

export const VerticalMarquee = () => {
  return (
    <div className="relative items-center space-x-4 overflow-x-auto md:overflow-hidden h-[700px] w-full max-w-full flex px-2">
      <div className="min-w-[300px] md:w-1/3">
        <VerticalColumn delay={0} />
      </div>
      <div className="min-w-[300px] md:w-1/3">
        <VerticalColumn delay={5} />
      </div>
      <div className="min-w-[300px] md:w-1/3">
        <VerticalColumn delay={10} />
      </div>
    </div>
  );
};

export default function FeaturedWork() {
  const categories = [
    { id: "digital", label: "DIGITAL CREATIVES", icon: Group1 },
    { id: "branding", label: "BRANDING", icon: Group2 },
    { id: "print", label: "PRINT DESIGN", icon: Group3 },
    { id: "website", label: "WEBSITE DESIGN", icon: Group4 },
    { id: "app", label: "APP DESIGN", icon: Group5 },
  ];

  const [active, setActive] = useState("digital");

  return (
    <div className="relative w-full py-20 px-4 bg-white">
      <div className="flex items-center justify-center flex-col mb-10 text-center">
        <h1 className="text-[#766f6f] text-2xl font-semibold mb-4">
          OUR FEATURED WORK
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold text-[#85142f] leading-snug">
          A showcase of strategies that turned <br className="hidden md:block" />
          vision into <span className="text-[#4B0082] font-bold">measureable success.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Sidebar */}
        <div className="flex flex-wrap md:flex-col gap-6 w-full md:w-[20%] justify-center md:justify-start mt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="flex items-center gap-3 text-sm md:text-xl font-medium uppercase tracking-wide transition-all"
            >
              <div
                className={`p-3 rounded-full ${
                  active === cat.id ? "bg-red-600" : "bg-red-100"
                }`}
              >
                <img src={cat.icon} alt={cat.label} className="w-5 h-5" />
              </div>
              <div className="relative">
                <span
                  className={`${
                    active === cat.id ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {cat.label}
                </span>
                {active === cat.id && (
                  <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-red-600 to-black"></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Vertical Marquee */}
        <div className="w-full md:w-[80%] h-[80vh] bg-gray-800 px-2 py-2 rounded-2xl flex overflow-x-auto md:overflow-hidden">
          <VerticalMarquee />
        </div>
      </div>
    </div>
  );
}
