import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Clock } from "lucide-react";

// The project list updated with domains to act as categories
const projects = [
  {
    id: 1,
    title: "AI Chatbot",
    subtitle: "AI • LangChain • LLaMA 3",
    domain: "AI",
    description:
      "An offline AI chatbot built using LangChain and Ollama with LLaMA 3. Designed to run completely locally, this chatbot guarantees data privacy while providing intelligent, conversational responses.",
    daysRequired: "14 Days",
    image: "/src/images/aibot.svg",
  },
  {
    id: 2,
    title: "Movie Recommendation",
    subtitle: "Machine Learning Model",
    domain: "Machine Learning",
    description: "A recommendation system utilizing Machine Learning techniques. It analyzes user behavior data to provide highly personalized movie suggestions using collaborative and content-based filtering algorithms.",
    daysRequired: "21 Days",
    image: "/images/project-ml-predictor.png",
  },
  {
    id: 3,
    title: "Loan Prediction Model",
    subtitle: "Predictive Analytics",
    domain: "Machine Learning",
    description: "A supervised learning model predicting loan approval status. It parses applicants' financial history and demographics to automate and secure the loan processing workflow for financial institutions.",
    daysRequired: "15 Days",
    image: "/images/project-ml-predictor.png",
  },
  {
    id: 4,
    title: "Customer Churn Prediction",
    subtitle: "Data Analytics",
    domain: "Data Science",
    description: "Predicts customer churn using deep analytics. By identifying at-risk customers early, businesses can deploy targeted retention strategies, significantly minimizing revenue loss over time.",
    daysRequired: "10 Days",
    image: "/images/project-ml-predictor.png",
  },
  {
    id: 5,
    title: "Hindi Text Summarization",
    subtitle: "NLP Project",
    domain: "AI",
    description: "An NLP pipeline specifically trained and tailored for the Hindi language. It extracts and summarizes the most vital information from large text corpuses for quick comprehension.",
    daysRequired: "25 Days",
    image: "/images/project-ml-predictor.png",
  },
  {
    id: 6,
    title: "E-Commerce App",
    subtitle: "React Native Mobile App",
    domain: "Mobile Dev",
    description: "A fully functional cross-platform mobile application for e-commerce, offering robust shopping cart functionality, secure payment gateway integration, and a seamless and responsive user experience.",
    daysRequired: "30 Days",
    image: "/images/project-ml-predictor.png",
  }
];

const domains = ["All", "Mobile Dev", "Machine Learning", "Data Science", "AI"];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDomain, setActiveDomain] = useState("All");

  const filteredProjects = activeDomain === "All"
    ? projects
    : projects.filter(p => p.domain === activeDomain);

  return (
    <section className="py-32 px-6 md:px-12 bg-black min-h-screen flex flex-col font-sans relative text-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section styled like Image 1 */}
        <div className="mb-14">
          <h2 className="font-jaro text-5xl md:text-[5.5rem] font-semibold tracking-tighter text-white leading-[1.05]">
            See the highlights <br className="hidden md:block" />
            of my projects.
          </h2>
        </div>

        {/* Domain Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {domains.map(domain => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeDomain === domain
                ? "bg-white text-black"
                : "bg-transparent text-white border border-gray-700 hover:border-gray-400 hover:text-gray-200"
                }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Projects Grid (Like Image 2) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-200 min-h-[340px] flex flex-col hover:border-gray-300 transition-colors duration-300"
              >
                {/* Image Section */}
                <div className="w-full h-52 bg-gray-100 border-b border-gray-200 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:scale-105 opacity-100"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Explore Project
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex-grow flex flex-col justify-between bg-white text-black">
                  <div>
                    <div className="inline-block px-3 py-1 mb-4 rounded bg-gray-100 text-gray-800 border border-gray-200 text-xs font-bold tracking-wider uppercase">
                      {project.domain}
                    </div>
                    <h3 className="text-gray-900 font-semibold text-2xl tracking-tight mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal / Expanded Details View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content - White Version */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-[0_0_80px_rgba(255,255,255,0.1)] border border-gray-200 overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center transition-colors text-black border border-gray-200 shadow-sm"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-gray-100 relative flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent md:bg-gradient-to-r md:from-transparent md:to-white opacity-90" />
              </div>

              {/* Text / Details Section */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center overflow-y-auto">

                {/* Category / Subtitle */}
                <div className="inline-block px-4 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-800 text-xs font-bold uppercase tracking-widest w-fit mb-5">
                  {selectedProject.domain}
                </div>

                {/* Project Title */}
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter">
                  {selectedProject.title}
                </h3>

                {/* Highlights (Timeline, etc.) */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-500" />
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="text-gray-900">{selectedProject.daysRequired}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="prose max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">About the Project</h4>
                  <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-10">
                  <button className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 hover:scale-105 transition-all shadow-lg active:scale-95 duration-200">
                    <span>View Live or Code</span>
                    <ExternalLink size={18} strokeWidth={2.5} />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
