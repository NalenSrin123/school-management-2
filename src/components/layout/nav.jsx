import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Video Guidline", path: "/vdoguide" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-md">
            <svg
              width="20"
              height="20" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-slate-800 text-lg tracking-tight">
              EduManage
            </span>
          </div>
        </Link>

        {/* NAV LINKS - Desktop */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap no-underline
                  ${
                    isActive(link.path)
                      ? "text-slate-900 bg-slate-50 font-semibold"
                      : "text-gray-500 hover:text-slate-800 hover:bg-gray-50"
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-amber-400 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE - Desktop */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Login Button */}
          <Link
            to="/form/login"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors no-underline"
          >
            Login
          </Link>

          {/* Enroll Now */}
          <Link
            to="#"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-3xl hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md no-underline"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            Enroll Now
          </Link>
        </div>

        {/* HAMBURGER - Mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium px-3 py-3 rounded-lg border-b border-gray-50 transition-colors no-underline
                ${
                  isActive(link.path)
                    ? "text-slate-900 font-semibold bg-slate-50"
                    : "text-gray-500 hover:text-slate-800"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Login Button */}
          <Link
            to="/form/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-3 text-gray-600 hover:text-blue-600 font-medium text-sm border-b border-gray-50 no-underline"
          >
            Login
          </Link>
          
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
            <button className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </button>
            <Link
              to="#"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-all no-underline"
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
