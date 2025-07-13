
import FloatingDockDemo from "../FloatingDockDemo";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen bg-[#FFF5F5] text-black overflow-hidden">

      {/* ✅ Floating Dock, absolutely positioned, does NOT push layout */}
      <FloatingDockDemo />

      {/* ✅ Hero content, centered */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-2 md:py-8 translate-y-[-10%]">
        {/* Left: Text */}
        <div className="flex-1 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            I&apos;m <span className="text-orange-500">Kirthi Shetty</span>
          </h1>
          <p className="text-2xl mb-4 text-black">
            Software Techie | AI/ML Enthusiast
          </p>
          <p className="text-lg text-black mb-6 leading-relaxed max-w-xl">
            I'm a 4th year B-Tech student at Pillai College of Engineering, Mumbai,
            specializing in IT Engineering. I have a passion for software development
            and a keen interest in AI/ML technologies. I love to explore new tech and
            apply them to real-world problems.
          </p>
          <a
            href="#resume"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-transform hover:scale-105"
          >
            My Resume
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/path/to/your/profile.jpg"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
