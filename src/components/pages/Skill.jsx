import React from "react";
import Affinity from "@/assets/affinity.png";
import Github from "@/assets/github.png";
import HTML from "@/assets/html.png";
import Laravel from "@/assets/laravel.png";
import PHP from "@/assets/php.png";
import Tech from "@/assets/tech.png";

const Skills = () => {
  const skills = [
    {
      logo: PHP,
      title: "Programming Languages",
      items: ["JavaScript (Vanilla JS)", "PHP", "C++", "R Programming"],
    },
    {
      logo: HTML,
      title: "Markup & Style Languages",
      items: ["HTML", "CSS"],
    },
    {
      logo: Laravel,
      title: "Libraries & Frameworks",
      items: [
        "ReactJS",
        "Shadcn/UI",
        "Bootstrap",
        "Tailwind CSS",
        "jQuery",
        "Laravel",
        "AdminLTE",
        "MySQL",
        "RestAPI",
      ],
    },
    {
      logo: Github,
      title: "Tools & Platforms",
      items: [
        "Git",
        "Netlify",
        "Arduino IDE",
        "PyCharm",
        "Embarcadero",
        "Figma",
        "WordPress",
      ],
    },
    {
      logo: Affinity,
      title: "Multimedia/Design Tools",
      items: ["Adobe Photoshop", "Canva", "CapCut", "Affinity Suite 2"],
    },
    {
      logo: Tech,
      title: "Hardware & Technical Skills",
      items: [
        "Peripheral Device Setup",
        "PC Troubleshooting",
        "Camera Operation",
      ],
    },
  ];

  return (
    <div className="flex flex-col md:mx-5 lg:mx-5 ml-5 mt-5">
      <span className="lg:text-2xl md:text-2xl font-extrabold text-lg ml-3">
        Skills
      </span>
      <div className="mt-5 px-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-3 gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-lg border-b mx-1"
            >
              <img src={skill.logo} alt={skill.title} className="w-15 h-15" />
              <div>
                <span className="font-bold text-lg block">{skill.title}</span>
                <span className="text-sm italic block leading-relaxed">
                  {skill.items.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
