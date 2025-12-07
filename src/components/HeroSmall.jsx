import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { useTheme } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";

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
  const isDarkMode = theme === "dark";

  const [index, setIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(isDarkMode ? Night : Day);

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
      <div className="flex flex-row justify-center">
        <div className="flex flex-col text-left justify-center lg:ml-10">
          <span className="lg:text-3xl md:text-5xl text-lg font-bold text-gray-500 italic">
            I am Renz, a
          </span>

          <motion.span
            key={index}
            {...animationNiche}
            className="lg:text-5xl md:text-5xl text-lg font-extrabold italic"
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

          <span className="text-lg italic text-gray-500 w-95 mt-5">
            A tech-savvy individual passionate about the IT industry, always
            learning and exploring new technologies.
          </span>
          <span className="hidden md:flex lg:hidden md:text-lg font-bold italic w-70 my-3">
            What do I do?
          </span>
          <span className="hidden md:flex lg:hidden md:text-sm text-gray-400 italic mr-7 w-80">
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
              className="lg:w-28 md:w-60 w-35 mask-b-from-50% lg:max-w-xs rounded-full shadow-lg mask-clip-border"
              onMouseEnter={() => setImageSrc(isDarkMode ? NightHand : DayHand)}
              onMouseLeave={() => setImageSrc(isDarkMode ? Night : Day)}
            />
          </motion.span>
        </div>
      </div>
      <div className="md:hidden flex lg:flex lg:flex-col mt-4 ml-5">
        <span className="text-lg font-bold italic">What do I do?</span>
        <span className="text-sm text-gray-400 italic mr-7">
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
