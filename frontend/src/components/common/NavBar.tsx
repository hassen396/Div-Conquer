import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, SunMoon, Home } from "lucide-react";
import profilePic from "@/assets/profile-pic.avif";

const links = [
  //   { title: "Home", to: "/" },
  { title: "Projects", to: "/projects" },
  { title: "Blog", to: "/blog" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore localStorage errors */
    }
  }, [isDark]);

  useEffect(() => {
    // close mobile menu when navigating
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/28 backdrop-blur-sm dark:bg-gray-900/28 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-900 dark:text-white">
              Div&amp;Conquer
            </Link>
          </div>

          {/* centered pill menu (desktop) */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="relative">
              <div className="rounded-full p-px bg-linear-to-r from-amber-400 via-pink-400 to-indigo-400">
                <div className="flex items-center rounded-full px-4 py-1 gap-6 bg-white/5 dark:bg-gray-900/80">
                  <Link
                    to="/"
                    className="flex items-center rounded-full p-1 hover:bg-white/10 dark:hover:bg-white/5">
                    <Home className="h-4 w-4 text-white/80" />
                  </Link>

                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`text-sm font-medium transition-colors px-2 py-1 rounded-md ${
                        location.pathname === l.to
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}>
                      {l.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* actions: resume + theme + mobile button */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center rounded-full bg-linear-to-r from-indigo-500 to-pink-400 px-4 py-1.5 text-sm font-medium text-white shadow-sm">
              Hire me
            </a>

            <button
              aria-label="Toggle theme"
              onClick={() => setIsDark((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
              <SunMoon className="h-5 w-5" />
            </button>

            {/* profile pic */}
            <div className="hidden md:inline-flex items-center">
              <div className="rounded-full p-0.5 bg-linear-to-r from-indigo-400 to-pink-400">
                <img
                  src={profilePic}
                  alt="profile"
                  className="h-9 w-9 rounded-full object-cover"
                />
              </div>
            </div>

            {/* mobile menu button */}
            <button
              className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu panel */}
      <div
        className={`md:hidden ${
          open ? "block" : "hidden"
        } border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/95`}>
        <div className="px-4 pt-4 pb-6">
          <nav className="flex flex-col space-y-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  location.pathname === l.to
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}>
                {l.title}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block rounded-md border border-indigo-600 px-3 py-2 text-center text-sm font-medium text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/40">
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
