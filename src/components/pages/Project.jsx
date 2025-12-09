import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HRNabua from "@/assets/HRNABUA.png";
import DOST from "@/assets/DOST.png";
import JGS from "@/assets/JGS.png";
import CSPC from "@/assets/cspc_bg.jpg";

// Single project card component
const ProjectCard = ({ project }) => (
  <div className="flex lg:flex-row md:flex-row flex-col items-start gap-3 p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-lg border-b shadow-sm">
    {project.photo ? (
      <img
        src={project.photo}
        alt={project.title}
        className="w-40 h-32 object-cover rounded-md"
      />
    ) : (
      <div className=":h-32 w-full lg:w-32 md:w-32 bg-gray-200 flex items-center justify-center rounded-md italic font-bold text-center p-2">
        {project.title}
      </div>
    )}
    <div className="flex flex-col flex-1">
      <span className="font-bold md:text-lg text-md lg:text-lg">
        {project.title}
      </span>
      <span className="text-xs italic leading-relaxed mt-1">
        {project.description}
      </span>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.techstack.map((tech, i) => (
          <span
            key={i}
            className="p-1.5 bg-black text-white dark:bg-white dark:text-black text-xs rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.location && project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 p-1 bg-black text-white dark:bg-white dark:text-black text-sm font-medium rounded-sm transition-colors w-fit"
        >
          {project.location}
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Job Hiring Portal",
      description:
        "Web-based portal for DOST V, allowing employers to post jobs and applicants to apply online. Includes admin dashboard for managing listings and tracking applicants.",
      techstack: ["PHP", "Tailwind CSS", "AdminLTE"],
      photo: DOST,
      link: "https://github.com/MioukiSan/JobHiring-Portal",
      location: "Github",
    },
    {
      title: "Time Tabling Automation System",
      description:
        "Automates student timetables for CSPC, managing classrooms and preventing scheduling conflicts. Generates printable timetables efficiently.",
      techstack: ["Javascript", "PHP", "AdminLTE"],
      photo: CSPC,
      link: "https://github.com/MioukiSan/timetablingsystem",
      location: "Github",
    },
    {
      title: "JGS POS System",
      description:
        "Point-of-sale system for JGS Construction Supplier. Manages inventory, sales, financial records, and receipt printing to streamline operations.",
      techstack: ["Vanilla JS", "PHP", "Bootstrap"],
      photo: JGS,
      link: "https://github.com/MioukiSan/JGS",
      location: "Github",
    },
    {
      title: "EFarmers",
      description:
        "Online platform connecting farmers with customers. Supports product listings, orders, delivery tracking, and real-time chat for smooth communication.",
      techstack: ["Vanilla JS", "PHP", "Bootstrap"],
      photo: "",
      link: "https://github.com/MioukiSan/E-FarmErce",
      location: "Github",
    },
    {
      title: "EcomFarmers",
      description:
        "Simple e-commerce platform for Libon Bank farmers to sell products online. Features browsing, ordering, and payment for wider customer reach.",
      techstack: ["Vanilla JS", "PHP", "Bootstrap"],
      photo: "",
      link: "https://github.com/MioukiSan/Ecomfarmers",
      location: "Github",
    },
    {
      title: "HR Nabua Job System Mock Up",
      description:
        "Figma mock-up for HR Nabua LGU to visualize a job management system. Demonstrates UI, navigation, and workflow for HR operations.",
      techstack: ["Figma"],
      photo: HRNabua,
      link: "https://www.figma.com/proto/MBWtigXjWJ2uNOHq3mkFkT/HR-Nabua-Prototype",
      location: "",
    },
  ];

  const visibleProjects = projects.slice(0, 3);
  const archivedProjects = projects.slice(3);

  return (
    <div className="flex flex-col lg:mt-8 mt-5 ml-5">
      <span className="lg:text-2xl md:text-2xl font-extrabold text-lg">
        Projects
      </span>
      <span className="font-extralight italic block lg:text-left">
        Checkout some of my projects, showcasing skills in web development and
        programming.
      </span>

      <div className="flex flex-col mt-5 px-5 lg:px-3 space-y-2 lg:mx-5">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        {archivedProjects.length > 0 && (
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="archived-projects">
              <AccordionTrigger>Archived Projects</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-2">
                {archivedProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  );
};

export default Projects;
