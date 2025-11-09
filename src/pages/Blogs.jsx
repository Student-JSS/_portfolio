import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../assets/assets";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      const timeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);

      return () => clearTimeout(timeout);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  

  return (
    <div className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden">
     
      <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
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
                (mousePosition.x - window.innerWidth / 2) * 0.005
              }px, ${(mousePosition.y - window.innerHeight / 2) * 0.005}px, 0)`,
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
            transform: hoveredPost ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-6">
          Dev{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Blogs
          </span>
        </h1>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          Sharing my Gen-AI powered builds, MERN stack innovations, and lessons
          from building intelligent web applications with cutting-edge AI integration.
        </p>
      </motion.section>

      
      <div className="relative z-10 max-w-6xl mx-auto">
      
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

     
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-24 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
         
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base-content">
            More Gen-AI Projects
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {" "}
              Coming Soon!
            </span>
          </h2>

          <p className="text-base-content/70 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm constantly exploring new frontiers in artificial intelligence and
            generative AI technologies. Stay tuned for more innovative AI-powered
            projects and detailed technical breakdowns of cutting-edge implementations!
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-4xl animate-bounce">🚧</div>
            <div className="text-4xl animate-pulse">⚡</div>
            <div className="text-4xl animate-bounce delay-100">🔥</div>
          </div>

          <p className="text-base-content/50 text-sm">
            Follow my journey and projects for updates • Built with ❤️ by Shivam
          </p>

         
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </motion.section>

     
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

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Blogs;
