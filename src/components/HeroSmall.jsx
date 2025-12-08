import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { useTheme } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import Verified from "@/assets/Verified.png";

import Day from "@/assets/Day.jpg";
import DayHand from "@/assets/DayHand.jpg";
import Night from "@/assets/Night.jpg";
import NightHand from "@/assets/NightHand.jpg";

const animationNiche = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const HeroSmall = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [index, setIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(isDarkMode ? Night : Day);

  useEffect(() => {
    // Determine if dark mode is active, considering the 'system' theme
    const darkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(darkMode);
  }, [theme]);

  useEffect(() => {
    setImageSrc(isDarkMode ? Night : Day);
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Niche.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const Niche = [
    "Web Developer",
    "Freelancer",
    "Graphic Designer",
    "UI/UX Designer",
    "Photographer",
    "Video Editor",
  ];

  return (
    <div className="flex flex-col justify-center lg:min-h-screen">
      <div className="flex flex-row lg:mx-auto md:ml-5 mx-auto">
        <div className="flex flex-col text-left justify-center sm:mx-auto">
          <div className="flex flex-row gap-3 items-center">
            <span className="lg:text-3xl md:text-4xl text-md font-bold">
              Renz Norman Palma
            </span>
            <img
              className="
    lg:w-5 lg:h-5
    md:w-10 md:h-10
    w-5 h-5
  "
              src={Verified}
              alt="Verified"
            />
          </div>
          <motion.span
            key={index}
            {...animationNiche}
            className="lg:text-5xl md:text-5xl text-lg font-extrabold italic my-1"
          >
            <Typewriter
              options={{
                strings: [Niche[index]],
                autoStart: true,
                delay: 50,
                pauseFor: 1200,
                deleteSpeed: 999999,
                loop: false,
              }}
            />
          </motion.span>

          <span className="lg:text-lg md:text-xl text-sm italic w-59 md:w-90 lg:w-95">
            A tech-savvy individual passionate about the IT industry, always
            learning and exploring new technologies.
          </span>
          <span className="hidden md:flex lg:hidden md:text-lg font-bold italic w-70 my-2">
            What do I do?
          </span>
          <span className="hidden md:flex lg:hidden md:text-sm italic mr-7 w-100">
            I focus on building practical and innovative solutions across
            software, hardware, and automation. My work involves exploring
            tools, experimenting with new technologies, and developing projects
            that blend creativity with technical problem-solving.
          </span>
        </div>
        <div className="flex justify-center">
          <motion.span
            {...animationNiche}
            className="flex justify-center items-center mx-auto lg:mr-10"
          >
            <img
              src={imageSrc}
              alt={isDarkMode ? "Renz at night" : "Renz at day"}
              className="lg:w-28 md:w-60 w-30 mask-b-from-50% lg:max-w-xs rounded-full shadow-lg mask-clip-border"
              onMouseEnter={() => setImageSrc(isDarkMode ? NightHand : DayHand)}
              onMouseLeave={() => setImageSrc(isDarkMode ? Night : Day)}
            />
          </motion.span>
        </div>
      </div>
      <div className="md:hidden flex flex-col lg:flex lg:flex-col lg:mt-4 ml-4">
        <span className="text-lg font-bold italic">What do I do?</span>
        <span className="text-sm italic mr-7">
          I focus on building practical and innovative solutions across
          software, hardware, and automation. My work involves exploring tools,
          experimenting with new technologies, and developing projects that
          blend creativity with technical problem-solving.
        </span>
      </div>
      <Navigation />
    </div>
  );
};

export default HeroSmall;
