import React from "react";
import { Link } from "react-router-dom";

const ContactInfoCard = ({ info, index }) => {
  return (
    <div>
      <Link
        key={index}
        to={info.link}
        className="flex items-center gap-4 p-4 rounded-xl hover:bg-base-300 dark:hover:bg-base-600 transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setHoveredElement(`contact-${index}`)}
        onMouseLeave={() => setHoveredElement(null)}
      >
        <div className={`text-2xl ${info.color}`}>{info.icon}</div>
        <div>
          <h3 className="font-semibold text-base-content">{info.title}</h3>
          <p className="text-base-content/70">{info.value}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContactInfoCard;
