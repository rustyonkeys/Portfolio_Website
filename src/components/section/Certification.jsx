export default function Certifications() {
  const certificates = [
    {
      title: "Python",
      image: "/Python Certificate from Simplilearn-1.png",
    },
    {
      title: "Data Analysit",
      image: "/CertificateOfCompletion_Introduction to Career Skills in Data Analytics-1.png",
    },
    {
      title: "AI",
      image: "/introduction to AI-1.png",
    },
    {
      title: "Data Science",
      image: "/certifications/datasci.png",
    },
  ];

  return (
    <section
			id="certifications"
     className="w-full min-h-screen bg-[#f0f0f0] dark:bg-[#121212] text-black dark:text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white text-center">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
