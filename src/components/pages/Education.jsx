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
      strand_course: "Technical Vocational Livelihood",
      honor: "With Honor",
      logo: BNHS,
    },
  ];
  return (
    <div className="flex flex-col mx-10">
      <span className="lg:text-2xl font-extrabold mt-5">Education</span>
      <div className="flex flex-col pl-6">
        {EducationEXP.map((education) => (
          <div
            key={education.id}
            className="relative border-b border-dashed py-2 flex items-center gap-4"
          >
            <img
              className="w-16 h-16 object-contain"
              src={education.logo}
              alt={`${education.school} logo`}
            />
            <div className="flex-col flex-grow">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-lg">{education.school}</span>
                <span className="text-sm italic font-light">
                  {education.sy}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-md italic">
                  {education.strand_course}
                </span>
                <span className="text-sm font-light italic">
                  {education.honor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
