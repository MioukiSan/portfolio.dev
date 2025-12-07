import RESUMEPDF from "@/assets/PALMA, RENZ NORMAN.pdf";
import { href } from "react-router-dom";

const Resume = () => {
  return (
    <div className="justify-center my-8">
      <span className="lg:text-2xl font-extrabold lg:ml-10">Resume</span>
      <div className="flex flex-col items-center lg:mb-10 mt-3">
        <iframe
          src={RESUMEPDF}
          className="w-180 h-120 pointer-events-none mask-b-from-20% mask-x-from-80% overflow-hidden rounded-xl ml-10"
          title="Renz Norman Palma Resume"
        ></iframe>
        <button
          onClick={() => window.open(RESUMEPDF, "_blank")}
          className="text-gray-500 text-xs ml-15 mt-5 p-2 hover:bg-transparent hover:text-white transition-colors duration-200 rounded-lg"
        >
          View Full Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
