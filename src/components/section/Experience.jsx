export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech",
      duration: "Jan 2024 - Apr 2024",
      description:
        "Built responsive UI using React and Tailwind. Improved performance and modularized components.",
    },
    {
      title: "Machine Learning Intern",
      company: "DataGenix",
      duration: "May 2023 - Aug 2023",
      description:
        "Trained and deployed ML models for classification problems using Python and Flask.",
    },
    {
      title: "Cloud Engineering Trainee",
      company: "CloudBase",
      duration: "Sept 2022 - Dec 2022",
      description:
        "Deployed applications to AWS, worked with Docker and CI/CD pipelines.",
    },
    {
      title: "Data Analyst Intern",
      company: "Insite Analytics",
      duration: "Jan 2022 - Mar 2022",
      description:
        "Analyzed data using Python, created reports and dashboards using Power BI.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white text-gray-900 px-4 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-12 font-sans text-gray-800">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-6 transition duration-300 ease-in-out hover:shadow-lg hover:border-gray-300 hover:bg-gray-50"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-500 italic">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
