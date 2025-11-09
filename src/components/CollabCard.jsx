import React from "react";

const CollabCard = ({ type, index }) => {
  return (
    <div>
      <div
        key={index}
        className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-8 border border-base-300 dark:border-base-600 text-center hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setHoveredElement(`collab-${index}`)}
        onMouseLeave={() => setHoveredElement(null)}
        style={{
          animationDelay: `${index * 0.1}s`,
          animation: "slideInUp 0.6s ease-out forwards",
        }}
      >
        <div className="text-4xl mb-4 text-primary">{type.icon}</div>
        <h3 className="text-xl font-bold mb-3 text-base-content">
          {type.title}
        </h3>
        <p className="text-base-content/70">{type.description}</p>
      </div>
    </div>
  );
};

export default CollabCard;
