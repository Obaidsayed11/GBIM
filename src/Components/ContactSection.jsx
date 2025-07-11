import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="w-full py-20 px-6 md:px-10"
      style={{
        background: "linear-gradient(90deg, #0c0c0c 0%, #0c0c0c 40%, #1a1a1a 100%)",
        color: "white",
      }}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 px-4 md:px-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight">
              Ready to <span className="text-[#D13636]">Grow</span>
              <br /> Your Brand?
            </h2>
            <p className="text-base text-[#d7d7d7]">
              Partner with GBIM – your trusted healthcare marketing agency.
              <br /> Let’s Connect. Let’s Grow.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 ">
            <div className="flex gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center gap-3 w-full">
                <MapPin className="w-5 h-5 text-[#D13636]" />
                <div>
                  <p className="font-semibold text-sm">Office</p>
                  <p className="text-xs text-[#b5b5b5]">1404-1405, Rupa Solitaire</p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center gap-3 w-full">
                <Phone className="w-5 h-5 text-[#D13636]" />
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <p className="text-xs text-[#b5b5b5]">+91 2368712973</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center gap-3 w-full">
                <Clock className="w-5 h-5 text-[#D13636]" />
                <div>
                  <p className="font-semibold text-sm">Working hours</p>
                  <p className="text-xs text-[#b5b5b5]">Mon - Fri, 9:30 am to 6:30 pm</p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center gap-3 w-full">
                <Mail className="w-5 h-5 text-[#D13636]" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-xs text-[#b5b5b5]">sales@gbim.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs text-[#d7d7d7] mb-3">Social media :</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D13636] transition">f</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D13636] transition">IG</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D13636] transition">▶</a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center -mt-80">
          <div className="bg-gradient-to-b from-[#2a2a2a5b] to-[#1a1a1a] backdrop-blur-xl rounded-3xl p-8 space-y-6 w-full max-w-[500px]">
            <h3 className="text-lg font-semibold text-white">Leave us a message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-transparent border border-[#393939] p-3 rounded-md text-sm placeholder-[#7a7a7a] focus:outline-none" placeholder="Name" />
              <input className="bg-transparent border border-[#393939] p-3 rounded-md text-sm placeholder-[#7a7a7a] focus:outline-none" placeholder="Email" />
              <input className="bg-transparent border border-[#393939] p-3 rounded-md text-sm placeholder-[#7a7a7a] focus:outline-none" placeholder="Phone number" />
              <input className="bg-transparent border border-[#393939] p-3 rounded-md text-sm placeholder-[#7a7a7a] focus:outline-none" placeholder="Website" />
              <select className="bg-transparent border border-[#393939] p-3 rounded-md text-sm text-[#7a7a7a]">
                <option>Service</option>
              </select>
              <select className="bg-transparent border border-[#393939] p-3 rounded-md text-sm text-[#7a7a7a]">
                <option>Marketing budget</option>
              </select>
              <select className="bg-transparent border border-[#393939] p-3 rounded-md text-sm text-[#7a7a7a] md:col-span-2">
                <option>How did you hear about us?</option>
              </select>
              <textarea className="bg-transparent border border-[#393939] p-3 rounded-md text-sm placeholder-[#7a7a7a] md:col-span-2" rows="4" placeholder="Tell us more about your project" />
            </div>

            <button className="bg-white text-black font-semibold rounded-full py-3 px-10 hover:bg-[#f0f0f0] transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
