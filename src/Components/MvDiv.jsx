import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const tagsTop = [
  "#Branding",
  "#Logo Design",
  "#Social Media Design",
  "#Ad Creative Design",
  "#Landing Page Design",
  "#Website UI Design",
  "#Mobile App UI Design",
];

const tagsBottom = [
  "#User Experience Design",
  "#Creative Direction",
  "#Illustration Design",
  "#Typography Design",
  "#Digital Campaign Design",
  "#Interactive Design",
];

const Marquee = ({ children, direction = "left", speed = 15 }) => {
  const marqueeRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [`0%`, `-${contentWidth}px`] : [`-${contentWidth}px`, `0%`],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {/* Repeat content twice for seamless scroll */}
        <div ref={marqueeRef} className="flex gap-4 pr-4">
          {children}
        </div>
        <div className="flex gap-4 pr-4">{children}</div>
      </motion.div>
    </div>
  );
};

export default function DesignBanner() {
  return (
    <div className="flex flex-col items-center justify-center bg-white space-y-8 w-full px-4 mt-20 md:mt-40">
      <div className="max-w-7xl mx-auto text-center space-y-4 sm:space-y-6">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-400">
          DESIGN BEYOND BOUNDARIES
        </p>
        <h2 className="text-xl sm:text-3xl font-semibold text-[#7C0D37] leading-relaxed">
          We help you solve complex problems through <br />
          <span className="font-bold text-[#1D0F5F]">Human-centered, creative design solutions.</span>
        </h2>
      </div>

      <div className="w-full space-y-4">
        <Marquee direction="right" speed={25}>
          {tagsTop.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-xs sm:text-sm font-medium rounded-full text-gray-800 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </Marquee>

        <Marquee direction="left" speed={25}>
          {tagsBottom.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-xs sm:text-sm font-medium rounded-full text-gray-800 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
