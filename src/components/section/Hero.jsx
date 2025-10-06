import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#fdfcf7] flex flex-col">
      {/* Navbar */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          <span className="text-teal-600">K</span>Shetty<span className="text-teal-600">.</span>
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1.5 z-50"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium">
          <a href="#home" className="hover:text-teal-600 transition">Home</a>
          <a href="#projects" className="hover:text-teal-600 transition">Projects</a>
          <a href="#certifications" className="hover:text-teal-600 transition">Certifications</a>
          <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
        </nav>

        <a
          href="Kirthi Resume.pdf"
          download="Kirthi Resume"
          className="hidden md:inline-block bg-teal-600 text-white px-4 lg:px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition text-sm lg:text-base"
        >
          Download CV
        </a>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-[#fdfcf7] z-40 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-gray-700 font-medium text-xl">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition">Projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition">Certifications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-teal-600 transition">Contact</a>
          <a
            href="Kirthi Resume.pdf"
            download="Kirthi Resume"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition"
          >
            Download CV
          </a>
        </nav>
      </div>

      {/* Main Section - Centered */}
      <div className="flex-grow flex justify-center items-center px-4 md:px-8 py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-32 xl:gap-60 items-center justify-items-center w-full max-w-7xl">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 relative order-1 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 relative -top-[100px]">
              Hy! I Am <br />
              <span className="text-yellow-500">Kirthi Shetty.</span>
            </h2>
            <p className="text-teal-700 font-semibold text-base sm:text-lg lg:text-base relative -bottom-[100px]">
              <span className="text-xl sm:text-2xl lg:text-xl font-bold">Information Technology</span> <br /> 
              Student at PES University.
            </p>

            {/* Socials - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex space-x-6 text-xl sm:text-2xl text-gray-600 justify-center lg:justify-start relative -bottom-[150px]">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-blue-800 cursor-pointer transition" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub className="hover:text-black cursor-pointer transition" />
              </a>
              <a href="#" aria-label="HackerRank">
                <FaHackerrank className="hover:text-green-900 cursor-pointer transition" />
              </a>
            </div>

            {/* Dashed Curved Arrow - Hidden on mobile */}
            <svg
              className="hidden lg:block absolute left-full -top-20 w-[320px] xl:w-[350px] h-30 text-teal-500 -ml-12 xl:-ml-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="9 9"
              viewBox="0 0 700 400"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,1 L10,4 L0,10 Z" fill="currentColor" />
                </marker>
              </defs>

              {/* Curve from text pointing to image */}
              <path
                d="M500,250 Q100,490 20,140"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>

          {/* Center Image */}
          <div className="flex justify-center relative order-2 lg:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] rounded-full border-4 border-yellow-400 shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src="/kirthi.png" 
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 md:space-y-8 order-3 lg:order-3 text-center lg:text-left">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I design beautifully simple things, <br /> and I love what I do.
            </p>

            {/* Rating Card */}
            <div className="bg-white shadow-md rounded-xl p-4 sm:p-5 flex items-center space-x-4 sm:space-x-5 w-fit mx-auto lg:mx-0">
              <img
                src="/users.png"
                alt="users"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">12k Reviews On</p>
                <p className="text-yellow-500 font-bold text-sm sm:text-base">⭐ 4.9</p>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-700">
              Creative Designer.
            </h3>
          </div>
        </div>
      </div>

      {/* Social Icons - Fixed at bottom for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 z-30">
        <div className="flex space-x-8 text-2xl text-gray-600 justify-center">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="hover:text-blue-800 cursor-pointer transition" />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub className="hover:text-black cursor-pointer transition" />
          </a>
          <a href="#" aria-label="HackerRank">
            <FaHackerrank className="hover:text-green-900 cursor-pointer transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;