import React, { useState, useEffect, useMemo, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaGithub, 
  FaPaperPlane,
  FaUser,
  FaEdit,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { socialLinks,contactInfo,collaborationTypes } from '../assets/assets';
import CollabCard from '../components/CollabCard';
import ContactInfoCard from '../components/ContactInfoCard';
import SocialLinkCard from '../components/SocialLinkCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const containerRef = useRef(null);
  const mouseTimer = useRef(null);
  const rafId = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 16;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      
      lastTime = now;
      setIsMouseMoving(true);

      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
      }

      mouseTimer.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 500);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const floatingElements = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 100,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 2,
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email:import.meta.env.VITE_EMAIL_TO,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      
     
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
     
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-xl"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.size}px`,
              height: `${el.size}px`,
              animation: `ultraSmoothFloat ${el.duration}s ease-in-out infinite`,
              animationDelay: `${el.delay}s`,
              transform: `translate3d(${
                (mousePosition.x - window.innerWidth / 2) * 0.008
              }px, ${(mousePosition.y - window.innerHeight / 2) * 0.008}px, 0)`,
              transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          />
        ))}
      </div>

    
      {isMouseMoving && (
        <div
          className="fixed w-5 h-5 bg-primary/40 rounded-full pointer-events-none z-30 blur-sm"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: hoveredElement ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

     
      <div className="relative z-10 container mx-auto space-y-20">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-base-content">
            Let's{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Connect
            </span>
          </h1>
          <p className="text-xl text-base-content/80 leading-relaxed mb-8">
            I'm always excited to collaborate on innovative projects, discuss new ideas, 
            and connect with fellow developers. Let's build something amazing together!
          </p>
        </section>

      
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
            Collaboration Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <CollabCard key={index} type={type} />
            ))}
          </div>
        </section>

       
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-8 shadow-xl border border-base-300 dark:border-base-600 flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-base-content flex items-center gap-3">
              <FaPaperPlane className="text-primary" />
              Send Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-2">
                    <FaUser className="inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-base-300 dark:border-base-600 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-base-content/80 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-base-300 dark:border-base-600 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-base-content/80 mb-2">
                  <FaEdit className="inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-base-300 dark:border-base-600 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-base-content/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-full min-h-[200px] px-4 py-3 rounded-xl border border-base-300 dark:border-base-600 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-7 w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  onMouseEnter={() => setHoveredElement('submit')}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center py-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center py-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                    ❌ Failed to send message. Please try again or email me directly.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-8 shadow-xl border border-base-300 dark:border-base-600">
              <h2 className="text-3xl font-bold mb-6 text-base-content">
                Get In Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-8 shadow-xl border border-base-300 dark:border-base-600">
              <h2 className="text-3xl font-bold mb-6 text-base-content">
                Follow Me
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                 <SocialLinkCard key={index} social={social} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-8 shadow-xl border border-base-300 dark:border-base-600">
              <h2 className="text-2xl font-bold mb-6 text-base-content">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/projects')}
                  className="w-full btn btn-outline rounded-xl py-3 hover:scale-105 transition-all duration-300"
                >
                  View My Projects
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="w-full btn btn-outline rounded-xl py-3 hover:scale-105 transition-all duration-300"
                >
                  Learn More About Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-12 border shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Ready to Start Something
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {" "}
                Amazing?
              </span>
            </h2>
            <p className="text-base-content/70 mb-8 text-lg">
              Whether it's a new project, collaboration, or just a friendly chat about tech,
              I'm always excited to connect with fellow developers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL_TO || "keshavgilhotra4@gmail.com"}`}
                className="btn btn-primary rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="mr-2" />
                Email Me
              </a>
              <a
                href="https://github.com/ikeshav26"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:-rotate-2 transition-all duration-300"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ultraSmoothFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) scale(1.02) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) scale(1.05) rotate(0deg);
          }
          75% {
            transform: translateY(-6px) scale(1.02) rotate(-1deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Contact;
