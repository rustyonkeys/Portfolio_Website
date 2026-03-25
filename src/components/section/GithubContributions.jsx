import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "rustyonkeys";
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: CURRENT_YEAR - 2025 + 1 },
  (_, i) => CURRENT_YEAR - i
);

export default function GithubContributions() {
  const [imgKey, setImgKey] = useState(Date.now());
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [selectedYear, setSelectedYear] = useState("last");

  // Force a fresh fetch by busting the browser cache
  const handleRefresh = useCallback(() => {
    setLoaded(false);
    setError(false);
    setImgKey(Date.now());
  }, []);

  const handleYearChange = useCallback((year) => {
    setSelectedYear(year);
    setLoaded(false);
    setError(false);
    setImgKey(Date.now());
  }, []);

  // Live SVG URL — year format: /year/username for specific years
  const chartUrl =
    selectedYear === "last"
      ? `https://ghchart.rshah.org/${GITHUB_USERNAME}?_cb=${imgKey}`
      : `https://ghchart.rshah.org/${selectedYear}/${GITHUB_USERNAME}?_cb=${imgKey}`;

  return (
    <section className="py-32 px-6 md:px-12 bg-[#F4F4F5] flex flex-col items-center justify-center font-sans text-black relative">
      <div className="max-w-6xl mx-auto w-full text-center flex flex-col items-center">

        {/* Title */}
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
            Fueling my passion one commit at a time — a live view of every contribution I've made on GitHub.
          </p>
        </motion.div>

        {/* Heatmap Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-white border border-gray-200 shadow-sm rounded-[2.5rem] p-8 md:p-12"
        >
          {/* Year Filter Tabs */}
          <div className="flex items-center border-b border-gray-100 mb-8 gap-8">
            {["last", ...YEARS].map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`relative pb-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                  selectedYear === year ? "text-black" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {year === "last" ? "Last Year" : year}
                {selectedYear === year && (
                  <motion.div
                    layoutId="yearTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 pb-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Live</span>
            </div>
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-end mb-6">
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black transition-colors border border-gray-200 hover:border-gray-400 px-4 py-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={loaded ? "" : "animate-spin"}
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
              Refresh
            </button>
          </div>

          {/* Chart */}
          <div className="w-full overflow-x-auto flex items-center justify-center min-h-[140px]">
            {error ? (
              <div className="text-center py-8">
                <p className="text-red-500 font-semibold text-sm mb-4">
                  Could not load GitHub contributions. GitHub may be temporarily unavailable.
                </p>
                <button
                  onClick={handleRefresh}
                  className="px-5 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                {!loaded && (
                  <div className="flex flex-col items-center gap-3 text-gray-400">
                    <svg
                      className="animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    <span className="text-xs font-medium">Fetching live data from GitHub…</span>
                  </div>
                )}
                <img
                  key={imgKey}
                  src={chartUrl}
                  alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
                  className={`w-full max-w-5xl transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute"}`}
                  onLoad={() => setLoaded(true)}
                  onError={() => { setLoaded(true); setError(true); }}
                  style={{ minWidth: 600 }}
                />
              </>
            )}
          </div>

          {/* Footer */}
          {loaded && !error && (
            <div className="mt-6 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>github.com/<strong className="text-gray-600">{GITHUB_USERNAME}</strong></span>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                View Profile →
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
