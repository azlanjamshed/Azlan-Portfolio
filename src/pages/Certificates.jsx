import React, { useState, useEffect, useCallback } from "react";
import Heading from "../Components/Heading";

const Certificates = () => {
  // 🎓 Array storing certificate details.
  // Add a 4th or 5th certificate here to see the slider and buttons appear!
  const certificates = [
    {
      id: 1,
      title: "React – Complete Developer Course with Hands-On Projects",
      issuer: "Udemy",
      date: "September 2025",
      link: "/certificates/React.pdf",
    },
    {
      id: 2,
      title: "Node.js – All You Need to Know with Practical Project",
      issuer: "Udemy",
      date: "December 2025",
      link: "/certificates/NodeJS.pdf",
    },
    {
      id: 3,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      date: "December 2025",

      link: "/certificates/Data-Analytics.pdf",
    },
    // Uncomment the one below to trigger the Carousel/Marquee!
    // {
    //   id: 4,
    //   title: "JavaScript Data Structures",
    //   issuer: "HackerRank",
    //   date: "Issued Dec 2022",
    //   link: "#",
    // }
    // {
    //   id: 4,
    //   title: "Advanced React Patterns",
    //   issuer: "Meta / Coursera",
    //   date: "Issued Nov 2023",
    //   link: "#",
    // },
  ];

  const hasMany = certificates.length > 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1,
    );
  }, [certificates.length]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1,
    );
  };

  // Auto-play effect (only runs if there are more than 3 certificates)
  //   useEffect(() => {
  //     let interval;
  //     if (hasMany) {
  //       // Set to 2500ms (2.5 seconds) for better readability.
  //       // Change to 1000 for exactly 1 second.
  //       interval = setInterval(nextSlide, 2500);
  //     }
  //     return () => clearInterval(interval);
  //   }, [hasMany, nextSlide]);

  return (
    <section id="certificates" className="py-20 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Header & Navigation Arrows */}
        <Heading title="Accreditation" />
        <div className="flex justify-between items-end mb-10 md:mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Accreditation
          </h2> */}

          {/* Render buttons ONLY if there are more than 3 certificates */}
          {/* {hasMany && (
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#10b196] hover:text-white hover:border-[#10b196] transition-colors shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#10b196] hover:text-white hover:border-[#10b196] transition-colors shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )} */}
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              hasMany
                ? "gap-6"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }`}
            style={{
              // Only apply sliding translation if we are in carousel mode
              transform: hasMany
                ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`
                : "none",
            }}
          >
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className={`${
                  hasMany
                    ? "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
                    : ""
                } bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col`}
              >
                {/* SVG Icon matching the image */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-[#087860]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 5.09L19.5 4.5L20.09 8.91L23.18 12L20.09 15.09L19.5 19.5L15.09 18.91L12 22L8.91 18.91L4.5 19.5L5.09 15.09L2 12L5.09 8.91L4.5 4.5L8.91 5.09L12 2ZM10.5 15.5L17 9L15.5 7.5L10.5 12.5L8 10L6.5 11.5L10.5 15.5Z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-slate-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-slate-400 font-medium mb-8">
                  {cert.date}
                </p>

                {/* Link anchored to bottom */}
                <div className="mt-auto">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#087860] font-semibold hover:text-[#10b196] transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {hasMany && (
          <div className="flex justify-center gap-3 mt-5">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#10b196] hover:text-white hover:border-[#10b196] transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#10b196] hover:text-white hover:border-[#10b196] transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
