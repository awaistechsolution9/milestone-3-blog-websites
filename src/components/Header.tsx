import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-800 text-white fixed top-0 left-0 right-0 z-20 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">WeboraBlog</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'Blogs', path: '/blogs' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="hover:text-teal-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/create"
            className="bg-teal-300 text-teal-900 px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-teal-800 transition duration-300"
          >
            Create Blog
          </Link>

          {/* Mobile Menu */}
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-teal-700 hover:bg-teal-600 transition duration-300">
            <span className="block w-6 h-[2px] bg-white mb-1"></span>
            <span className="block w-6 h-[2px] bg-white mb-1"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-teal-700 py-4 px-6 space-y-4 text-center">
        {[
          { name: 'Home', path: '/' },
          { name: 'Blogs', path: '/blogs' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' },
        ].map((link, idx) => (
          <Link
            key={idx}
            href={link.path}
            className="block text-white text-lg font-medium hover:text-teal-300 transition duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
