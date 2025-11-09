import React from "react";
import { techCategories } from "../assets/assets";

const TechCard = ({ tech, activeCategory, hoveredTech, setHoveredTech, i }) => {
  return (
    <div
      className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-6 w-full text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-base-600 cursor-pointer group hover:scale-110 hover:-rotate-2"
      onMouseEnter={() => setHoveredTech(`${activeCategory}-${i}`)}
      onMouseLeave={() => setHoveredTech(null)}
      style={{
        animationDelay: `${i * 0.05}s`,
        animation: "slideInUp 0.4s ease-out forwards",
      }}
    >
      <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
        {tech.icon}
      </div>
      <h3 className="font-bold text-base-content mb-2 group-hover:text-primary transition-colors duration-300">
        {tech.name}
      </h3>
      <p className="text-sm text-base-content/60 mb-4">{tech.description}</p>

      {/* Skill Level Progress Bar with faster animation */}
      <div className="w-full bg-base-300 rounded-full h-2 mb-2">
        <div
          className={`bg-gradient-to-r ${techCategories[activeCategory].color} h-2 rounded-full transition-all duration-600 ease-out`}
          style={{
            width:
              hoveredTech === `${activeCategory}-${i}`
                ? `${tech.level}%`
                : "0%",
          }}
        />
      </div>
      <span className="text-xs text-base-content/50">
        {tech.level}% proficiency
      </span>
    </div>
  );
};

export default TechCard;
