import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icon library

const categories = ["Marketing Creatives", "Branding", "UI/UX Designing"];

const faqData = [
  {
    question: "What is creative design thinking?",
    answer:
      "Creative design thinking is an approach that combines analytical thinking and creative problem-solving techniques to generate innovative solutions. It involves applying empathy, experimentation, and collaboration to understand the needs of users, redefine problems, and explore new possibilities.",
  },
  {
    question: "How can creative design thinking benefit my design projects?",
    answer: "",
  },
  {
    question: "How can creative design thinking benefit my design projects?",
    answer: "",
  },
  {
    question: "How can creative design thinking benefit my design projects?",
    answer: "",
  },
  {
    question: "How can creative design thinking benefit my design projects?",
    answer: "",
  },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("Marketing Creatives");
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <div className="bg-[#FAFAFA] py-20 px-6 w-full">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
          Frequently Asked Questions
        </p>
        <h2 className="text-3xl font-semibold text-[#7C0D37]">
          Got Questions?{" "}
          <span className="font-bold text-[#1D0F5F]">We’ve Got Answers!</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xl font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#E84767] to-[#7851A9] text-white shadow-md"
                  : "bg-white border border-gray-300 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mt-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl px-6 py-5 text-left flex justify-between items-start transition-all ${
                openQuestion === index
                  ? "bg-[#9D1B23] text-white"
                  : "bg-[#F3F3F3] text-[#333]"
              }`}
            >
              <div>
                <h4 className="font-semibold text-xl">
                  {faq.question}
                </h4>
                {openQuestion === index && faq.answer && (
                  <p className="max-w-[90%] mt-2 text-sm leading-relaxed text-white">
                    {faq.answer}
                  </p>
                )}
              </div>
              <button
                className={`ml-4 mt-1 p-2 rounded-full transition-all ${
                  openQuestion === index
                    ? "bg-white/20 text-white"
                    : "bg-[#9D1B23] text-white"
                }`}
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? -1 : index)
                }
              >
                {openQuestion === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
