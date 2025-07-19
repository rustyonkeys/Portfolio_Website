export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl p-6 rounded-3xl bg-gray-300 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-3 gap-6">
          {/* === Column 1 === */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-4 h-[11rem] flex items-center justify-center hover:scale-[1.01] transition-transform">
              <p className="text-gray-100 text-lg text-center font-semibold font-[cursive]">
                👋 Hi, I'm <span className="text-[#f59e0b]">Kirthi</span>
                <br />
                A Software Techie
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-6 h-[26rem] flex items-center justify-center hover:scale-[1.01] transition-transform">
              <p className="text-gray-300 text-center text-base leading-relaxed">
                Passionate about creating smart software solutions, exploring
                ML, and building future-ready apps. 🚀
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
              <div className="flex-1 bg-[#2a2a2a] shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.6)] transition-shadow duration-300 rounded-2xl flex items-center justify-center hover:bg-[#3b3b3b] hover:scale-[1.03] transition-all">
                <a
                  href="https://www.linkedin.com/in/kirthishetty/"
                  className="text-white font-semibold tracking-wide flex items-center justify-center gap-3 h-full px-4"
                >
                  <img
                    src="/linkedin-blue-logo-icon.png"
                    alt="LinkedIn"
                    className="h-6 w-6"
                  />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* GitHub */}
              <div className="flex-1 bg-[#2a2a2a] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.6)] transition-shadow duration-300 rounded-2xl flex items-center justify-center hover:bg-[#3b3b3b] hover:scale-[1.03] transition-all">
                <a
                  href="https://github.com/rustyonkeys"
                  className="text-white font-semibold tracking-wide flex items-center justify-center gap-3 h-full px-4"
                >
                  <img
                    src="/github-logo.png"
                    alt="GitHub"
                    className="h-6 w-6"
                  />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* === Column 3 === */}
          <div className="flex flex-col gap-4 h-[38rem]">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-6 h-[33rem] hover:scale-[1.01] transition-transform">
              <p className="text-gray-300 font-semibold text-center">
                Navigation, quick links, or tools menu here.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(255,153,0,0.3)] hover:bg-[#3b3b3b] transition-colors h-[5.5rem] flex items-center justify-center">
              <a
                href="#resume"
                className="text-white font-bold tracking-wide"
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
