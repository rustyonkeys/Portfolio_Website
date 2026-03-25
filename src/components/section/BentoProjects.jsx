import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

const bentoProjects = [
  {
    id: 1,
    title: "AI Chatbot",
    subtitle: "AI • LangChain • LLaMA 3",
    domain: "AI",
    description:
      "An offline AI chatbot built using LangChain and Ollama with LLaMA 3. Designed to run completely locally, this chatbot guarantees data privacy while providing intelligent, conversational responses.",
    daysRequired: "14 Days",
    image: "/src/images/aibot.svg",
    gridClass: "md:col-span-2 md:row-span-2",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    id: 2,
    title: "Movie Recommendation",
    subtitle: "Machine Learning Model",
    domain: "Machine Learning",
    description: "A recommendation system utilizing Machine Learning techniques. It analyzes user behavior data to provide highly personalized movie suggestions using collaborative and content-based filtering algorithms.",
    daysRequired: "21 Days",
    image: "/images/project-ml-predictor.png",
    gridClass: "md:col-span-2 md:row-span-1",
    bgColor: "bg-emerald-50",
    hoverColor: "hover:bg-emerald-100",
  },
  {
    id: 3,
    title: "Loan Prediction",
    subtitle: "Predictive Analytics",
    domain: "Machine Learning",
    description: "A supervised learning model predicting loan approval status. It parses applicants' financial history and demographics.",
    daysRequired: "15 Days",
    image: "/images/project-ml-predictor.png",
    gridClass: "md:col-span-1 md:row-span-1",
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
  },
  {
    id: 4,
    title: "Customer Churn",
    subtitle: "Data Analytics",
    domain: "Data Science",
    description: "Predicts customer churn using deep analytics. By identifying at-risk customers early, businesses can deploy targeted retention strategies.",
    daysRequired: "10 Days",
    image: "/images/project-ml-predictor.png",
    gridClass: "md:col-span-1 md:row-span-1",
    bgColor: "bg-rose-50",
    hoverColor: "hover:bg-rose-100",
  },
  {
    id: 5,
    title: "Hindi Text NLP",
    subtitle: "Text Summarization",
    domain: "AI",
    description: "An NLP pipeline specifically trained and tailored for the Hindi language. It extracts and summarizes the most vital information from large text corpuses for quick comprehension.",
    daysRequired: "25 Days",
    image: "/images/project-ml-predictor.png",
    gridClass: "md:col-span-2 md:row-span-1",
    bgColor: "bg-amber-50",
    hoverColor: "hover:bg-amber-100",
  },
  {
    id: 6,
    title: "E-Commerce App",
    subtitle: "React Native Mobile App",
    domain: "Mobile Dev",
    description: "A fully functional cross-platform mobile application for e-commerce, offering robust shopping cart functionality, secure payment gateway integration, and a seamless and responsive user experience.",
    daysRequired: "30 Days",
    image: "/images/project-ml-predictor.png",
    gridClass: "md:col-span-2 md:row-span-1",
    bgColor: "bg-indigo-50",
    hoverColor: "hover:bg-indigo-100",
  }
];

export default function BentoProjects() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white min-h-screen flex flex-col font-sans relative text-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="font-jaro text-5xl md:text-[5.5rem] font-semibold tracking-tighter text-black leading-[1.05]">
            Bento Projects <br className="hidden md:block" />
            Collection.
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl font-medium">
            Hover over the grids to explore the details of my selected works.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[320px] gap-6">
          {bentoProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] ${project.bgColor} ${project.gridClass} cursor-pointer transition-colors duration-500`}
            >
              {/* Default State Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                <div>
                  <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase shadow-sm">
                    {project.domain}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700">
                    {project.subtitle}
                  </p>
                </div>

                {/* Decorative image hint at the bottom right */}
                <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 opacity-30 mix-blend-multiply transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover rounded-tl-3xl shadow-2xl"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Hover State Content (Details) */}
              <div className="absolute inset-0 bg-black p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 text-white translate-y-8 group-hover:translate-y-0">
                <div className="inline-block px-3 py-1 mb-4 rounded bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase w-fit backdrop-blur-md">
                  {project.domain}
                </div>

                <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mb-6 text-gray-300 text-sm font-medium">
                  <Clock size={16} />
                  <span>Duration: {project.daysRequired}</span>
                </div>

                <p className="text-base text-gray-300 leading-relaxed mb-8 line-clamp-4 font-medium">
                  {project.description}
                </p>

                <button className="self-start flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
                  <span>View Project</span>
                  <ExternalLink size={16} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
