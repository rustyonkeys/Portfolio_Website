export default function LampHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black flex items-center justify-center relative overflow-hidden">
      {/* Tube light line with switch-on effect */}
      <div className="absolute top-1/3 w-[40rem] h-0.5 bg-cyan-400 shadow-[0_0_40px_#00ffff,0_0_80px_#00ffff,0_0_120px_#00ffff] animate-switchOn"></div>

      {/* Semi-circle or glow spreading from tube */}
      <div className="absolute top-1/3 w-[40rem] h-32 bg-gradient-to-b from-cyan-400/20 via-cyan-400/0 to-transparent blur-xl animate-glowExpand origin-top"></div>
      <div className="absolute top-1/3 w-[38rem] h-40 bg-gradient-to-b from-cyan-400/50 via-cyan-400/35 to-transparent blur-2xl animate-glowExpand origin-top"></div>

      {/* Text content with switch-on animation */}
      <div className="text-center z-10 mt-56 animate-switchOn">
        <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 leading-tight">
          You know the buisness
          <br />
          I know the chemisty
        </h3>
      </div>

      {/* Ambient background light fades in */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-blue-950/30 to-black pointer-events-none animate-ambientFade"></div>
    </div>
  );
}
