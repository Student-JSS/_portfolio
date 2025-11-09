import React, { useContext } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaUser,
  FaCode,
  FaRobot,
  FaBlog,
  FaLink,
  FaMedkit,
  FaBrain,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const ProjectsCard = ({project,index}) => {

      const getProjectIcon = (title) => {
    switch (title.toLowerCase()) {
      case "fit-ai":
        return <FaMedkit className="text-2xl" />;
      case "bit-blog":
        return <FaBlog className="text-2xl" />;
      case "url shortener":
        return <FaLink className="text-2xl" />;
      case "ai code reviewer":
        return <FaRobot className="text-2xl" />;
      default:
        return <FaCode className="text-2xl" />;
    }
  };
   

  return (
    <div>
      <div
        key={project.id}
        className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-base-600 group cursor-pointer"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        style={{
          animationDelay: `${index * 0.1}s`,
          animation: "slideInUp 0.6s ease-out forwards",
        }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
              {getProjectIcon(project.title)}
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              {project.type}
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300 border border-green-500/30">
              {project.status}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-base-content/60">
              {project.teamSize === "Solo" ? <FaUser /> : <FaUsers />}
              <span className="text-sm">{project.teamSize}</span>
            </div>
          </div>

          <p className="text-base-content/70 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-base-content/80 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-base-300 dark:bg-base-600 rounded-full px-3 py-1 text-sm"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-base-content/80 mb-3">
              Key Features
            </h4>
            <ul className="text-sm text-base-content/70 space-y-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              to={project.github}
              className="flex items-center gap-2 bg-base-300 dark:bg-base-600 hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <FaGithub />
              GitHub
            </Link>
            <Link
              to={project.live}
              className="flex items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt />
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
