import React from "react";
import Logo from "../assets/Images/logo.png";
import location from "../assets/Icons/location.png";
import envelope from "../assets/Icons/envelope.png";
import phone2 from "../assets/Icons/phone2.png";
import partner from "../assets/Icons/partner.png";
import ads from "../assets/Icons/ads.png";
import certified from "../assets/Icons/certified.png";
import instagram1 from "../assets/Icons/instagram1.png";
import facebook from "../assets/Icons/facebook.png";
import twitter from "../assets/Icons/twitter.png";
import youtube1 from "../assets/Icons/youtube1.png";
import linkedin from "../assets/Icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#1b1b1b] w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 border-b border-gray-200">
        {/* Columns */}
        {[
          {
            title: "DIGITAL MARKETING",
            items: [
              "SEO",
              "Social Media Marketing",
              "Design Thinking",
              "Video Production",
              "ORM",
              "Content Marketing",
              "Influencer Marketing",
            ],
          },
          {
            title: "PAID ADVERTISING",
            items: ["Social Media Ads", "Google Ads"],
          },
          {
            title: "MARKETING TECHNOLOGIES",
            items: [
              "Web Development",
              "Mobile App",
              "Website Maintenance",
              "Hosting Support",
            ],
          },
          {
            title: "CONSULTING",
            items: [
              "Marketing Consulting",
              "Lead Generation",
              "SEO Outsourcing",
              "PPC Outsourcing",
            ],
          },
          {
            title: "QUICK LINKS",
            items: [
              "About Us",
              "Our Team",
              "Testimonial",
              "Contact Us",
              "Careers",
              "Privacy Policy",
              "Achievements",
            ],
          },
          {
            title: "RESOURCES",
            items: [
              "Case Studies",
              "Design Portfolio",
              "Blog",
              "Resources",
              "Tools",
              "Clientele",
            ],
          },
        ].map(({ title, items }) => (
          <div key={title} className="space-y-2">
            <h4 className="font-bold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl">
              {title}
            </h4>
            {items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Head Office */}
        <div className="w-full md:w-1/2 space-y-4">
          <img src={Logo} alt="Logo" className="w-44 h-auto" />
          <div>
            <h2 className="font-bold text-2xl flex items-center gap-2">
              <img src={location} className="w-6 h-6" /> HEAD OFFICE
            </h2>
            <div className="text-base mt-2">
              <p>1404-1405, Rupa Solitaire,</p>
              <p>Sector-1, Millenium Business Park,</p>
              <p>Mahape, Navi Mumbai,</p>
              <p>Maharashtra (400 710), INDIA.</p>
            </div>
          </div>
        </div>

        {/* Other Branch + Contact */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <h2 className="font-bold text-2xl mb-2">OTHER BRANCH</h2>
              <p>Pune</p>
              <p>Bangalore</p>
              <p>Vadodara</p>
              <p>Delhi</p>
            </div>
            <div className="space-y-2 text-lg">
              <h2 className="font-bold flex items-center gap-2">
                <img src={envelope} className="w-6" /> sales@gbim.com
              </h2>
              <h2 className="font-bold flex items-center gap-2">
                <img src={phone2} className="w-6" /> Schedule A Call
              </h2>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-6 mt-6">
            <img src={partner} alt="Google Partner" className="h-20" />
            <img src={ads} alt="Google Ads Certified" className="h-20" />
            <img src={certified} alt="Analytics Certified" className="h-20" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-sm sm:text-base font-semibold text-gray-600">
        <p>©Copyright 2025 GBIM™. All rights reserved</p>
        <p>
          Important Notice: Beware of Job Offer Scams –{" "}
          <span className="text-red-500 cursor-pointer">Click Here</span>
        </p>
        <div className="flex items-center gap-2">
          <span>Follow Us On : </span>
          {[instagram1, facebook, twitter, youtube1, linkedin].map((icon, i) => (
            <img key={i} src={icon} className="w-8 h-8 hover:opacity-80" />
          ))}
        </div>
      </div>
    </footer>
  );
}
