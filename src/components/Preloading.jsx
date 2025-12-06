import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Spinner } from "@/components/ui/spinner";
import { motion } from "motion/react";

function Preloading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500"
    >
      <div className="text-5xl font-black text-neutral-800 dark:text-neutral-500">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("</Portfolio>").start();
            }}
          />
        </motion.span>
      </div>

      <div className="text-xl text-neutral-800 dark:text-neutral-200 animate-pulse flex justify-center items-center">
        <span className="text-sm font-light">Loading...</span>
        <Spinner />
      </div>
    </motion.div>
  );
}

export default Preloading;
