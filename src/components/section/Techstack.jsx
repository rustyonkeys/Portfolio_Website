import { motion } from "framer-motion";

export const TechStack = () => {
  const techstack = [
    "Power Bi", "Python", "R", "Git", "Azure", "MicrosoftSQLServer",
    "Snowflake", "Apache", "Airflow", "Matplotlib", "NumPy",
    "Pandas", "Plotly", "scikit-learn"
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center text-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <p className="text-gray-300 mb-6 text-lg">
            I'm a Data geek (not literally, but yeah) who knows their way around Power BI, SQL, Databricks & Python — and around a bar counter too 🍻.
            With 2+ years of experience turning messy data into meaningful insights, I thrive in greenfield environments where every day brings something new (preferably not on fire).
            Currently on the lookout for new opportunities where I can keep learning, keep building, and maybe even keep caffeinating responsibly ☕.
          </p>

          <div className="rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">My TechStack</h3>
            <div className="flex flex-wrap gap-2">
              {techstack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
