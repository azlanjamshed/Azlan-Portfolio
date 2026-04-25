import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialCard = () => {
  // Array of your social links
  const socials = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/azlanjamshed?tab=overview&from=2026-04-01&to=2026-04-25",
      // Code Brackets Icon < >
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/azlanjamshed",
      // Chain Link Icon
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "X / Twitter",
      url: "https://x.com/Azlan_Jamshed",
      // At Symbol Icon @
      icon: <FaXTwitter className="w-6 h-6" />,
    },
    // {
    //   id: 4,
    //   name: "Blog / Twitter",
    //   url: "#",
    //   // Pen/Scribble Icon
    //   icon: (
    //     <svg
    //       className="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    //       <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    //       <path d="M2 2l7.586 7.586"></path>
    //       <circle cx="11" cy="11" r="2"></circle>
    //     </svg>
    //   ),
    // },
  ];

  return (
    <div className=" rounded-[2.5rem] p-1 md:p-6 shadow-sm border border-slate-100 max-w-sm w-full mx-auto group bg-[#aff6ea] transition-colors duration-300">
      <h3 className=" hidden md:flex text-2xl font-bold text-slate-900    justify-center  bg-[#10b196] items-center rounded-full w-10 h-10 mx-auto ">
        <IoShareSocialSharp />
      </h3>

      <div className="grid  gap-4 md:hidden md:group-hover:block md:mt-5 ">
        {socials.map((social) => (
          <div
            key={social.id}
            className="relative flex justify-center group/item"
          >
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className=" flex items-center justify-center bg-[#f8f9fa] rounded-full text-slate-700 hover:text-[#10b196] hover:bg-[#eff6f3] transition-all duration-300 shadow-sm my-1 text-sm p-1 md:p-2 "
            >
              {social.icon}
            </a>
            {/* Tooltip */}
            <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 scale-0 group-hover/item:scale-100 transition-all duration-300 bg-slate-900 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
              {social.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCard;
