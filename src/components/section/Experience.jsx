export default function Experience() {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Hexaware Technologies",
      duration: "Dec 2025 - Feb 2026",
      description: [
        "Designed and implemented an end-to-end data pipeline using Python, SQL, and Snowflake to centralize employee certification records.",
        "Performed data wrangling, validation, and business-rule-based data imputation using Pandas and NumPy.",
        "Built a production-ready Streamlit web application with CRUD functionality for managing certification records.",
        "Integrated real-time Snowflake connectivity to enable dynamic updates and centralized data access.",
        "Developed interactive analytics dashboards to monitor certification status and workforce compliance.",
        "Achievements: Earned 5 Snowflake badges covering Snowflake Fundamentals, SQL, Data Warehousing, and Performance Optimization."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Snowflake", "Streamlit"]
    },
    {
      title: "Python Developer Intern",
      company: "Diversity Info Tech",
      duration: "Mar 2026 - Present",
      description: "Trained and deployed ML models for classification problems using Python and Flask.",
      technologies: ["Python", "Flask", "PostgreSQL"]
    },
    {
      title: "Team Project: AtWork",
      company: "Smart India Hackathon",
      duration: "2024",
      description: "Collaborated in a 6-member team to design a geolocation-based attendance tracking system with planned analytics dashboard integration.",
      technologies: ["Java", "Firebase", "Google Maps API"]
    },
  ];

  const education = [
    {
      duration: "2021 - 2025",
      degree: "B.Tech in Computer Science",
      institution: "Your University Name",
      description: "Focus on Artificial Intelligence, Data Science, and Software Engineering. Engaged in various technical clubs and hackathons.",
    },
    {
      duration: "2019 - 2021",
      degree: "Higher Secondary (Class XII)",
      institution: "Your School Name",
      description: "Graduated with a focus on Mathematics, Physics, and Computer Science."
    }
  ];
  // bg-[#0E0E10]
  return (
    <section className="w-full min-h-screen bg-white text-gray-900 px-6 py-24 flex justify-center font-sans">
      <div className="max-w-6xl w-full">
        {/* Main Section Header */}
        <h2 className="text-5xl font-jaro md:text-5xl font-bold mb-20 text-black text-center tracking-tight">
          My Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20">

          {/* EDUCATION COLUMN */}
          <div>
            <h3 className="text-[14px] font-semibold text-black tracking-[0.2em] uppercase mb-10 ml-8">
              Education
            </h3>
            <div className="relative border-l border-gray-200 ml-3.5">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10 mb-12 group cursor-default">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-white border-2 border-gray-300 group-hover:border-black transition-colors duration-300"></span>

                  {/* Content */}
                  <div className="transition-all duration-300 -mt-2">
                    <div className="text-sm font-medium text-gray-500 mb-2 font-mono tracking-tight">{edu.duration}</div>
                    <h4 className="text-xl font-medium text-black mb-1 transition-colors">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 font-medium mb-3">{edu.institution}</p>
                    <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE COLUMN */}
          <div>
            <h3 className="text-[14px] font-semibold text-black tracking-[0.2em] uppercase mb-10 ml-8">
              Experience
            </h3>
            <div className="relative border-l border-gray-200 ml-3.5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10 mb-12 group cursor-default">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-white border-2 border-gray-300 group-hover:border-black transition-colors duration-300"></span>

                  {/* Content */}
                  <div className="transition-all duration-300 -mt-2">
                    <div className="text-sm font-medium text-gray-500 mb-2 font-mono tracking-tight">{exp.duration}</div>
                    <h4 className="text-xl font-medium text-black mb-1 transition-colors">{exp.title}</h4>
                    <p className="text-sm text-gray-600 font-medium mb-4">{exp.company}</p>

                    <div className="text-sm text-gray-700 leading-relaxed mb-5">
                      {Array.isArray(exp.description) ? (
                        <ul className="space-y-2.5 list-none">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="text-gray-400 mt-1.5 text-[8px]">●</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{exp.description}</p>
                      )}
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium border border-gray-200 group-hover:bg-gray-100 group-hover:text-gray-900 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
