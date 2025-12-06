import RESUMEPDF from "@/assets/PALMA, RENZ NORMAN.pdf";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <iframe
        src={RESUMEPDF}
        className="w-150 h-130 pointer-events-none mask-b-from-20% mask-x-from-80% overflow-hidden rounded-xl pt-10 ml-10"
        title="Renz Norman Palma Resume"
      ></iframe>
      <button className="text-gray-500 text-xs ml-15 p-5">
        View Full Resume
      </button>
    </div>
  );
};

export default Resume;
