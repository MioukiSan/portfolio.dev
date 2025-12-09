import React from "react";

const items = [
  { id: "resume", label: "Resume" },
  { id: "exp", label: "Experience" },
  { id: "edu", label: "Education" },
  { id: "skill", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "cert", label: "Certification" },
  { id: "gigs", label: "Gigs" },
  { id: "contact", label: "Contact" },
];

const Navigation = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="lg:mt-5 hidden lg:flex lg:flex-col md:hidden">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection?.(item.id)}
          className="flex flex-row items-start gap-1 px-1 text-left transition-all"
        >
          <span
            className={`block light:bg-gray-500 dark:bg-white self-center transition-all ${
              activeSection === item.id
                ? "w-15 h-2 bg-black"
                : "h-1 bg-black w-10"
            }`}
          ></span>

          <span
            className={`transition-all ${
              activeSection === item.id
                ? "font-bold italic light:text-black dark:text-white text-xl"
                : "font-medium"
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
