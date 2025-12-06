import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "motion/react";
import Resume from "@/components/pages/Resume";

import Navigation from "@/components/Navigation";
import HeroSmall from "@/components/HeroSmall";
// import Experience from "@/components/Experience"; // example
// import ResumeViewer from "@/components/ResumeViewer"; // iframe example

const App = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(darkMode);
  }, [theme]);

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 0 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1.5, ease: "easeInOut" }}
    //   className="container flex lg:flex-row md:flex-col mx-auto font-lato min-h-screen"
    // >
    //   <div className="lg:basis-40/100 text-left">
    //     <HeroSmall />
    //   </div>
    //   <div className="basis-60/100 text-left overflow-auto">
    //     <Resume />
    //     <Resume />
    //   </div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="container flex lg:flex-row md:flex-col mx-auto font-lato min-h-screen"
    >
      <div className="lg:basis-45/100 flex flex-col text-left lg:sticky top-0 h-screen lg:overflow-hidden">
        <HeroSmall />
      </div>
      <div className="basis-65/100 text-left">
        <Resume />
        <Resume />
      </div>
    </motion.div>
  );
};

export default App;
