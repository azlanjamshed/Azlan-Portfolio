import React from "react";
import { FaGithub } from "react-icons/fa";
const ProjectCard = ({
  image,
  title,
  description,
  type,
  techStack,
  link,
  gitLink,
  status,
}) => {
  // Updated to soft pastel theme to match the clean UI
  const colorMap = {
    React: "bg-blue-50 text-blue-600 border-blue-100",
    "Tailwind CSS": "bg-teal-50 text-teal-600 border-teal-100",
    "Express.js": "bg-gray-50 text-gray-600 border-gray-200",
    "Node.js": "bg-green-50 text-green-600 border-green-100",
    MongoDB: "bg-emerald-50 text-emerald-600 border-emerald-100",
    HTML: "bg-orange-50 text-orange-600 border-orange-100",
    CSS: "bg-indigo-50 text-indigo-600 border-indigo-100",
    JavaScript: "bg-yellow-50 text-yellow-700 border-yellow-200",
    TypeScript: "bg-sky-50 text-sky-600 border-sky-100",
    Firebase: "bg-amber-50 text-amber-600 border-amber-100",
  };

  return (
    <div className="relative flex flex-col lg:flex-row bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-5xl mx-auto my-8 p-6 lg:p-8 gap-8 items-center">
      {/* "In Progress" Badge */}
      {status === "In Progress" && (
        <span className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-amber-50 border border-amber-200 text-amber-600 text-xs px-4 py-1.5 rounded-full font-semibold z-10 shadow-sm flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          In Progress
        </span>
      )}

      {/* Project Image */}
      <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm border border-slate-100 shrink-0 ">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${title} Screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Project Content */}
      <div className=" flex flex-col justify-center">
        {/* Project Type Tag */}
        <div>
          <span className="text-white bg-[#10b196]  py-1 px-2 rounded-2xl   font-bold tracking-[0.15em] text-xs uppercase mb-3">
            {type}
          </span>
        </div>
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed text-base md:text-lg">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {techStack.map((tech, index) => {
            const defaultStyle = "bg-slate-50 text-slate-600 border-slate-200";
            const colorClass = colorMap[tech] || defaultStyle;
            return (
              <span
                key={index}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${colorClass}`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {link !== "#" ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-[#10b196] text-white hover:bg-[#0da087] shadow-sm text-sm"
            >
              View Project
            </a>
          ) : (
            <button className="px-6 py-2.5 rounded-full font-medium bg-slate-100 text-slate-400 cursor-not-allowed text-sm">
              Coming Soon
            </button>
          )}

          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-transparent border border-gray-300 text-slate-700 hover:border-[#087860] hover:text-[#087860] hover:bg-teal-50 text-sm flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-slate-400 font-normal text-sm ml-1">
                Source Code
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// import React from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const ProjectCard = ({
//   image,
//   title,
//   description,
//   type,
//   techStack,
//   link,
//   gitLink,
//   status,
// }) => {
//   const colorMap = {
//     React: "bg-blue-100 text-blue-600",
//     "Tailwind CSS": "bg-teal-100 text-teal-600",
//     "Express.js": "bg-gray-200 text-gray-700",
//     "Node.js": "bg-green-100 text-green-600",
//     MongoDB: "bg-emerald-100 text-emerald-600",
//     HTML: "bg-orange-100 text-orange-600",
//     CSS: "bg-indigo-100 text-indigo-600",
//     JavaScript: "bg-yellow-100 text-yellow-700",
//     TypeScript: "bg-sky-100 text-sky-600",
//     Firebase: "bg-amber-100 text-amber-600",
//   };

//   return (
//     <div className="group relative flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto my-10 p-6 lg:p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
//       {/* STATUS BADGE */}
//       {status === "In Progress" && (
//         <span className="absolute top-6 right-6 bg-amber-100 text-amber-600 text-xs px-4 py-1.5 rounded-full font-semibold shadow flex items-center gap-2">
//           <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
//           In Progress
//         </span>
//       )}

//       {/* IMAGE */}
//       <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden">
//         <div className=" overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-contain  transition-transform duration-700 group-hover:scale-105"
//           />
//         </div>

//         {/* overlay */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
//       </div>

//       {/* CONTENT */}
//       <div className="flex flex-col justify-between flex-1">
//         {/* TYPE */}
//         <span className="inline-block w-fit text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white mb-3">
//           {type}
//         </span>

//         {/* TITLE */}
//         <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition">
//           {title}
//         </h3>

//         {/* DESCRIPTION */}
//         <p className="text-slate-600 text-base leading-relaxed mb-6">
//           {description}
//         </p>

//         {/* TECH STACK */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {techStack.map((tech, index) => (
//             <span
//               key={index}
//               className={`text-xs px-3 py-1 rounded-full font-medium ${
//                 colorMap[tech] || "bg-slate-100 text-slate-600"
//               } hover:scale-105 transition`}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* BUTTONS */}
//         <div className="flex flex-wrap gap-4 mt-auto">
//           {link !== "#" ? (
//             <a
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow hover:shadow-lg hover:scale-105 transition"
//             >
//               <FaExternalLinkAlt />
//               Live Demo
//             </a>
//           ) : (
//             <button className="px-6 py-2.5 rounded-full text-sm bg-slate-100 text-slate-400 cursor-not-allowed">
//               Coming Soon
//             </button>
//           )}

//           {gitLink && (
//             <a
//               href={gitLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border border-slate-300 text-slate-700 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition"
//             >
//               <FaGithub />
//               Code
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
