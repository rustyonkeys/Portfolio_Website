import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

// --- Domain Definitions ---
const domains = [
  { id: "ai", label: "AI / NLP", theme: "blue" },
  { id: "ml", label: "Machine Learning", theme: "emerald" },
  { id: "mobile", label: "Mobile Dev", theme: "violet" },
  { id: "web", label: "Web dev", theme: "amber" },
  { id: "backend", label: "Backend", theme: "rose" },
];

// Theme Colors
const themeConfig = {
  blue: {
    bg: "bg-blue-50",
    hover: "bg-blue-900",
    accent: "text-blue-600",
    border: "border-blue-200",
    tab: "bg-blue-600"
  },
  emerald: {
    bg: "bg-emerald-50",
    hover: "bg-emerald-900",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    tab: "bg-emerald-600"
  },
  violet: {
    bg: "bg-violet-50",
    hover: "bg-violet-900",
    accent: "text-violet-600",
    border: "border-violet-200",
    tab: "bg-violet-600"
  },
  amber: {
    bg: "bg-amber-50",
    hover: "bg-amber-900",
    accent: "text-amber-600",
    border: "border-amber-200",
    tab: "bg-amber-600"
  },
  rose: {
    bg: "bg-rose-50",
    hover: "bg-rose-900",
    accent: "text-rose-600",
    border: "border-rose-200",
    tab: "bg-rose-600"
  }
};

