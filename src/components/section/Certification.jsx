import Navbar from "../FloatingDockDemo.jsx";
import CertificationMarquee from "../ui/CertificationMarquee.jsx";


export default function Certifications() {
 return (
  <section className="min-h-screen w-full flex flex-col items-center justify-center">
    <h2 className = "py-2 font-bold text-4xl mb-[10rem]">Certifications</h2>
    <div className = "flex items-center justify-center w-full">
      <CertificationMarquee />
      </div> 
  </section>
 );}
