import Navbar from "../NavBar";


export default function Home() {
  return (
    <section className="w-full min-h-screen items-center justify-center bg-[#FFF5F5] relative overflow-hidden text-black-300 border-b-2 border-black">
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 pt-24">
        {/* Left: Text */}
        <div>
          <h1 className="text-5xl font-bold mb-4">I&apos;m 
            <span className="text-orange-500"> Kirthi Shetty</span>
          </h1>
          <p className="text-2xl mb-4 text-black-300">
            Software Techie | AI/ML Enthusiast
          </p>
          <p className="text-lg text-black mb-6 leading-relaxed">
            I'm a 4th year B-Tech student at Pillai College of Engineering, Mumbai,
            specializing in IT Engineering. I have a passion for software development
            and a keen interest in AI/ML technologies. I love to explore new tech and
            apply them to real-world problems.
          </p>
          <a
            href="#resume"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-transform hover:scale-105"
          >
            My Resume
          </a>
        </div>
      

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src=""
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white/10"
          />
        </div>
      </div>

       
    </section>
  );
}
