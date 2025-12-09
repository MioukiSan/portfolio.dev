import React from "react";
import BNHS from "@/assets/bns.png";
import BUP from "@/assets/BUP.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const ExperienceData = [
    {
      id: "job-gov-employee",
      position: "Government Employee (Casual)",
      company: "Local Government Unit, Municipality of Oas",
      start: "July 2025",
      end: "Present",
      logo: BUP,
      roles: [
        "Provides IT support for all departments.",
        "Handles the implementation of digitalization initiatives for the municipality.",
        "Supports procurement of supplies and equipment.",
      ],
    },
    {
      id: "job-it-support",
      position: "IT Support",
      company: "Private Employer, Municipality of Oas",
      start: "August 2024",
      end: "June 2025",
      logo: "",
      roles: [
        "Provided support for multimedia projects including video editing, image optimization, and presentation design.",
        "Assisted with setting up audio-visual equipment and troubleshooting peripherals.",
        "Delivered technical support including PC repairs and system optimization.",
        "Maintained and upgraded computer hardware for home and small office setups.",
      ],
    },

    {
      id: "job-intern-dost",
      position: "Intern",
      company: "Department of Science and Technology V",
      start: "February 2024",
      end: "June 2024",
      logo: BNHS,
      roles: [
        "Created multimedia tasks.",
        "Created a job hiring webapp for Department of Science and Technology Region 5.",
        "Performed troubleshooting and network security-related tasks.",
      ],
    },
  ];

  const EducationEXP = [
    {
      id: "college",
      school: "Bicol University Polangui",
      sy: "2020-2024",
      strand_course: "Bachelor of Science in Information Technology",
      honor: "Cum Laude",
      logo: BUP,
    },
    {
      id: "sh",
      school: "Balogo National High School",
      sy: "2018-2020",
      strand_course: "Technical Vocational Livelihood",
      honor: "With Honor",
      logo: BNHS,
    },
  ];
  return (
    <div className="flex flex-col md:mx-5 lg:mx-3 mx-2 p-2">
      <span className="lg:text-2xl md:text-2xl font-extrabold text-lg">
        Experience
      </span>
      <div className="flex flex-col">
        {ExperienceData.map((experience) => (
          <div
            key={experience.id}
            className="relative transition-all duration-200 hover:-translate-y-1 hover:shadow-sm p-2 rounded-lg border-b lg:ml-5"
          >
            <div className="flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                <div className="text-start lg:col-span-2 md:col-span-2 col-span-1">
                  <span className="font-bold text-sm md:text-md lg:text-lg">
                    {experience.position}
                  </span>
                </div>
                <div className="text-end lg:text-sm md:text-sm text-xs italic">
                  <span className="font-light">
                    {experience.start} - {experience.end}
                  </span>
                </div>
              </div>
              <span className="text-md italic">{experience.company}</span>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul className="pl-5 list-disc">
                      {experience.roles.map((role, i) => (
                        <li key={i} className="text-sm">
                          {role}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
