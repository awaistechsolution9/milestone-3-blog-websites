import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bgSlideShow">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 opacity-90"></div>
      
      {/* Content */}
      <div className="flex items-center justify-center h-full relative z-10 text-center px-6">
        <div className="text-white space-y-8">
          
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Discover Your Next Favorite Blog
          </h1>
          
          <p className="text-lg font-medium max-w-2xl mx-auto mb-6">
            Dive into a world of creative insights, engaging stories, and helpful tips to fuel your passion for blogging.
          </p>
          
          <div className="mt-4">
            <a
              href="/blogs"
              className="bg-teal-300 text-teal-900 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-white hover:text-teal-800 transition duration-300"
            >
              Explore Our Blogs
            </a>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
