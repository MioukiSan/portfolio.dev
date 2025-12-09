import RESUMEPDF from "@/assets/PALMA, RENZ NORMAN.pdf";
import { href } from "react-router-dom";

const Resume = () => {
  return (
    <div className="justify-center lg:mt-12 mx-5 mt-5">
      <span className="lg:text-2xl md:text-2xl font-extrabold text-lg">
        Resume
      </span>
      <div className="flex flex-col items-center lg:mb-10 mt-3">
        <iframe
          src={RESUMEPDF}
          className="lg:w-full lg:h-120 md:w-120 md:h-90 w-90 h-50 mask-b-from-20%  pointer-events-none overflow-hidden rounded-xl lg:ml-10"
          title="Renz Norman Palma Resume"
        ></iframe>
        <button
          onClick={() => window.open(RESUMEPDF, "_blank")}
          className="text-gray-500 text-xs lg:ml-15 lg:mt-5 p-2 hover:bg-transparent hover:font-bold transition-colors duration-200 rounded-lg"
        >
          View Full Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
