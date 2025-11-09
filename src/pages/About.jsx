import React, { useMemo, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard"; 
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { techCategories } from "../assets/assets";
import { stats } from "../assets/assets";
import { certificates } from "../assets/assets";
import { reviews } from "../assets/assets";
import TechCard from "../components/TechCard";
import CertificateCard from "../components/CertificateCard";

const About = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const containerRef = useRef(null);
  const mouseTimer = useRef(null);
  const rafId = useRef(null);
  const navigate = useNavigate();
  


  const words = ["Developer", "Student", "Learner", "Creator", "Innovator"];


  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (isTyping) {
      if (typedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 80); 
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 800); 
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 40); 
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentWordIndex, words]);

  
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

  
  

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
      {/* blobs */}
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
          className="fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-30 blur-sm"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: hoveredTech ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto space-y-24">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-base-content">
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Me
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-primary mb-8 h-12">
            I'm a {typedText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-base-content/80 text-lg leading-relaxed transform hover:scale-105 transition-transform duration-300">
            Hey! I'm <strong className="text-primary">Shivam</strong>, a
            2nd year B.Tech student and passionate MERN stack developer. I
            love crafting web apps, exploring new tech, and bringing ideas to
            life through code. Currently expanding my skillset with <strong className="text-secondary">C++ programming</strong> and 
            <strong className="text-secondary"> Data Structures & Algorithms</strong> to strengthen my problem-solving foundation.
          </p>

          {/*  Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-6 border border-base-300 dark:border-base-600 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`text-2xl mb-2 ${stat.color} group-hover:scale-125 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <p className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm text-base-content/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Categories */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-base-content mb-8">
            My Tech Stack
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-base-200 text-base-content hover:bg-base-300"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {techCategories[activeCategory].technologies.map((tech, i) => (
              <TechCard 
                key={i} 
                tech={tech} 
                activeCategory={activeCategory} 
                hoveredTech={hoveredTech} 
                setHoveredTech={setHoveredTech} 
                i={i}
              />
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-base-content mb-8">
            My Certificates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>

          

          {/* Achievement Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mt-12 text-center border border-primary/20">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Professional Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-base-content/70">Certificates Earned</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-base-content/70">Completion Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-base-content/70">Learning Passion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Reviews Section - Responsive with Enhanced Fade */}
        <section className="relative overflow-hidden py-14">
          <h2 className="text-4xl font-bold text-center text-base-content mb-16">
            What People Say
          </h2>

         
          <div className="hidden md:flex gap-8 h-150 relative">
            <div className="flex-1 relative overflow-hidden rounded-2xl">
              <div className="animate-scroll-up space-y-6">
                {/* First set of reviews */}
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    rating={review.rating}
                    review={review.review}
                  />
                ))}

                {/* Duplicate set for seamless loop */}
                {reviews.map((review) => (
                  <ReviewCard
                    key={`duplicate-${review.id}`}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    rating={review.rating}
                    review={review.review}
                  />
                ))}
              </div>
              
              {/* Column-specific fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-base-100/90 via-base-100/80 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100/90 via-base-100/80 to-transparent pointer-events-none z-20"></div>
            </div>

            {/* Right Column - Reviews going down */}
            <div className="flex-1 relative overflow-hidden rounded-2xl">
              <div className="animate-scroll-down space-y-6">
                {/* First set of reviews */}
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    rating={review.rating}
                    review={review.review}
                  />
                ))}

                {/* Duplicate set for seamless loop */}
                {reviews.map((review) => (
                  <ReviewCard
                    key={`duplicate-${review.id}`}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    rating={review.rating}
                    review={review.review}
                  />
                ))}
              </div>
              
              {/* Column-specific fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>

          {/* Mobile View (Single Column) */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden h-140 rounded-2xl">
              <div className="animate-scroll-up-mobile space-y-4">
                {/* All reviews in single column for mobile */}
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    rating={review.rating}
                    review={review.review}
                  />
                ))}

                {/* Duplicate set for seamless loop */}
                {reviews.map((review) => (
                  <ReviewCard
                    key={`mobile-duplicate-${review.id}`}
                    name={review.name}
                    role={review.role}
                    avatar={review.avatar}
                    rating={review.rating}
                    review={review.review}
                  />
                ))}
              </div>
              
              {/* Mobile fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-base-100/90 via-base-100/80 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-100/90 via-base-100/80 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>

          {/* Enhanced Section-wide fade overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base-100  via-base-100/40 to-transparent pointer-events-none z-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100  via-base-100/40 to-transparent pointer-events-none z-30"></div>
          
          {/* Side fade effects */}
          <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-base-100 to-transparent pointer-events-none z-30"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-base-100 to-transparent pointer-events-none z-30"></div>
        </section>

        {/* Add Review CTA Section */}
        <section className="text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Want to Add a Review?
            </h3>
            <p className="text-base-content/70 mb-6 text-lg">
              Worked with me on a project? I'd love to hear your feedback and showcase our collaboration!
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary rounded-full px-8 py-8 md:py-3 text-lg font-semibold hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Share Your Experience ✨
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-12 border shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Let's Build Something
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {" "}
                Awesome!
              </span>
            </h2>
            <p className="text-base-content/70 mb-8 text-lg">
              I'm open to collaboration, internships, and creative projects.
              Let's connect and innovate together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => navigate("/projects")}
                className="btn btn-primary rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects 🚀
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-outline rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Get In Touch 💬
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
