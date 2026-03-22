// import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";
// import React from "react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen bg-[#f5f2ef] overflow-hidden flex items-center justify-center">
//       {/* CENTER WRAPPER */}
//       <div className="relative w-full max-w-[1400px] h-[90vh] flex items-center justify-center">
//         {/* BIG NAME TEXT (CENTERED, BEHIND IMAGE) */}
//         {/* <h1 className="absolute text-[180px] font-extrabold text-[#1a1a1a] leading-none tracking-tight z-10 select-none">
//           Kirthi Shetty
//         </h1> */}
//         <h1 className=" absolute top-[1%] left-1/2 -translate-x-1/2 w-[1240px] h-[468px] text-[190px] font-extrabold leading-none tracking-normal text-[#1a1a1a] whitespace-nowrap select-none">
//           Kirthi Shetty
//         </h1>

//         {/* PROFILE IMAGE (CENTERED, ABOVE TEXT) */}
//         <img
//           src="Kirthipic.png"
//           alt="Kirthi Shetty"
//           className="relative z-10 w-[688px] h-[944px] object-contain translate-y-[90px]"
//           />

//         {/* LEFT DESCRIPTION */}
//         <div className="absolute left-20 bottom-[30%] max-w-sm text-[#6B6B6B] z-30">
//           <p className="w-[468px] h-[139px] text-[27px] text-regular leading-[35px]">
//             Hey there I am a Software Engineer based in Maharashtra, India.
//           </p>
//           {/* <p className="mt-6 text-sm font-medium text-gray-700">Connect with me</p> */}
//         </div>

//         {/* CONNECT WITH ME – BOTTOM LEFT */}
// <div className="absolute left-20 bottom-6 z-30">
//   <p className="text-sm font-medium text-gray-700 mb-4">
//     Connect with me
//   </p>

//   <div className="flex gap-5 text-lg text-gray-600">
//     <a
//       href="https://www.linkedin.com/in/kirthishetty"
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="LinkedIn"
//     >
//       <FaLinkedinIn className="hover:text-blue-700 transition cursor-pointer" />
//     </a>

//     <a
//       href="https://github.com/rustyonkeys"
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="GitHub"
//     >
//       <FaGithub className="hover:text-black transition cursor-pointer" />
//     </a>

//     <a
//       href="https://www.hackerrank.com/"
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="HackerRank"
//     >
//       <FaHackerrank className="hover:text-green-700 transition cursor-pointer" />
//     </a>
//   </div>
// </div>


//         {/* RIGHT SKILLS */}
//         <div className="absolute right-[180px] bottom-[28%] text-right z-30">
//           {/* <p className="text-gray-400 text-sm">UI/UX Design</p> */}
//           <p className="w-[181px] h-[45px] text-[24px] font-light leading-[45px] text-gray-500">UI/UX Design</p>
//           <p className="w-[181px] h-[45px] text-[24px] font-semibold leading-[45px] text-black-400"> Data Science</p>
//           <p className="w-[181px] h-[45px] text-[24px] font-light leading-[45px] text-gray-500"> ML Engineer</p>
//           <p className="w-[181px] h-[45px] text-[24px] font-light leading-[45px] text-gray-500"> Flutter</p>

//         </div>


//         {/* SCROLL DOWN ARROW – BOTTOM RIGHT */}


//       </div>
//       <div className="absolute right-10 bottom-6 z-30 animate-bounce">
//   <svg
//     width="22"
//     height="20"
//     viewBox="0 0 22 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="text-gray-700"
//   >
//     <path
//       d="M11 1V18M11 18L3 10M11 18L19 10"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// </div>
//     </section>
//   );
// }


import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f5f2ef] overflow-hidden flex items-center justify-center px-4 py-12 md:p-0">
      <div className="relative w-full max-w-[1400px] min-h-screen flex flex-col md:flex-row items-center justify-center pt-10 md:pt-0">

        {/* NAME */}
        <h1 className="md:absolute md:top-6 lg:top-[5%] md:left-1/2 md:-translate-x-1/2 text-[52px] sm:text-[80px] md:text-[130px] lg:text-[180px] font-extrabold leading-none text-[#1a1a1a] whitespace-normal md:whitespace-nowrap text-center select-none z-0 mt-8 md:mt-0">
          Kirthi<br className="md:hidden" /> Shetty
        </h1>

        {/* IMAGE */}
        <img
          src="Kirthipic.png"
          alt="Kirthi Shetty"
          className="relative z-10 w-[260px] sm:w-[380px] md:w-[520px] lg:w-[680px] object-contain md:translate-y-10 lg:translate-y-20 mt-6 md:mt-0"
        />

        {/* LEFT TEXT */}
        <div className="md:absolute md:left-4 lg:left-10 md:bottom-[25%] max-w-[300px] sm:max-w-sm text-[#6B6B6B] z-30 mt-8 md:mt-0 text-center md:text-left">
          <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-relaxed">
            Hey there I am a Software Engineer based in Maharashtra, India.
          </p>
        </div>

        {/* SKILLS */}
        <div className="md:absolute md:right-4 lg:right-10 md:bottom-[25%] z-30 mt-8 md:mt-0 text-[16px] sm:text-[18px] md:text-[22px] flex flex-row md:flex-col gap-4 md:gap-0 flex-wrap justify-center text-center md:text-right">
          <p className="text-gray-400">UI/UX Design</p>
          <p className="font-semibold text-black">Data Science</p>
          <p className="text-gray-400">ML Engineer</p>
          <p className="text-gray-400">Flutter</p>
        </div>

        {/* SOCIALS */}
        <div className="md:absolute md:left-4 lg:left-10 md:bottom-6 z-30 mt-10 md:mt-0 flex flex-col items-center md:items-start">
          <p className="text-xs sm:text-sm font-medium text-gray-700 mb-3 text-center md:text-left">
            Connect with me
          </p>
          <div className="flex gap-4 text-lg text-gray-600 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/kirthishetty" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="hover:text-blue-700 transition" /></a>
            <a href="https://github.com/rustyonkeys" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-black transition" /></a>
            <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer"><FaHackerrank className="hover:text-green-700 transition" /></a>
          </div>
        </div>

        {/* SCROLL */}
        <div className="hidden md:block absolute right-6 bottom-6 z-30 animate-bounce">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path d="M11 1V18M11 18L3 10M11 18L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </div>
    </section>
  );
}
