import React from "react";

const Experience = () => {
  const ExperienceData = [
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
      logo: "",
      roles: [
        "Created multimedia tasks.",
        "Published a job hiring webapp for Department of Science and Technology Region 5.",
        "Performed troubleshooting and network security-related tasks.",
      ],
    },

    {
      id: "job-gov-employee",
      position: "Government Employee (Casual)",
      company: "Local Government Unit, Municipality of Oas",
      start: "July 2025",
      end: "Present",
      logo: "",
      roles: [
        "Provides IT support for all departments.",
        "Handles the implementation of digitalization initiatives for the municipality.",
        "Supports procurement of supplies and equipment.",
      ],
    },
  ];

  return (
    <div className="flex flex-col mx-10">
      <span className="lg:text-2xl font-extrabold">Experience</span>

      <div className="flex flex-col pl-6">
        {ExperienceData.map((experience) => (
          <div key={experience.id} className="relative">
            <div className="flex flex-col border-b border-dashed py-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-start col-span-2">
                  <span className="font-bold text-lg">
                    {experience.position}
                  </span>
                </div>
                <div className="text-end text-sm italic">
                  <span className="text-gray-500">{experience.start}</span>
                  {" - "}
                  <span className="text-gray-500">{experience.end}</span>
                </div>
              </div>
              <span className="text-gray-500 text-md italic -mt-2 mb-1">
                {experience.company}
              </span>

              <ul className="text-gray-500 pl-5 list-disc">
                {experience.roles.map((role, i) => (
                  <li key={i} className="text-sm">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <span className="lg:text-2xl font-extrabold mb-4 mt-5">Education</span>
    </div>
  );
};

export default Experience;
