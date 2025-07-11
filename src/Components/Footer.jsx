import React from "react";
import Logo from "../assets/Images/logo.png";
import location from "../assets/Icons/location.png"
import envelope from "../assets/Icons/envelope.png"
import phone2 from "../assets/Icons/phone2.png"
import partner from "../assets/Icons/partner.png"
import ads from "../assets/Icons/ads.png"
import certified from "../assets/Icons/certified.png"
import instagram1 from "../assets/Icons/instagram1.png"
import facebook from '../assets/Icons/facebook.png'
import twitter from '../assets/Icons/twitter.png'
import youtube1 from '../assets/Icons/youtube1.png'
import linkedin from '../assets/Icons/linkedin.png'

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#1b1b1b] w-full ">
      {/* Top Section */}
      <div className="max-w-8xl ml-36 justify-center px-2 py-8 grid grid-cols-2 md:grid-cols-6 border-b border-gray-200">
        {/* Digital Marketing */}
        <div className="space-y-2">
          <h4 className="font-bold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl ">
            DIGITAL MARKETING
          </h4>
          <p>SEO</p>
          <p>Social Media Marketing</p>
          <p>Design Thinking</p>
          <p>Video Production</p>
          <p>ORM</p>
          <p>Content Marketing</p>
          <p>Influencer Marketing</p>
        </div>

        {/* Paid Advertising */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl">
            PAID ADVERTISING
          </h4>
          <p>Social Media Ads</p>
          <p>Google Ads</p>
        </div>

        {/* Marketing Tech */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl">
            MARKETING TECHNOLOGIES
          </h4>
          <p>Web Development</p>
          <p>Mobile App</p>
          <p>Website Maintenance</p>
          <p>Hosting Support</p>
        </div>

        {/* Consulting */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl">
            CONSULTING
          </h4>
          <p>Marketing Consulting</p>
          <p>Lead Generation</p>
          <p>SEO Outsourcing</p>
          <p>PPC Outsourcing</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl">
            QUICK LINKS
          </h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Testimonial</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Achievements</p>
        </div>

        {/* Resources */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block text-xl">
            RESOURCES
          </h4>
          <p>Case Studies</p>
          <p>Design Portfolio</p>
          <p>Blog</p>
          <p>Resources</p>
          <p>Tools</p>
          <p>Clientele</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-8xl mx-auto px-2 py-8 flex flex-col md:flex-row justify-between gap-8 text-sm">
        {/* Head Office */}
        <div className="space-y-3 w-[40%] ml-36">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-44 h-15" />
          </div>
          <div className="max-w-80">
            <h2 className="font-bold text-2xl mb-1 flex"><img src={location} className="w-8"/> HEAD OFFICE</h2>
            <div className="text-xl">
              <p>1404-1405, Rupa Solitaire,</p>
              <p>Sector-1, Millenium Business Park,</p>
              <p>Mahape, Navi Mumbai,</p>
              <p>Maharashtra (400 710), INDIA.</p>
            </div>
          </div>
        </div>

        {/* Other Branch */}
        <div className="w-[60%] ">
          <div className="flex flex-row">
            <div className="mx-4 my-2 w-[40%]">
              <h2 className="font-bold text-2xl mb-1">OTHER BRANCH</h2>
              <div className="text-lg">
                <p>Pune</p>
                <p>Bangalore</p>
                <p>Vadodara</p>
                <p>Delhi</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2 w-[60%] text-3xl">
              <h2 className="font-bold flex"><img src={envelope} className="w-8 mr-2"/> sales@gbim.com</h2>
              <h2 className="font-bold flex"><img src={phone2} className="w-8 mr-2"/>Schedule A Call</h2>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex mx-4 my-4 mt-8 gap-8">
            <img
              src={partner}
              alt="Google Partner"
              className="h-20"
            />
            <img
              src={ads}
              alt="Google Ads Certified"
              className="h-20"
            />
            <img
              src={certified}
              alt="Analytics Certified"
              className="h-20"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row justify-evenly items-center text-lg font-semibold text-gray-600">
        <p>©Copyright 2025 GBIM™. All rights reserved</p>
        <p>
          Important Notice: Beware of Job Offer Scams –{" "}
          <span className="text-red-500 cursor-pointer">Click Here</span>
        </p>
        
        <div className="flex gap-0 text-[#1b1b1b]">
          <p>Follow Us On</p>
          <img src={instagram1} className="w-10 h-10 hover:text-[#D13636]" />
          <img src={facebook} className="w-10 h-10 hover:text-[#D13636]" />
          <img src={twitter} className="w-10 h-10 hover:text-[#D13636]" />
          <img src={youtube1} className="w-10 h-10 hover:text-[#D13636]" />
          <img src={linkedin} className="w-10 h-10 hover:text-[#D13636]" />
        </div>
      </div>
    </footer>
  );
}
