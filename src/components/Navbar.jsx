import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { appContext } from "../context/ThemeContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {theme, settheme} = useContext(appContext);

  const toggleTheme = (e) => {
    if(e.target.checked){
      settheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      settheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 py-4 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Dropdown height animated container */}
        <div
          className={clsx(
            "transition-all duration-500 ease-in-out rounded-3xl overflow-hidden backdrop-blur-2xl bg-base-200/20 border border-white/20 dark:border-white/20 shadow-xl",
            mobileMenuOpen ? "max-h-[500px]" : "max-h-[80px]"
          )}
        >
          <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm min-h-[48px]">
            {/* Top row - logo and toggle */}
            <div className="w-full flex items-center justify-between h-12">
              <Link to="/" className="flex items-center gap-2">
                <h1 className="text-3xl font-bold leading-none text-base-content drop-shadow-sm">SHIVAM</h1>
              </Link>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center gap-6 ml-6">
                {["Home", "About", "Projects","Blog", "Contact"].map((text) => (
                  <Link
                    key={text}
                    to={text=="Home"?`/`:`/${text.toLowerCase()}`}
                    className="relative overflow-hidden h-6 group flex items-center text-base-content/80 hover:text-base-content transition-colors duration-300 drop-shadow-sm"
                  >
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">
                      {text}
                    </span>
                    <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                      {text}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Desktop theme toggle */}
              <div className="hidden md:flex items-center gap-4 ml-6">
                <label className="swap swap-rotate transition-transform duration-500 ease-out relative w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/20 dark:hover:bg-white/10 rounded-full backdrop-blur-sm">
                  <input
                    onChange={toggleTheme}
                    type="checkbox"
                    className="theme-controller hidden"
                    checked={theme === "dark"}
                  />
                  {/* sun icon */}
                  <svg
                    className="swap-off h-6 w-6 fill-current transition-all duration-500 ease-out absolute text-base-content/80 drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  {/* moon icon */}
                  <svg
                    className="swap-on h-6 w-6 fill-current transition-all duration-500 ease-out absolute text-base-content/80 drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>

                <a
                  href="/Resume.pdf"
                  download
                  className="border border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center text-base-content/80 hover:text-base-content backdrop-blur-sm drop-shadow-sm"
                >
                  Download Resume
                </a>
              </div>

              {/* Mobile theme toggle and menu toggle */}
              <div className="flex items-center gap-3 md:hidden">
                {/* Theme toggle - visible on mobile */}
                <label className="swap swap-rotate transition-transform duration-500 ease-out relative w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/20 dark:hover:bg-white/10 rounded-full backdrop-blur-sm">
                  <input
                    onChange={toggleTheme}
                    type="checkbox"
                    className="theme-controller hidden"
                    checked={theme === "dark"}
                  />
                  {/* sun icon */}
                  <svg
                    className="swap-off h-6 w-6 fill-current transition-all duration-500 ease-out absolute text-base-content/80 drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  {/* moon icon */}
                  <svg
                    className="swap-on h-6 w-6 fill-current transition-all duration-500 ease-out absolute text-base-content/80 drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>

                {/* Mobile menu toggle */}
                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="text-base-content/70 transition-all duration-300 hover:scale-110 hover:text-base-content flex items-center hover:bg-white/20 dark:hover:bg-white/10 rounded-full p-1 drop-shadow-sm backdrop-blur-sm"
                >
                  <svg
                    className={clsx(
                      "w-6 h-6 transition-transform duration-500 ease-out",
                      mobileMenuOpen ? "rotate-90" : "rotate-0"
                    )}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile dropdown (visible when menu is open) */}
            <div
              className={clsx(
                "w-full md:hidden mt-4 overflow-hidden transition-all duration-500 ease-in-out",
                mobileMenuOpen
                  ? "flex flex-col gap-4 opacity-100 max-h-96 translate-y-0"
                  : "flex flex-col gap-4 opacity-0 max-h-0 -translate-y-2"
              )}
            >
              <div className="flex flex-col items-start gap-4 pb-2 px-2 py-4 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/10">
                {["Home", "About", "Projects","Blog", "Contact"].map((text, index) => (
                  <Link
                    key={text}
                    to={text=="Home"?`/`:`/${text.toLowerCase()}`}
                    className={clsx(
                      "hover:text-primary transition-all duration-300 ease-out text-base-content/80 px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 drop-shadow-sm backdrop-blur-sm",
                      mobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    )}
                    style={{
                      transitionDelay: mobileMenuOpen ? `${index * 80}ms` : "0ms",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {text}
                  </Link>
                ))}

                <a
                  href="/Resume.pdf"
                  download
                  className={clsx(
                    "border border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out text-base-content/80 hover:text-base-content backdrop-blur-sm drop-shadow-sm",
                    mobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen ? "320ms" : "0ms",
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
