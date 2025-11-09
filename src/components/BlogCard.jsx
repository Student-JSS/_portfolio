import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ post, index }) => {
  const [hoveredPost, setHoveredPost] = useState(null);
  return (
    <div>
      <motion.article
        key={post.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`relative mb-20 ${
          index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
        }`}
        onMouseEnter={() => setHoveredPost(post.id)}
        onMouseLeave={() => setHoveredPost(null)}
      >
        <div className="absolute bottom-10 left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-base-100 z-20 shadow-lg" />

        <div
          className={`relative z-10 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-base-600 cursor-pointer group hover:scale-[1.02] ${
            index % 2 === 0 ? "md:mr-12" : "md:ml-12"
          } ml-12 md:ml-0`}
        >
          <div className="p-8 md:p-10">
            <header className="flex items-center gap-4 mb-6">
              <div className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {post.image}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
            </header>

            <p className="text-base-content/80 text-lg mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-base-content mb-3">
                Project Overview
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                {post.fullDescription}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-base-content mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-base-content mb-3 flex items-center gap-2">
                  <span className="text-red-500">⚡</span>
                  Key Challenges
                </h3>
                <ul className="space-y-2">
                  {post.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-base-content/70"
                    >
                      <span className="text-red-500 mt-1 text-sm">●</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-base-content mb-3 flex items-center gap-2">
                  <span className="text-green-500">✨</span>
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {post.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-base-content/70"
                    >
                      <span className="text-green-500 mt-1 text-sm">●</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link to="/projects">
              <div className="flex justify-between items-center">
                <button className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span>View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogCard;
