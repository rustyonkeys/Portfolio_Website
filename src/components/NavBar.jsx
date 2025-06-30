// src/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl text-white">
            Kirthi Shetty
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors hover:scale-110">
              Home
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors hover:scale-110">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:scale-110">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
