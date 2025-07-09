import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "Deep Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    image: "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg",
  },
  {
    id: 2,
    title: "Python for Everybody",
    issuer: "Coursera (University of Michigan)",
    image: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg",
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "https://images.pexels.com/photos/210546/pexels-photo-210546.jpeg",
  },
  {
    id: 4,
    title: "Flutter Development",
    issuer: "Udemy",
    image: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg",
  },
];

export default function CertificationGrid3D() {
  const springConfig = { stiffness: 120, damping: 12 };

  return (
    <section className="flex flex-wrap gap-8 justify-center items-center p-12">
      {certifications.map((cert) => (
        <div key={cert.id} className="w-72 h-96">
          <TiltCard cert={cert} springConfig={springConfig} />
        </div>
      ))}
    </section>
  );
}

function TiltCard({ cert, springConfig }) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const lightX = useMotionValue(0);
  const lightY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountX = -((y - centerY) / centerY) * 12; // adjust tilt strength
    const rotateAmountY = ((x - centerX) / centerX) * 12;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);

    lightX.set(x);
    lightY.set(y);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    lightX.set(0);
    lightY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer bg-cover bg-center"
      style={{
        backgroundImage: `url(${cert.image})`,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Light follow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            lightX && lightY && lightX.get() !== 0
              ? `radial-gradient(circle at ${lightX.get()}px ${lightY.get()}px, rgba(255,255,255,0.2), transparent 60%)`
              : "none",
        }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 text-white">
        <h3 className="text-xl font-bold">{cert.title}</h3>
        <p className="text-sm mt-2">{cert.issuer}</p>
      </div>
    </motion.div>
  );
}
