// import React from "react";

// const Heading = ({ title, description }) => {
//   return (
//     <>
//       <div>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-12 tracking-tight underline decoration-[#10b196] underline-offset-10">
//           {title}
//         </h2>
//         <p>{description}</p>
//       </div>
//     </>
//   );
// };

// export default Heading;

import React from "react";

const Heading = ({ title, description, className = "" }) => {
  return (
    <div
      className={`text-center mb-12 md:mb-16 flex flex-col items-center ${className}`}
    >
      {/* Title with responsive sizing and custom underline */}
      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight underline decoration-[#10b196] decoration-4  underline-offset-8">
        {title}
      </h2>

      {/* Description conditionally renders only if provided */}
      {description && (
        <p className="mt-5 md:mt-6 text-base md:text-lg text-slate-600 max-w-2xl text-center leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
