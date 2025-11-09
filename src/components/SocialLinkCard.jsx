import React from "react";
import { Link } from "react-router-dom";

const SocialLinkCard = ({ social, index }) => {
  return (
    <div>
      <Link
        key={index}
        to={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 p-4 rounded-xl bg-base-300 dark:bg-base-600 hover:scale-105 transition-all duration-300 ${social.color}`}
        onMouseEnter={() => setHoveredElement(`social-${index}`)}
        onMouseLeave={() => setHoveredElement(null)}
      >
        <div className="text-xl">{social.icon}</div>
        <span className="font-medium">{social.name}</span>
      </Link>
    </div>
  );
};

export default SocialLinkCard;
