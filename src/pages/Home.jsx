import React, { useEffect, useState, useRef, useContext, useCallback, useMemo } from "react";
import { DragCards } from "../components/Cards";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../context/ThemeContext";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);
  const navigate = useNavigate();
  const { theme } = useContext(appContext);

  const navigateProject = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const navigateContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 16; 

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      
      lastTime = now;
      
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
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);


  const floatingCards = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 20 + Math.random() * 10,
      scale: 0.6 + Math.random() * 0.4,
    }));
  }, []);


  const githubImageUrls = useMemo(() => ({
    dark: `https://raw.githubusercontent.com/Shivam-JSS/Shivam-JSS/output/github-contribution-grid-snake-dark.svg?t=${Math.floor(Date.now() / 60000)}`, 
    light: `https://raw.githubusercontent.com/Shivam-JSS/Shivam-JSS/output/github-contribution-grid-snake.svg?t=${Math.floor(Date.now() / 60000)}`
  }), []);

  return (
    <div className="min-h-screen bg-base-100 relative overflow-hidden pt-24">
      {/* Optimized Floating Cards Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className="absolute opacity-20 dark:opacity-10" 
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: `scale(${card.scale})`,
              animation: `float ${card.duration}s ease-in-out infinite`,
              animationDelay: `${card.delay}s`,
              willChange: 'transform',
            }}
          >
            <div className="w-32 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg blur-sm"></div>
          </div>
        ))}
      </div>

     
      <div
        className="fixed w-8 h-8 bg-primary rounded-full pointer-events-none z-10 opacity-50 blur-sm" 
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: "translate3d(0, 0, 0)",
          transition: "none",
          willChange: 'transform',
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-8">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl space-y-8 lg:pl-30">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-base-content leading-tight animate-slide-up">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      SHIVAM
                    </span>
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <p className="text-xl md:text-2xl text-base-content/80 font-medium animate-slide-up-delay-1">
                   A Highly Motivated MERN Stack Developer
                  </p>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-base-content/70 text-lg leading-relaxed animate-slide-up-delay-2">
                  Passionate about building innovative MERN stack applications. Currently strengthening my foundation in C++ and Data Structures & Algorithms 
                  while specializing in creating intelligent web solutions that solve real-world problems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up-delay-3">
                <button
                  onClick={navigateProject}
                  className="btn btn-primary rounded-full px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Explore My Projects
                </button>
                <button
                  onClick={navigateContact}
                  className="btn btn-outline rounded-full px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Let's Connect
                </button>
              </div>
            </div>

            {/* Right Content - Floating Tech Icons */}
            <div className="flex-1 flex justify-center lg:justify-end lg:pr-30">
              <div className="relative w-96 h-96">
                {/* Animated floating tech badges */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-float-slow">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    React.js
                  </div>
                </div>
                
                <div className="absolute top-20 right-12 animate-float-slow-delay-1">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Node.js
                  </div>
                </div>
                
                <div className="absolute top-40 left-10 animate-float-slow-delay-2">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    MongoDB
                  </div>
                </div>

                <div className="absolute top-18 left-11 animate-float-slow-delay-2">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    C++
                  </div>
                </div>
                
                <div className="absolute bottom-18 right-11 animate-float-slow-delay-3">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    DSA
                  </div>
                </div>
                
                <div className="absolute bottom-40 right-10 animate-float-slow-delay-3">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    JavaScript
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-12 animate-float-slow-delay-4">
                  <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    AI/ML
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-slow-delay-5">
                  <div className="bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-600 text-base-content px-5 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Express.js
                  </div>
                </div>
                
                {/* Central glowing orb */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-28 h-28 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse-slow-delay"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-spin-slow"></div>
                </div>
                
                {/* Connecting lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-20">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-primary" stopColor="currentColor" stopOpacity="0.3"/>
                        <stop offset="100%" className="text-secondary" stopColor="currentColor" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <circle cx="50%" cy="50%" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5">
                      <animateTransform attributeName="transform" type="rotate" values="0 192 192;360 192 192" dur="30s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl font-bold text-center text-base-content mb-12">
            GitHub Activity
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl p-6">
              <img
                src={theme === 'dark' ? githubImageUrls.dark : githubImageUrls.light}
                alt={`GitHub Snake ${theme === 'dark' ? 'Dark' : 'Light'}`}
                className="w-full"
                loading="lazy" 
                onError={(e) => {
                  e.target.style.display = "none";
                  document.getElementById("fallback-message").style.display = "block";
                }}
              />
              <div
                className="text-center text-base-content/60 mt-4 hidden"
                id="fallback-message"
              >
                <p>GitHub Snake Animation Loading...</p>
                <p className="text-sm mt-2">
                  Setting up GitHub snake animation...
                </p>
              </div>
              <p className="text-center text-base-content/60 mt-4">
                Snake eating my GitHub commits 🐍
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="relative">
            <DragCards />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 py-8 md:py-16">
          {/* Projects Completed */}
          <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl border border-base-300 dark:border-base-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-primary mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 20l9-5-9-5-9 5 9 5z" />
                <path d="M12 12V4l9 5-9 5-9-5 9-5z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">5+</h3>
            <p className="text-base-content/70 font-medium text-sm md:text-base">
              Projects Completed
            </p>
          </div>

          {/* Years of Learning */}
          <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl border border-base-300 dark:border-base-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-secondary mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">5+</h3>
            <p className="text-base-content/70 font-medium text-sm md:text-base">
              Months of Innovation
            </p>
          </div>

          {/* Skills Mastered */}
          <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl border border-base-300 dark:border-base-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-accent mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 10V3.5a.5.5 0 0 0-.85-.35l-7.3 7.3a1.5 1.5 0 0 0 0 2.1l7.3 7.3a.5.5 0 0 0 .85-.35V14h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-accent mb-2">10+</h3>
            <p className="text-base-content/70 font-medium text-sm md:text-base">Technologies Mastered</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;