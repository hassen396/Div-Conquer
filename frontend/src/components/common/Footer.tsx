import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">Div&amp;Conquer</div>
            <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">Design & code</div>
          </div>

          <nav className="flex gap-4">
            <Link to="/" className="text-sm text-gray-700 dark:text-gray-300">Home</Link>
            <Link to="/projects" className="text-sm text-gray-700 dark:text-gray-300">Projects</Link>
            <Link to="/blog" className="text-sm text-gray-700 dark:text-gray-300">Blog</Link>
            <Link to="/contact" className="text-sm text-gray-700 dark:text-gray-300">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm text-gray-700 dark:text-gray-300">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</a>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Div&Conquer. Built by Hassen.</div>
      </div>
    </footer>
  );
};

export default Footer;
