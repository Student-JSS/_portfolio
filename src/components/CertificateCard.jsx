import React from "react";

const CertificateCard = ({cert}) => {
  return (
    <div>
      <div
        key={cert.id}
        className={`group bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-6 border border-base-300 dark:border-base-600 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:${cert.hoverRotation} h-[370px] flex flex-col`}
      >
        <div className="flex flex-col items-center text-center space-y-4 flex-grow">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}
          >
            {cert.icon}
          </div>
          <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
            {cert.title}
          </h3>
          <p className="text-base-content/70 text-sm leading-relaxed flex-grow">
            <strong className="text-primary/102">{cert.organization}</strong>{" "}
            {cert.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-full px-6 py-2 text-sm font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              📄 View Certificate
            </a>
            <a
              href={cert.pdfUrl}
              download={cert.downloadName}
              className="btn btn-outline rounded-full px-6 py-2 text-sm font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              💾 Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
