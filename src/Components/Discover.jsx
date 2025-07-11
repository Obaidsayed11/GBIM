import React from "react";
import bgImage from "../assets/Images/Discover1.png";
import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import img4 from "../assets/Images/img4.png";
import img5 from "../assets/Images/img5.png";
import img6 from "../assets/Images/img6.png";
import img7 from "../assets/Images/img7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Discover() {
  return (
    <div
      className="relative w-full py-20 px-6 mt-40"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Discover the <span className="text-pink-400">AI-Powered</span> Designs
          <br /> We’ve Brought to Life
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto">
          Showcasing real, creative designs crafted through cutting-edge AI tools.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4">
          {["Graphic design", "Motion graphics", "Brand video"].map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full border border-gray-500 text-white hover:bg-pink-500 hover:border-pink-500 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        
      </div>
      <div className="flex  gap-6 pt-10 pb-4 ">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[250px] rounded-2xl overflow-hidden"
            >
              <img src={imgSrc} alt={`Design ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
    </div>
  );
}
