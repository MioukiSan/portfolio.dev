import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import Day from "@/assets/Day.jpg";
import DayHand from "@/assets/DayHand.jpg";
import Night from "@/assets/Night.jpg";
import NightHand from "@/assets/NightHand.jpg";
import { motion } from "motion/react";
import { Bomb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Determine if dark mode is active, considering the 'system' theme
    const darkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(darkMode);
  }, [theme]);

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
      className="container mx-auto flex lg:flex-row md:flex-row items-center xl:justify-baseline justify-center italic space-x-3 md:space-x-20 lg:space-x-25 pt-10"
    >
      <div className="max-w-full">
        <div className="flex flex-col text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:text-6xl md:text-3xl text-2xl font-bold text-gray-500"
          >
            Hi there,
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center"
          >
            <span className="text-3xl lg:text-8xl font-semibold">
              I am <span className="font-extrabold">Renz!</span>
            </span>
            {/* <span>
              <img
                src={Hand}
                alt="waving hand"
                className="lg:w-18 h-18; -12 h-12h-8 w-8 md:w;"
              />
            </span> */}
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-96 w-36 lg:text-xl md:text-md text-xs text-gray-500"
          >
            A tech-savvy individual passionate about the IT industry,
            continuously learning and exploring different areas of technology
            and innovation.
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm border border-gray-100 bg-transparent rounded-sm px-1 py-1
             hover:bg-red-600 hover:text-white transition-colors duration-200 w-40 mt-4 flex justify-center items-center"
            onClick={() => navigate("/App", { state: { danger: true } })}
          >
            &lt;ClickBait Careful
            <Bomb />
            /&gt;
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex justify-center items-center"
      >
        <img
          src={isDarkMode ? Night : Day}
          alt={isDarkMode ? "Renz at night" : "Renz at day"}
          className="lg:w-full md:w-50 w-35 mask-b-from-50% lg:max-w-xs rounded-full shadow-lg"
          onMouseEnter={(e) =>
            (e.currentTarget.src = isDarkMode ? NightHand : DayHand)
          }
          onMouseLeave={(e) => (e.currentTarget.src = isDarkMode ? Night : Day)}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
