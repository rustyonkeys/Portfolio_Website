export default function Certifications() {
  const certificates = [
    {
      title: "Python",
      image: "/assets/photos/python-certificate-from-simplilearn-1.png",
    },
    {
      title: "Data Analysit",
      image: "/assets/photos/certificateofcompletion-introduction to-career-skills-in-data-analytics-1.png",
    },
    {
      title: "AWS",
      image: "/assets/photos/aws-certificate.jpg",
    },
    {
      title: "Power Bi",
      image: "/assets/photos/powerbI-certificate.jpg",
    },
  ];

  return (
    <section
      id="certifications"
      className="w-full min-h-screen bg-[#F4F4F5] text-black flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="font-jaro text-5xl md:text-[5rem] flex items-center justify-center font-semibold tracking-tighter text-black leading-[1.05] mb-32">
          My Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black text-center">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
