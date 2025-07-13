import { motion } from "framer-motion";

export default function TechStack() {
  const techList = [
    "Python", "Flutter", "Dart", "sklearn", "ML",
    "Data science", "numpy", "Pandas", "Firebase",
  ];

  // Duplicate techList for seamless loop
  const marqueeItems = [...techList, ...techList, ...techList];

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-black relative">
      {/* Techstack heading fixed at the very top of the screen */}
      <div className=" top-0 left-0 w-full z-50">
        <h2 className="text-5xl md:text-7xl font-jaro text-yellow-400 text-center heading-noise py-6 bg-black">
          Techstack
        </h2>
      </div>

      {/* Add top padding so content doesn't hide behind fixed heading */}
      <div className="relative overflow-hidden w-full pt-56"> {/* Increased padding */}
        <motion.ul
          className="flex flex-row gap-20 w-max py-8 px-8" // More gap and padding
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Adjust speed
          }}
        >
          {marqueeItems.map((tech, index) => (
            <li
              key={`${tech}-${index}`}
              className="text-5xl mb-44 font-lato text-white flex items-center"
            >
              <span className="mr-4 text-7xl text-red-500">&#8226;</span> {/* More space for bullet */}
              {tech}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
