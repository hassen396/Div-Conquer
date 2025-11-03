import React from "react";
import { Link } from "react-router-dom";
import profilePic from "@/assets/profile-pic.avif";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-6 bg-gray-100/60 text-gray-900 dark:bg-white/5 dark:text-white/80">
              Hello — I build elegant interfaces
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              I'm Hassen — I design & build web applications.
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-white/80 max-w-2xl">
              I build fast, accessible, and beautiful experiences on the web. I love
              designing clear interfaces and engineering resilient frontend stacks.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full bg-linear-to-r from-indigo-500 to-pink-400 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                See projects
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 dark:border-white/20 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative flex items-center">
              <div className="rounded-full p-0.5 bg-linear-to-r from-indigo-400 to-pink-400">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-44 w-44 rounded-full object-cover bg-gray-50 dark:bg-gray-800"
                />
              </div>

              <div className="absolute -bottom-4 right-0 flex -translate-y-1/2 transform">
                <div className="rounded-full bg-linear-to-r from-amber-400 via-pink-400 to-indigo-400 p-0.5">
                  <div className="rounded-full bg-gray-100/60 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-white">Contact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
