import React from "react";
import Heading from "../Components/Heading";

const Experience = () => {
  // 💼 Array to store your professional journey.
  // Add new objects to the top of this array to show them first on the timeline!
  const experiences = [
    {
      id: 1,
      date: "September-2025 — January-2026",
      title: "Frontend Developer ",
      company: "Gen2De (General Developer and Designer)",
      achievements: [
        "Built responsive user interfaces using React and Tailwind CSS.",
        "Worked on client-based projects and implemented UI based on requirements.",
        "Integrated APIs and handled basic state management.",
        "Improved UI performance and ensured cross-device compatibility.",
      ],
    },
    // Example of how to add a second experience:
    {
      id: 2,
      date: "2026",
      title: "Frontend Developer",
      company: "Elix",
      link: "https://www.elix.it.com",
      achievements: [
        "Developed the frontend of the company website using React and Tailwind CSS.",
        "Built responsive UI for core pages including the About section.",
        "Integrated backend APIs to connect frontend with server data.",
        "Maintained consistent design and smooth user experience across devices.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        {/* <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Professional Journey
          </h2>
        </div> */}
        <Heading title="Professional Journey" />

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
          {/* The vertical line is created using a left border on this main div. 
            We map over the array to generate the content inside. 
          */}
          <div className="relative border-l-2 border-[#10b196]/40">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                // pl-8 gives space between the line and the text. pb-16 gives space between jobs.
                className="relative pl-8 md:pl-12 pb-16 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[#087860] ring-4 ring-slate-50"></div>

                {/* Date */}
                <p className="text-[#087860] font-bold tracking-[0.15em] text-xs sm:text-sm uppercase mb-2">
                  {exp.date}
                </p>

                {/* Job Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                  {exp.title}
                </h3>

                {/* Company Name */}
                {/* <p className="text-lg text-slate-600 mb-6 font-medium">
                  {exp.company}
                </p> */}
                <p className="text-lg text-slate-600 mb-6 font-medium">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#10b196] transition-colors underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                {/* Achievements List */}
                <ul className="list-disc list-outside ml-4 space-y-3 text-slate-600 text-base md:text-lg leading-relaxed marker:text-slate-400">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="pl-2">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
