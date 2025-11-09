import React, { useState, useEffect, useMemo, useRef, useContext } from "react";
import {
  FaGithub,
  FaReact,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../context/ThemeContext";
import { projects } from "../assets/assets";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const containerRef = useRef(null);
  const mouseTimer = useRef(null);
  const rafId = useRef(null);
  const navigate = useNavigate();
  const { theme } = useContext(appContext);

  // Mouse tracking for smooth blob movement
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

  // Floating background elements
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



  // Filter categories
  const filters = [
    { id: "all", label: "All Projects", icon: <FaCode /> },
    { id: "fullstack", label: "Full Stack", icon: <FaReact /> },
    { id: "ai", label: "AI/ML", icon: <FaBrain /> },
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);



  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
      {/* Floating background blobs */}
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

      {/* Interactive cursor */}
      {isMouseMoving && (
        <div
          className="fixed w-5 h-5 bg-primary/40 rounded-full pointer-events-none z-30 blur-sm"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: hoveredProject ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-base-content">
            My{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="text-xl text-base-content/80 leading-relaxed mb-8">
            Explore my collection of web applications, AI projects, and
            innovative solutions built with modern technologies and creative
            problem-solving.
          </p>
        </section>

        {/* Filter Tabs */}
        <section className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-base-200 text-base-content hover:bg-base-300"
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectsCard key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-12 border shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Want to See More?
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {" "}
                Let's Connect!
              </span>
            </h2>
            <p className="text-base-content/70 mb-8 text-lg">
              I'm always working on new projects and exploring innovative
              technologies. Check out my GitHub for more repositories and
              ongoing work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="https://github.com/Student-JSS">
                <button className="btn btn-primary rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <FaGithub className="mr-2" />
                  View GitHub
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn btn-outline rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:-rotate-2 transition-all duration-300">
                  Get In Touch 💬
                </button>
              </Link>
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

export default Projects;
