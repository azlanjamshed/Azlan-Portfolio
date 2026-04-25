import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoDownloadOutline } from "react-icons/io5";
import cv from "/Azlan_Jamshed.pdf";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Array to manage links easily and dynamically render them
  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "certificates", label: "Certificates" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="">
      {/* <nav className="relative flex justify-between items-center px-6 py-4 md:px-8 md:py-5 bg-white border border-blue-100 rounded-xl shadow-sm"> */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-8 md:py-5 bg-white/70 backdrop-blur-md border-b border-blue-100 shadow-sm">
        {/* Logo */}
        <div>
          <Link
            to="home"
            smooth
            duration={300}
            offset={-70}
            // className="text-2xl md:text-3xl font-bold text-slate-800"
            className="flex items-center gap-3 cursor-pointer group font-black text-xl"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-teal-500 to-teal-500 text-white font-bold text-sm group-hover:scale-110 transition">
              AJ
            </span>

            {/* Full Name */}
            <span className="text-black bg-clip-text  font-semibold tracking-wide">
              Azlan Jamshed
            </span>
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on screens smaller than 'lg' / 1024px) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-600">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={300}
                offset={-70}
                spy
                activeClass="text-teal-600 border-b-2 border-teal-600 "
                className="cursor-pointer hover:text-teal-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 hover:scale-105 transition"
        >
          <IoDownloadOutline className="w-5 h-5" />
          CV
        </a>

        {/* Mobile Hamburger Button (Hidden on screens larger than 'lg') */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-600 hover:text-teal-600 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {/* SVG changes from Hamburger to 'X' depending on isOpen state */}
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* <a
          href=""
          download
          className="inline-flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition w-fit"
          onClick={closeMenu}
        >
          <IoDownloadOutline className="w-5 h-5" />
          CV
        </a> */}
        {/* Mobile Navigation Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white border border-blue-100 rounded-xl shadow-lg lg:hidden z-50 overflow-hidden">
            <ul className="flex flex-col font-medium text-slate-600">
              {navItems.map((item) => (
                <li
                  key={item.to}
                  className="border-b border-gray-50 last:border-none"
                >
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    className={`block px-6 py-4 transition-colors ${
                      item.active
                        ? "bg-teal-50 text-teal-600 font-bold"
                        : "hover:bg-slate-50 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
