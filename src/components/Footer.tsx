import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-8 px-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  Blog Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  Creator Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  Content Creators Network
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  WeboraBlog API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition duration-300">
                  Developer Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-orange-400 transition duration-300">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-orange-400 transition duration-300">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-orange-400 transition duration-300">
              Cookie Policy
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <select className="bg-teal-700 text-white px-4 py-2 rounded-lg focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
