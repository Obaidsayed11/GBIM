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

const Marquee = ({ children, direction = "left", speed = 50 }) => {
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [-width, 0] : [width, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {/* Duplicated content for seamless scroll */}
        <div ref={marqueeRef} className="flex gap-4">
          {children}
        </div>
        <div className="flex gap-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function DesignBanner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-8 w-[100vw] ">
      <div className="text-xs tracking-widest text-gray-500 uppercase">
        Design Beyond Boundaries
      </div>

      <div className="text-center border px-6 py-4 max-w-4xl">
        <p className="text-xl font-medium text-gray-900">
          <span className="text-red-600 font-semibold">
            We help you solve complex problems through human-centered,{" "}
          </span>
          <span className="text-purple-900 font-bold">
            creative design solutions
          </span>
        </p>
      </div>

      <div className="w-full max-w-6xl space-y-4">
        <Marquee direction="right" speed={15}>
          {tagsTop.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full text-gray-800 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </Marquee>

        <Marquee direction="left" speed={15}>
          {tagsBottom.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full text-gray-800 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
