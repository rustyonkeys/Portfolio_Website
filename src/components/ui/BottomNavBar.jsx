import { useInView } from 'react-intersection-observer';

export default function BottomNavBar() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <nav
      ref={ref}
      className={`w-fit mx-auto mb-36 py-4 px-8 rounded-full border border-white bg-black transition-all duration-1000
        ${inView ? 'animate-switchOn' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-4">
          {['AI', 'ML', 'Flutter', 'WebDev'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 px-4 py-2 rounded-md transition duration-300 
                         hover:bg-white hover:bg-opacity-10 hover:text-white hover:shadow-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
