import { useInView } from 'react-intersection-observer';

export default function BottomNavBar() {
  const { ref, inView } = useInView({
    threshold: 0.1,  // Trigger when 10% is visible
    triggerOnce: false,  // Run only once
  });

  return (
    <nav
      ref={ref}
      className={`w-fit mx-auto mb-36 py-4 px-8 rounded-full border border-white bg-black transition-all duration-1000
        ${inView ? 'animate-switchOn' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white">AI</a>
          <a href="#projects" className="text-gray-300 hover:text-white">ML</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Flutter</a>
          <a href="#contact" className="text-gray-300 hover:text-white">WebDev</a>
        </div>
      </div>
    </nav>
  );
}
