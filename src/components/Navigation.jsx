import React from "react";

const items = [
  "Resume",
  "Experience",
  "Education",
  "Skills",
  "Projects",
  "Certificates",
  "Gigs",
  "Contact",
];

const Navigation = () => {
  return (
    <div className="lg:mt-5 hidden lg:block md:hidden lg:ml-10">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span className="h-[1px] w-24 bg-gray-400"></span>
          <span className={index === 0 ? "italic text-lg" : "text-secondary"}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
