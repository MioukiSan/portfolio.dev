import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const Certification = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 99 ? 99 : prev + Math.random() * 10));
    }, 400);

    if (progress >= 99) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const uploadingText =
    progress < 99
      ? "Saving..."
      : "Goal is almost there... just a bit longer...";

  return (
    <div className="justify-center my-5 ml-5">
      <span className="lg:text-2xl md:text-2xl font-extrabold text-lg">
        Certification
      </span>
      <div className="relative border-b rounded-lg flex flex-col items-center text-center p-3 mx-5">
        <h2 className="text-8xl font-extrabold text-primary tracking-widest">
          404
        </h2>
        <div className="absolute top-20 bg-primary px-5 text-sm rounded rotate-10 text-primary-foreground">
          Certificates Not Found
        </div>
        <p className="mt-4 text-lg italic text-center">
          Just kidding! Currently saving some for my certification journey.
          <br />
          Will be adding it SOON!
        </p>
        <div className="w-3/4 lg:w-1/2 mt-4 mx-auto">
          <Progress value={progress} />
          <p className="text-xs italic text-muted-foreground mt-1">
            {uploadingText} {Math.floor(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
