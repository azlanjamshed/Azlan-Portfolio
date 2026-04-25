import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Add your actual social profile URLs here
  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Dribbble", url: "#" },
  ];

  return (
    <footer className="bg-white py-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-between items-center gap-6">
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-[#64748b] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            © {currentYear} Azlan Jamshed.
          </p>
        </div>

        {/* Right Side: Social Links */}
        {/* <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8492a6] hover:text-[#087860] text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
