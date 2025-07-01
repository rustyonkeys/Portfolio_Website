import BottomNavBar from "../ui/BottomNavBar";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.4, // Show nav when 20% of section is visible
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-blue-950 to-black text-gray-300 px-6 py-12"
    >
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      {/* Your projects content here */}
      <div className="flex-1">
        {/* Replace with real projects grid/cards */}
        <p className="text-lg text-gray-400">
          Project content goes here...
        </p>
      </div>

      <BottomNavBar inView={inView} />
    </section>
  );
}
