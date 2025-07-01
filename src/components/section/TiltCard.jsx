import React from "react";
import CertificateCard from "@/components/CertificateCard"; // adjust path!

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "Deep Learning Specialization",
      issuer: "Coursera (Andrew Ng)",
      date: "2024",
      imageUrl: "https://images.credly.com/images/deeplearning.png",
    },
    {
      id: 2,
      title: "Python for Everybody",
      issuer: "Coursera (University of Michigan)",
      date: "2024",
      imageUrl: "https://images.credly.com/images/python.png",
    },
    // Add more...
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black flex flex-wrap justify-center gap-8 p-8">
      {certifications.map((cert) => (
        <CertificateCard
          key={cert.id}
          imageUrl={cert.imageUrl}
          title={cert.title}
          issuer={cert.issuer}
          date={cert.date}
          width={250}  // adjust size!
          height={300} // adjust size!
        />
      ))}
    </main>
  );
}
