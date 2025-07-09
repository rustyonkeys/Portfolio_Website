"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function CertificationMarquee() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth tilt config
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const certifications = [
    {
      id: 1,
      title: "Introduction to Career Skills in Data Analytics",
      issuer: "LinkedIn Learning",
      image: "/CertificateOfCompletion_Introduction to Career Skills in Data Analytics-1.png",
    },
    {
      id: 2,
      title: "Python for Everybody",
      issuer: "University of Michigan",
      image: "/Python Certificate from Simplilearn-1.png",
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      image: "/introduction to AI-1.png",
    },
    {
      id: 4,
      title: "Front-End Web Developer",
      issuer: "Udacity Nanodegree",
      image: "/certs/cert4.jpeg",
    },
    {
      id: 5,
      title: "Flutter Development",
      issuer: "Udemy",
      image: "/certs/cert5.png",
    },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...certifications, ...certifications, ...certifications];

  return (
    <div className="relative overflow-hidden w-full py-16 bg-white">
      <motion.div
        className="flex w-max gap-12"
        animate={!isPaused ? { x: ["0%", "-100%"] } : { x: "0%" }}
        transition={{
          repeat: !isPaused ? Infinity : 0,
          ease: "linear",
          duration: 50, // Adjust speed: higher = slower
        }}
      >
        {marqueeItems.map((cert, index) => (
          <div
            key={`${cert.id}-${index}`}
            className="relative group"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsPaused(false);
              x.set(0);
            }}
          >
            {/* Box container with padding and faint black background */}
            <div className="p-4 bg-black/10 rounded-xl">
              <AnimatePresence mode="wait">
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs text-white bg-black/80 shadow-md z-50"
                  >
                    {cert.issuer}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                onMouseMove={handleMouseMove}
                className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-500"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-[90%] object-"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-2 px-4 text-sm font-semibold">
                  {cert.title}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