const allProjects = [
  // AI / NLP
  {
    id: 1,
    domainId: "ai",
    title: "AI Chat-Bot",
    subtitle: "LangChain • Ollama • LLaMA 3",
    description: "An offline AI chatbot built using LangChain and Ollama with LLaMA 3. Designed to run completely locally, guaranteeing data privacy.",
    daysRequired: "14 Days",
    github: "https://github.com/rustyonkeys/Chat-Bot",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    domainId: "ai",
    title: "Resume ATS Checker",
    subtitle: "Python • AI Analysis",
    description: "Analyzes resumes against job descriptions using AI to ensure compatibility with Applicant Tracking Systems.",
    daysRequired: "10 Days",
    github: "https://github.com/rustyonkeys/Resume-ats-checker",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    domainId: "ai",
    title: "Hindi Text Summary",
    subtitle: "NLP • Jupiter Notebook",
    description: "Advanced NLP pipeline for summarizing Hindi text using deep learning techniques.",
    daysRequired: "25 Days",
    github: "https://github.com/rustyonkeys/Hindi_Text_summarization_using_NLP",
    gridClass: "md:col-span-2 md:row-span-1",
  },

  // Machine Learning
  {
    id: 4,
    domainId: "ml",
    title: "Movie Recommendation",
    subtitle: "ML • Collaborative Filtering",
    description: "Analyzes user behavior to provide personalized movie suggestions using ML algorithms.",
    daysRequired: "21 Days",
    github: "https://github.com/rustyonkeys/Movie_Recommendation_model",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 5,
    domainId: "ml",
    title: "Loan Prediction",
    subtitle: "Supervised Learning",
    description: "Predictive model for loan approval status based on applicant financial history.",
    daysRequired: "15 Days",
    github: "https://github.com/rustyonkeys/Loan_Prediction",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    domainId: "ml",
    title: "Churn Analysis",
    subtitle: "Data Science",
    description: "Predictive analytics to identify at-risk customers using historical data patterns.",
    daysRequired: "10 Days",
    github: "https://github.com/rustyonkeys/Churn-Analysis",
    gridClass: "md:col-span-2 md:row-span-1",
  },

  // Mobile Dev
  {
    id: 7,
    domainId: "mobile",
    title: "Project Manager",
    subtitle: "Flutter • Firebase",
    description: "Full-stack project management app with real-time updates and team collaboration.",
    daysRequired: "30 Days",
    github: "https://github.com/rustyonkeys/ProjectManager",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 8,
    domainId: "mobile",
    title: "Spotify Clone",
    subtitle: "Flutter • Dart",
    description: "A polished music streaming UI/UX clone with dynamic lists and player features.",
    daysRequired: "20 Days",
    github: "https://github.com/rustyonkeys/Spotify_clone",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 9,
    domainId: "mobile",
    title: "TrackIt",
    subtitle: "Flutter • Productivity",
    description: "Personal activity and task tracker designed for minimal and efficient use.",
    daysRequired: "15 Days",
    github: "https://github.com/rustyonkeys/TrackIt",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 10,
    domainId: "mobile",
    title: "Amazon UI",
    subtitle: "Flutter • E-commerce",
    description: "Complex UI recreation of the Amazon app with nested scrolls and category layouts.",
    daysRequired: "18 Days",
    github: "https://github.com/rustyonkeys/Amazon-UI",
    gridClass: "md:col-span-1 md:row-span-1",
  },

  // Web Dev
  {
    id: 11,
    domainId: "web",
    title: "E-Commerce Web",
    subtitle: "React • Tailwind",
    description: "Modern e-commerce platform with smooth transitions and responsive product grids.",
    daysRequired: "30 Days",
    github: "https://github.com/rustyonkeys/E-commerce",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 12,
    domainId: "web",
    title: "Habbit Tracker",
    subtitle: "JavaScript • Web",
    description: "Clean habit tracking application with interactive charts and streak counts.",
    daysRequired: "14 Days",
    github: "https://github.com/rustyonkeys/Habbit-Tracker",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 13,
    domainId: "web",
    title: "Melanie's Smoothies",
    subtitle: "Python • Web App",
    description: "Customized order management system for a boutique smoothie business.",
    daysRequired: "10 Days",
    github: "https://github.com/rustyonkeys/melanies_smoothies",
    gridClass: "md:col-span-2 md:row-span-1",
  },

  // Backend
  {
    id: 14,
    domainId: "backend",
    title: "Ticket Booking",
    subtitle: "Python • Backend",
    description: "Robust booking architecture handling seat concurrency and transaction safety.",
    daysRequired: "22 Days",
    github: "https://github.com/rustyonkeys/Booking_tickets_system",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 15,
    domainId: "backend",
    title: "Book Management",
    subtitle: "Python • Inventory",
    description: "Scalable backend for library inventory and member loan records.",
    daysRequired: "15 Days",
    github: "https://github.com/rustyonkeys/BookManagement_System",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 16,
    domainId: "backend",
    title: "AtWork",
    subtitle: "Java • Enterprise",
    description: "Employee productivity and workflow management backend service.",
    daysRequired: "18 Days",
    github: "https://github.com/rustyonkeys/AtWork",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function BentoProjects() {
  const [activeDomain, setActiveDomain] = useState("ai");

  const filteredProjects = allProjects.filter(p => p.domainId === activeDomain);
  const currentDomain = domains.find(d => d.id === activeDomain);
  const theme = themeConfig[currentDomain.theme];

  return (
    <section className="py-32 px-6 md:px-12 bg-white min-h-screen flex flex-col font-sans relative text-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="font-jaro text-5xl md:text-[5.5rem] font-semibold tracking-tighter text-black leading-[1.05]">
            My Projects <br className="hidden md:block" />
          </h2>
        </div>

        {/* --- Minimal Domain Navbar (Reference Style) --- */}
        <div className="flex items-center border-b border-gray-100 mb-16 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 md:gap-12">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`relative pb-4 text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap ${activeDomain === domain.id ? "text-black" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                {domain.label}
                {activeDomain === domain.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme.tab}`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[320px] gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeDomain}-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.3 }
                }}
                className={`group relative overflow-hidden rounded-[2.5rem] ${theme.bg} ${project.gridClass} cursor-pointer transition-colors duration-500`}
              >
                {/* Default State Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                  <div>
                    <div className={`inline-block px-4 py-1.5 mb-6 rounded-full bg-white ${theme.accent} text-xs font-bold tracking-widest uppercase shadow-sm`}>
                      {currentDomain.label}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Hover State Content (Darkened Domain Color) */}
                <div className={`absolute inset-0 ${theme.hover} p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 text-white translate-y-8 group-hover:translate-y-0`}>
                  <div className="inline-block px-3 py-1 mb-4 rounded bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase w-fit backdrop-blur-md">
                    {currentDomain.label}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-6 text-gray-200 text-sm font-medium">
                    <Clock size={16} />
                    <span>Duration: {project.daysRequired}</span>
                  </div>

                  <p className="text-base text-gray-200 leading-relaxed mb-8 line-clamp-4 font-medium">
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
