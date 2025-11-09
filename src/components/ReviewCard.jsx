import React from 'react'


const ReviewCard = ({ name, role, avatar, rating, review }) => {
  return (
    <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-6 border border-base-300 dark:border-base-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group min-h-[200px]">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
          {avatar}
        </div>
        <div>
          <h3 className="font-bold text-base-content group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-base-content/70">{role}</p>
        </div>
      </div>
      
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">⭐</span>
        ))}
      </div>
      
      <p className="text-base-content/80 italic leading-relaxed">
        "{review}"
      </p>
    </div>
  );
};


export default ReviewCard
