"use client";

import { motion, AnimatePresence } from "framer-motion";
import WindowFrame from "@/components/WindowFrame";
import DoodleDock, { SectionKey } from "@/components/DoodleDock";
import PageTransition from "@/components/PageTransition";
import ClockWidget from "@/components/ClockWidget";
import FloatingDoodles from "@/components/FloatingDoodles";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AutomationSection from "@/components/sections/AutomationSection";
import ContactSection from "@/components/sections/ContactSection";
import ExtrasSection from "@/components/sections/ExtrasSection";
import { useState, useRef, useEffect } from "react";
import { slideInUp } from "@/lib/motionPresets";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "automation":
        return <AutomationSection />;
      case "contact":
        return <ContactSection />;
      case "extras":
        return <ExtrasSection />;
      default:
        return <AboutSection />;
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-8 overflow-hidden relative">
        <FloatingDoodles />
        <ClockWidget />

        {/* Main Desktop Window */}
        <WindowFrame
          title={`Portfolio.exe - [${activeSection.toUpperCase()}]`}
          className="w-full max-w-6xl h-[85vh] flex flex-col shadow-2xl z-10"
        >
          {/* Scrollable Content Area */}
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-border-main scrollbar-track-transparent bg-background text-foreground relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                variants={slideInUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-h-full p-6 md:p-12 pb-32"
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </WindowFrame>

        {/* Doodle Dock */}
        <DoodleDock activeSection={activeSection} onSectionChange={setActiveSection} />

      </div>
    </PageTransition>
  );
}
