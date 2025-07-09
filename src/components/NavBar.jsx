import { useInView } from 'react-intersection-observer';

export default function Navbar() {
  const { ref, inView } = useInView({
    threshold: 0.1,  // Trigger when 10% of navbar is visible
    triggerOnce: false,  // Only run once
  });

  return (
    <nav
      ref={ref}
      className={`w-fit mx-auto py-4 px-8 rounded-full border border-white mb-28 mt-8 transition-all duration-1000
        ${inView ? 'animate-switchOn' : 'opacity-0'} bg-black`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}



// export default function Navbar() {
//   return (
//     <nav className="w-fit mx-auto mt-8 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
//       <div className="flex items-center space-x-8">
//         <a href="#home" className="text-white font-bold">Kirthi Shetty</a>
//         <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
//         <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
//       </div>
//     </nav>
//   );
// }
