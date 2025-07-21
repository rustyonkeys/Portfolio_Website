import {
  HiOutlineUser,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineMail,
} from "react-icons/hi";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl p-6 rounded-3xl bg-gray-300 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-[0.8fr_1fr_auto] gap-2">
          {/* === Column 1 === */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-4 h-[11rem] flex flex-col items-center justify-center hover:scale-[1.01] transition-transform">
              <p className="text-gray-100 text-lg text-center font-semibold font-[cursive]">
                👋 Hi, I'm <span className="text-[#f59e0b]">Kirthi</span>
                <br />
                A Software Techie
              </p>
              <a 
              href="#contact"
              className="mt-2 px-4 py-2 bg-[#f59e0b] text-black font-semibold rounded-full text-sm hover:bg-yellow-400 hover:scale-90 transition-all">
                Contact Me
                </a>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-6 h-[26rem] flex items-center justify-center hover:scale-[1.01] transition-transform">
              <p className="text-gray-300 text-center  leading-relaxed font-[cursive] text-xl">
                I am a 4th year IT Engineering Student.<br />
                Passionate about creating smart software solutions, exploring
                ML, and building future-ready apps. 
              </p>
            </div>
          </div>

          {/* === Column 2 === */}
          <div className="flex flex-col justify-between h-[38rem] gap-4">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] p-6 h-[30rem] flex items-center justify-center hover:scale-[1.01] transition-transform">
              <img
                src="/me.jpg"
                alt="Profile"
                className="object-cover h-full w-full rounded-xl"
              />
            </div>

            <div className="flex gap-4 h-[7rem]">
              {/* LinkedIn */}
              <div className="flex-1 bg-[#2a2a2a] shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.6)] transition-shadow duration-300 rounded-2xl flex items-center justify-center hover:bg-[#3b3b3b] hover:scale-90 transition-all">
                <a
                  href="https://www.linkedin.com/in/kirthishetty/"
                  className="text-white font-semibold tracking-wide flex items-center justify-center gap-3 h-full px-4"
                >
                  <img
                    src="/linkedin-blue-logo-icon.png"
                    alt="LinkedIn"
                    className="h-6 w-6 hover:brightness-125 transition-all"
                  />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* GitHub */}
              <div className="flex-1 bg-[#2a2a2a] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.6)] transition-shadow duration-300 rounded-2xl flex items-center justify-center hover:bg-[#3b3b3b] hover:scale-90 transition-all">
                <a
                  href="https://github.com/rustyonkeys"
                  className="text-white font-semibold tracking-wide flex items-center justify-center gap-3 h-full px-4"
                >
                  <img
                    src="/github-logo.png"
                    alt="GitHub"
                    className="h-6 w-6 hover:brightness-125 transition-all"
                  />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* === Column 3 === */}
          <div className="flex flex-col gap-4 h-[38rem] items-center justify-self-end">
            {/* Vertical Navigation */}
            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-4 h-[33rem] w-[12rem] hover:scale-[1.01] transition-transform flex flex-col justify-center items-start gap-6">
              {[
                { icon: <HiOutlineUser />, label: "Home", href: "#home" },
                { icon: <HiOutlineLightBulb />, label: "Skills", href: "#skills" },
                { icon: <HiOutlineBriefcase />, label: "Projects", href: "#projects" },
                { icon: <HiOutlineDocumentText />, label: "Resume", href: "#resume" },
                { icon: <HiOutlineMail />, label: "Contact", href: "#contact" },
              ].map(({ icon, label, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="group flex items-center w-full px-4 py-2 rounded-full transition-all duration-300 hover:bg-white"
                >
                  <span className="text-white text-xl mr-2 group-hover:text-black">
                    {icon}
                  </span>
                  <span className="text-white text-sm font-medium group-hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="bg-[#1a1a1a] rounded-2xl hover:scale-90 transition-colors h-[5rem] w-[12rem] flex items-center justify-center">
              <a
                href="#resume"
                className="text-white font-bold tracking-wide text-center"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
