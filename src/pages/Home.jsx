import React from "react";
import photo from "../assets/photo.avif";
import { Link } from "react-scroll";
import cv from "/Azlan_Jamshed.pdf";
const Home = () => {
  return (
    <section
      id="home"
      className="relative py-14 sm:py-22 lg:py-30 bg-white overflow-hidden"
    >
      {/* Background Gradient - Adjusts span and intensity based on screen size */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 lg:w-1/2 h-full bg-gradient-to-bl from-cyan-100/40 via-teal-50/20 to-transparent pointer-events-none opacity-70 md:opacity-100"></div>

      <div className="relative z-10 w-full max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 max-w-3xl">
          {/* Tag */}

          <span className="text-white bg-[#10b196]  font-bold tracking-[0.15em] text-xs sm:text-sm uppercase mb-4 sm:mb-5 py-1 px-2 rounded-2xl">
            MERN Developer
          </span>

          {/* Heading - Scales smoothly from mobile to desktop */}
          <h1 className="text-[3.25rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-slate-900 tracking-tight mb-5 sm:mb-8">
            Hi, I'm <span className="text-[#087860]">Azlan</span> <br />
            <span className="text-[#087860]">Jamshed</span>
          </h1>

          {/* Description - Adjusts width and font size to prevent awkward orphans */}
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-[100%] sm:max-w-2xl leading-relaxed mb-8 sm:mb-10">
            {/* I build clean, fast, and user-friendly web applications with a focus
            on editorial clarity and technical precision. */}
            I develop full-stack web applications using the MERN stack (MongoDB,
            Express, React, Node.js), with a strong focus on performance,
            maintainability, and intuitive user interfaces.
          </p>

          {/* Buttons - Stack on tiny screens, sit side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-max">
            <Link
              to="projects"
              smooth
              duration={300}
              offset={-70}
              spy
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 bg-[#10b196] text-white hover:bg-[#0da087] shadow-sm text-center cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth
              duration={300}
              offset={-70}
              spy
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 bg-transparent border border-gray-300 text-[#087860] hover:border-[#087860] hover:bg-teal-50 text-center cursor-pointer"
            >
              Contact Me
            </Link>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all blockduration-300 bg-[#10b196] text-white hover:bg-[#0da087] shadow-sm text-center cursor-pointer"
            >
              CV
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Optional: Subtle background offset shadow/decoration for the image */}
            <div className="absolute inset-0 bg-teal-100/60 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>

            <img
              src={photo}
              loading="eager"
              fetchPriority="high"
              alt="Azlan Jamshed"
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[400px] rounded-3xl shadow-xl object-cover object-top aspect-square md:aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
