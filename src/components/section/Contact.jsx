import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaHackerrank, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Replace these with your actual EmailJS credentials
      const serviceID = 'service_l31664d';
      const templateID = 'template_r3xzrsn';
      const publicKey = 'gAIsrOPwBHaCOmyzF';

      const response = await emailjs.send(
        serviceID,
        templateID,
        {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        },
        publicKey
    );


      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
    id = "contact"
    className="min-h-screen bg-[#fdfcf7] flex flex-col">
      {/* Navbar
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-8 border-b border-gray-200">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          <span className="text-teal-600">K</span>Shetty<span className="text-teal-600">.</span>
        </h1>
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium">
          <a href="#home" className="hover:text-teal-600 transition">Home</a>
          <a href="#projects" className="hover:text-teal-600 transition">Projects</a>
          <a href="#certifications" className="hover:text-teal-600 transition">Certifications</a>
          <a href="#contact" className="text-teal-600">Contact</a>
        </nav>
      </header> */}

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Let's Talk
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have a project in mind or just want to say hello? Feel free to reach out. I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-teal-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:kirthi20156@gmail.com" className="text-gray-600 hover:text-teal-600 transition">
                    kirthishetty20156@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-teal-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex space-x-4 text-2xl">
                <a href="http://www.linkedin.com/in/kirthishetty" aria-label="LinkedIn" className="text-gray-700 hover:text-blue-800 transition">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/rustyonkeys" aria-label="GitHub" className="text-gray-700 hover:text-black transition">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-sm text-center font-medium">
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        <p>© 2025 Kirthi Shetty. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;