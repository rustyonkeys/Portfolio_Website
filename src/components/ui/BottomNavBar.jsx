import { useInView } from 'react-intersection-observer';

export default function BottomNavBar({ topics = [], selectedTopic, setSelectedTopic, inView }) {
  return (
    <nav
      className={`w-fit mx-auto mb-12 py-4 px-8 rounded-full border border-white bg-black transition-all duration-500
        ${inView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {topics.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTopic(item)}
              className={`text-gray-300 px-4 py-2 rounded-md transition duration-300 
                hover:bg-white hover:bg-opacity-10 hover:text-white hover:shadow-sm font-jaro
                ${selectedTopic === item ? "bg-white bg-opacity-10 text-white" : ""}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => setSelectedTopic(null)}
            className={`text-gray-300 px-4 py-2 rounded-md transition duration-300 hover:bg-white hover:bg-opacity-10 hover:text-white hover:shadow-sm font-jaro
              ${selectedTopic === null ? "bg-white bg-opacity-10 text-white" : ""}`}
          >
            All
          </button>
        </div>
      </div>
    </nav>
  );
}
