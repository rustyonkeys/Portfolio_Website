import React, { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubContributions() {
  const [selectedYear, setSelectedYear] = useState("last");
  
  // You can adjust these years based on when the GitHub account was created
  const years = ["last", 2026, 2025, 2024, 2023, 2022];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#F4F4F5] flex flex-col items-center justify-center font-sans text-black relative">
      <div className="max-w-6xl mx-auto w-full text-center flex flex-col items-center">
        {/* Title & "Tacky" Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center"
        >
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-white border border-gray-200 text-black text-xs font-bold tracking-widest uppercase shadow-sm">
            Live GitHub Stats
          </div>
          <h2 className="font-jaro text-5xl md:text-[5rem] font-semibold tracking-tighter text-black leading-[1.05] mb-6">
            My Digital Footprint.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl font-medium leading-relaxed">
            Fueling my passion one commit at a time. Here is the live heatmap of my late-night bug fixes, relentless problem-solving, and continuous learning over the past years.
          </p>
        </motion.div>

        {/* Heatmap Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-white border border-gray-200 shadow-sm rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full flex md:flex-row flex-col-reverse gap-8 items-start justify-between">
            
            {/* Heatmap Area */}
            <div className="flex-grow w-full overflow-x-auto pb-4 hide-scrollbar flex justify-center md:justify-start">
              <GitHubCalendar
                username="rustyonkeys"
                year={selectedYear}
                colorScheme="light"
                blockSize={16}
                blockMargin={5}
                fontSize={14}
                theme={{
                  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                }}
                style={{
                  fontFamily: 'inherit',
                  margin: '0 auto'
                }}
              />
            </div>

            {/* Year Filter - Exact GitHub Position (Right Side Vertical) */}
            <div className="flex md:flex-col gap-2 w-full md:w-32 flex-wrap md:flex-nowrap justify-center md:items-start pl-0 md:pl-4 border-b md:border-b-0 md:border-l border-gray-100 pb-6 md:pb-0 mb-4 md:mb-0">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-auto md:w-full text-left px-4 py-2 text-sm md:text-sm font-semibold rounded-md transition-all duration-200 ${
                    selectedYear === year
                      ? "bg-[#0969da] text-white shadow-sm"
                      : "bg-transparent text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {year === "last" ? "Last Year" : year}
                </button>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
