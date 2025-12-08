import { useTheme } from "@/components/theme-provider";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "motion/react";
import Resume from "@/components/pages/Resume";
import { useLocation, useNavigate } from "react-router-dom";
import Experience from "@/components/pages/Experience";
import Education from "@/components/pages/Education";
import Skill from "@/components/pages/Skill";
import Project from "@/components/pages/Project";

import HeroSmall from "@/components/HeroSmall";

const App = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.danger) {
      return navigate("/");
    }
  }, []);

  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(darkMode);
  }, [theme]);

  // 👉 ACTIVE SECTION STATE
  const [activeSection, setActiveSection] = useState(null);

  // 🔹 Define refs for all sections
  const sections = {
    resume: useRef(null),
    exp: useRef(null),
    edu: useRef(null),
    skill: useRef(null),
    project: useRef(null),
  };

  // 🔹 Function to scroll to a section
  const scrollToSection = (sectionId) => {
    sections[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => {
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="container flex lg:flex-row flex-col mx-auto font-lato min-h-screen"
    >
      <div className="lg:basis-45/100 flex flex-col text-left lg:sticky top-0 lg:h-screen lg:pt-0 md:pt-20 pt-10 lg:overflow-hidden">
        <HeroSmall
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </div>

      <div className="lg:basis-65/100 flex flex-col text-left">
        <section id="resume" ref={sections.resume}>
          <Resume />
        </section>
        <section id="exp" ref={sections.exp}>
          <Experience />
        </section>
        <section id="edu" ref={sections.edu}>
          <Education />
        </section>
        <section id="skill" ref={sections.skill}>
          <Skill />
        </section>
        <section id="project" ref={sections.project}>
          <Project />
        </section>
      </div>
    </motion.div>
  );
};

export default App;
