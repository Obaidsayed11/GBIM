import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Logo from "../assets/Images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#1b1b1b] text-sm w-full ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-gray-200">
        {/* Digital Marketing */}
        <div className="space-y-2">
          <h4 className="font-bold mb-2 border-b-2 border-[#1b1b1b] inline-block ">DIGITAL MARKETING</h4>
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
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block">PAID ADVERTISING</h4>
          <p>Social Media Ads</p>
          <p>Google Ads</p>
        </div>

        {/* Marketing Tech */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block">MARKETING TECHNOLOGIES</h4>
          <p>Web Development</p>
          <p>Mobile App</p>
          <p>Website Maintenance</p>
          <p>Hosting Support</p>
        </div>

        {/* Consulting */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block">CONSULTING</h4>
          <p>Marketing Consulting</p>
          <p>Lead Generation</p>
          <p>SEO Outsourcing</p>
          <p>PPC Outsourcing</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block">QUICK LINKS</h4>
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
          <h4 className="font-semibold mb-2 border-b-2 border-[#1b1b1b] inline-block">RESOURCES</h4>
          <p>Case Studies</p>
          <p>Design Portfolio</p>
          <p>Blog</p>
          <p>Resources</p>
          <p>Tools</p>
          <p>Clientele</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8 text-sm">
        {/* Head Office */}
        <div className="space-y-3 max-w-sm">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-36 h-15" />
            
          </div>
          <div>
            <p className="font-semibold mb-1">HEAD OFFICE</p>
            <p>1404-1405, Rupa Solitaire,</p>
            <p>Sector-1, Millenium Business Park,</p>
            <p>Mahape, Navi Mumbai,</p>
            <p>Maharashtra (400 710), INDIA.</p>
          </div>
        </div>

        {/* Other Branch */}
        <div>
          <p className="font-semibold mb-1">OTHER BRANCH</p>
          <p>Pune</p>
          <p>Bangalore</p>
          <p>Vadodara</p>
          <p>Delhi</p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <p className="font-semibold">sales@gbim.com</p>
          <p className="font-semibold">Schedule A Call</p>
        </div>

        {/* Certifications */}
        <div className="flex gap-4">
          <img src="/google-partner.png" alt="Google Partner" className="h-10" />
          <img src="/google-ads.png" alt="Google Ads Certified" className="h-10" />
          <img src="/analytics-certified.png" alt="Analytics Certified" className="h-10" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>©Copyright 2025 GBIM™. All rights reserved</p>
        <p>
          Important Notice: Beware of Job Offer Scams –{" "}
          <span className="text-red-500 cursor-pointer">Click Here</span>
        </p>
        <div className="flex gap-4 text-[#1b1b1b]">
          <Facebook className="w-4 h-4 hover:text-[#D13636]" />
          <Instagram className="w-4 h-4 hover:text-[#D13636]" />
          <Twitter className="w-4 h-4 hover:text-[#D13636]" />
          <Linkedin className="w-4 h-4 hover:text-[#D13636]" />
          <Youtube className="w-4 h-4 hover:text-[#D13636]" />
        </div>
      </div>
    </footer>
  );
}
