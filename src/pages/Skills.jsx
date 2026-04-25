import React from "react";
import Heading from "../Components/Heading";

const Skills = () => {
  // Skill data organized by category
  const frontendSkills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"];
  const backendSkills = [
    "Node JS",
    "Express JS",
    "RESTful API",
    "JWT Authentication",
    "JEST",
  ];
  const databaseSkills = ["MongoDB"];
  const devTools = ["Postman", "Git", "GitHub", "VS Code"];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="  px-6">
        {/* Header */}
        <Heading
          title="Technical Arsenal"
          description="The tools and technologies I use to bring ideas to life."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Frontend Card (Spans 6 columns on desktop) */}
          <div className="md:col-span-6 bg-[#eff6f3] rounded-3xl p-8 border border-[#e1eee6]">
            <h3 className="text-xl font-bold text-[#4a725e] mb-6">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Card (Spans 6 columns on desktop) */}
          <div className="md:col-span-6 bg-[#fdf5f0] rounded-3xl p-8 border border-[#fae8df]">
            <h3 className="text-xl font-bold text-[#8c593b] mb-6">
              Backend & API
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database Card (Spans 4 columns on desktop to match the smaller width in the image) */}
          <div className="md:col-span-4 bg-[#f8f9fa] rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Database</h3>
            <div className="flex flex-wrap gap-3">
              {databaseSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#e9ecef] px-4 py-2 rounded-full text-sm font-medium text-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Dev Tools Card (Spans 8 columns on desktop to match the wider width in the image) */}
          <div className="md:col-span-8 bg-[#f8f9fa] rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {devTools.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-full font-semibold text-slate-600 shadow-sm border border-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
