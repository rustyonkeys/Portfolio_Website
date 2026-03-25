import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, #D1D5DB 1.5px, transparent 1.5px)',
        backgroundSize: '32px 32px'
      }}
    >
      {/* FLOATING NAVBAR */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 pl-4 pr-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs tracking-wider">
              KS
            </div>
            <span className="font-bold text-[#1f2937] text-[15px] tracking-tight">Kirthi Shetty</span>
          </div>
          <div className="flex items-center gap-5 text-gray-500 text-sm font-medium">
            <span className="hidden sm:inline-block">Mumbai, India</span>
            <a href="https://www.linkedin.com/in/kirthishetty" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-lg hover:text-blue-600 transition" />
            </a>
            <a href="https://github.com/rustyonkeys" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-lg hover:text-black transition" />
            </a>
            <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
              <FaHackerrank className="text-lg hover:text-green-600 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-12"
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
      >

        {/* CENTER ICON MOCKING IMAGE 2 */}
        <div className="mb-8 flex justify-center items-center">
          {/* Blue outlined hand icon similar to Image 2 */}
          <motion.div
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
            }}
            style={{ transformOrigin: "bottom right" }}
          >
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scale-125">
              <path d="M18 11V6a2 2 0 0 0-4 0v4" />
              <path d="M14 10V4a2 2 0 0 0-4 0v6" />
              <path d="M10 10.5V5a2 2 0 0 0-4 0v9" />
              <path d="M6 14v1a7 7 0 0 0 14 0v-5a2 2 0 0 0-4 0v2" />
            </svg>
          </motion.div>
        </div>

        {/* HEADLINE */}
        <h1
          className="text-[42px] sm:text-[56px] md:text-[68px] font-extrabold text-[#1f2937] leading-[1.05] tracking-tight mb-8"
        >
          Hey there! <br className="hidden sm:block" />
          I'm Kirthi Shetty, Software Engineer
        </h1>

        {/* PARAGRAPH */}
        <p className="text-[17px] sm:text-[20px] md:text-[21px] text-[#4b5563] leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          I specialize in crafting applications from concept to deployment with clean architecture and solid implementation.
        </p>

        {/* PILL SKILLS LINKS */}
        <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm text-[12.5px] sm:text-[14px] text-[#6b7280] font-medium mb-12 max-w-[95%] overflow-hidden">
          <span className="tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
            Data Science <span className="text-gray-300 mx-1.5">→</span>
            ML Engineer <span className="text-gray-300 mx-1.5">→</span>
            Backend Developer <span className="text-gray-300 mx-1.5">→</span>
            Flutter <span className="text-gray-300 mx-2">•</span>
          </span>
        </div >

        {/* CALL TO ACTION BUTTONS */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/kirthishetty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <span className="tracking-wide">Connect with me</span>
          </a>

          <a
            href="/Kirthi Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1f2937] border-2 border-gray-200 hover:border-gray-300 px-7 py-3.5 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="tracking-wide">Resume</span>
          </a>
        </div>

      </div >
    </section >
  );
}
