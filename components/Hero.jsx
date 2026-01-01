import React from 'react';

const Hero = ({ creatorName, whatItDoes }) => {
  return (
    <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {creatorName || "Your Awesome Project"}
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          {whatItDoes || "Revolutionizing the way you launch your ideas."}
        </p>
      </div>
    </section>
  );
};

export default Hero;
