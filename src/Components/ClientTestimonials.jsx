import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Logos
import KishaaLogo from "../assets/Images/kishaa.png";
import EnekiiLogo from "../assets/Images/enekii.png";
import HilterLogo from "../assets/Images/hilter.png";
import TigerLogo from "../assets/Images/tiger.png";
import KaviLogo from "../assets/Images/kavi.png";

// Client Image
const ClientImg = "https://randomuser.me/api/portraits/women/44.jpg";

const categories = [
  "E-Commerce", "Education", "Finance", "Health", "Manufacturing", "Real Estate", "Technology",
];

const testimonials = [
  { company: KishaaLogo, name: "CLIENT FULL NAME", designation: "DESIGNATION" },
  { company: EnekiiLogo, name: "CLIENT FULL NAME", designation: "DESIGNATION" },
  { company: HilterLogo, name: "CLIENT FULL NAME", designation: "DESIGNATION" },
  { company: TigerLogo, name: "CLIENT FULL NAME", designation: "DESIGNATION" },
  { company: KaviLogo, name: "CLIENT FULL NAME", designation: "DESIGNATION" },
];

export default function ClientTestimonials() {
  const [activeCategory, setActiveCategory] = useState("E-Commerce");

  return (
    <div className="bg-[#FAFAFA] py-20 px-4 sm:px-6 w-full min-h-screen mb-10">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <p className="text-sm tracking-[0.2em] uppercase text-gray-400">
          Our Happy Clients
        </p>
        <h2 className="text-3xl font-semibold text-[#7C0D37]">
          Our Success Starts With Their{" "}
          <span className="font-bold text-[#1D0F5F]">Satisfaction.</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 mt-4 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider & Testimonials */}
        <div className="relative mt-12 w-full">
          {/* Optional Arrows for larger screens */}
          <div className="hidden sm:block">
            <button className="absolute -left-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Scrollable Testimonials */}
          <div className="flex justify-start gap-4 px-2 pt-4 scrollbar-hide overflow-x-auto sm:overflow-x-visible">

            {testimonials.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 w-64 flex-shrink-0 shadow-md text-left"
              >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img src={client.company} alt="Company Logo" className="h-8" />
                </div>

                {/* Client Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={ClientImg}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-xs font-bold tracking-wide">{client.name}</p>
                    <p className="text-[10px] text-gray-500">{client.designation}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries.
                </p>

                <div className="mt-4 text-gray-300 text-3xl text-right">
                  &rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
