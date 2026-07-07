// import React from "react";
// import Heading from "../Components/Heading";

// const Skills = () => {
//   // Skill data organized by category
//   const programmingLanguages = ["JavaScript", "TypeScript", "Python"];
//   const frontendSkills = ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"];
//   const backendSkills = [
//     "Node JS",
//     "Express JS",
//     "RESTful API",
//     "JWT Authentication",
//     "JEST",
//   ];
//   const databaseSkills = ["MongoDB", "PostgreSQL", "SQL"];

//   const devTools = ["Git", "GitHub", "Postman", "VS Code"];

//   return (
//     <section id="skills" className="py-20 md:py-32 bg-white">
//       <div className="  px-6">
//         {/* Header */}
//         <Heading
//           title="Technical Arsenal"
//           description="The tools and technologies I use to bring ideas to life."
//         />

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//           {/* Language Card (Spans 6 columns on desktop) */}
//           <div className="md:col-span-6 bg-[#e5f6ef] rounded-3xl p-8 border border-[#e1eee6]">
//             <h3 className="text-xl font-bold text-[#46765e] mb-6">
//               Programming Languages
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {programmingLanguages.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Frontend Card (Spans 6 columns on desktop) */}
//           <div className="md:col-span-6 bg-[#ccf1e1] rounded-3xl p-8 border border-[#e1eee6]">
//             <h3 className="text-xl font-bold text-[#4a725e] mb-6">
//               Frontend Development
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {frontendSkills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Backend Card (Spans 6 columns on desktop) */}
//           <div className="md:col-span-6 bg-[#fdf5f0] rounded-3xl p-8 border border-[#fae8df]">
//             <h3 className="text-xl font-bold text-[#8c593b] mb-6">
//               Backend & API
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {backendSkills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Database Card (Spans 4 columns on desktop to match the smaller width in the image) */}
//           <div className="md:col-span-4 bg-[#f8f9fa] rounded-3xl p-8 border border-slate-100">
//             <h3 className="text-xl font-bold text-slate-800 mb-6">Database</h3>
//             <div className="flex flex-wrap gap-3">
//               {databaseSkills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Dev Tools Card (Spans 8 columns on desktop to match the wider width in the image) */}
//           <div className="md:col-span-8 bg-[#f8f9fa] rounded-3xl p-8 border border-slate-100">
//             <h3 className="text-xl font-bold text-slate-800 mb-6">
//               Development Tools
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {devTools.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-white uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-full font-semibold text-slate-600 shadow-sm border border-slate-100"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import Heading from "../Components/Heading";

const SkillCard = ({
  title,
  skills,
  className,
  headingColor,
  spanClass = "",
}) => {
  return (
    <div
      className={`${spanClass} ${className} rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <h3 className={`text-xl font-bold mb-6 ${headingColor}`}>{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-100 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = ["JavaScript", "TypeScript", "Python"];

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React.js",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Jest",
  ];

  const databaseSkills = ["MongoDB", "PostgreSQL", "SQL"];

  const devTools = ["Git", "GitHub", "Postman", "VS Code"];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Heading
          title="Technical Arsenal"
          description="The tools and technologies I use to build modern, scalable, and high-performance web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          <SkillCard
            title="Programming Languages"
            skills={programmingLanguages}
            spanClass="md:col-span-6"
            className="bg-[#e5f6ef] border-[#d8ebe2]"
            headingColor="text-[#46765e]"
          />

          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            spanClass="md:col-span-6"
            className="bg-[#d8f3e8] border-[#c8eadb]"
            headingColor="text-[#3f6f59]"
          />

          <SkillCard
            title="Backend Development"
            skills={backendSkills}
            spanClass="md:col-span-6"
            className="bg-[#fdf5f0] border-[#f7e2d5]"
            headingColor="text-[#8c593b]"
          />

          <SkillCard
            title="Databases"
            skills={databaseSkills}
            spanClass="md:col-span-4"
            className="bg-[#f3efff] border-[#e2d9ff]"
            headingColor="text-[#6246a8]"
          />

          <SkillCard
            title="Development Tools"
            skills={devTools}
            spanClass="md:col-span-8"
            className="bg-[#eef6ff] border-[#d6e9ff]"
            headingColor="text-[#2563eb]"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
