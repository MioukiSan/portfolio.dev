import React from "react";
import BNHS from "@/assets/bns.png";
import BUP from "@/assets/BUP.png";

const Experience = () => {
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
      strand_course: "Technical Vocational Livelihood (ICT)",
      honor: "With Honor",
      logo: BNHS,
    },
  ];

  return (
    <div className="flex flex-col mx-5">
      <span className="lg:text-2xl md:text-2xl font-extrabold text-lg mt-3 ml-2">
        Education
      </span>

      <div className="flex flex-col space-y-4">
        {EducationEXP.map((education) => (
          <div
            key={education.id}
            className="border-b rounded-lg pb-4 flex items-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md p-2 lg:ml-5"
          >
            <img
              className="w-16 h-16 object-contain"
              src={education.logo}
              alt={`${education.school} logo`}
            />
            <div className="flex flex-col grow">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{education.school}</span>

                <span className="text-sm italic font-light">
                  {education.sy}
                </span>
              </div>

              <span className="text-base italic">
                {education.strand_course}
              </span>

              <span className="text-sm italic font-light">
                {education.honor}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
