import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordions = [
    {
      question: "Internship Web Developer - Perumda Tirtayasa",
      answer: " Developed a website for recording water distribution processes, replacing manual methods and simplifying data archiving and also improved efficiency in recording water production results with the newly implemented website.",
    },
    {
      question: "Internship Web Developer - Infinite Learning",
      answer: "Developed a web application for recording and tracking crop yields, streamlining agricultural monitoring and reporting. The solution improved data accuracy, reduced manual errors, and enabled better decision-making for farmers and stakeholders.",
    },
    {
      question: "Assistant Lecturer - Software Defined Network (Telkom University 2024)",
      answer: "Provided support in teaching and guiding students on software-defined networking concepts and hands-on labs, including practical experience with Cisco routers and switches, as well as using GNS3 for network simulations.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex flex-col mx-8 sm:flex-row sm:mx-0 items-start sm:px-[210px] py-16 mx-auto bg-white rounded-0 space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Left Section with Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex-0 pe-12"
        >
          <h1 className="text-gray-800 text-4xl font-bold mb-4">Working Experiences</h1>
          <p className="text-sm text-gray-500 mt-4">
            Look what I've been done since past.
          </p>
        </motion.div>

        {/* Right Section with Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex-1"
        >
          {accordions.map((accordion, index) => (
            <div key={index} className="border-b border-slate-200 mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-5 text-slate-800"
              >
                <span className="text-2xl text-left">{accordion.question}</span>
                <span
                  className={`text-slate-800 transition-transform duration-300 ${
                    activeAccordion === index ? "rotate-45" : ""
                  }`}
                >
                  {activeAccordion === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="pb-5 text-md text-justify text-slate-500">{accordion.answer}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
