"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AboutDoodle } from "./doodles/AboutDoodle";
import { SkillsDoodle } from "./doodles/SkillsDoodle";
import { ProjectsDoodle } from "./doodles/ProjectsDoodle";
import { AutomationDoodle } from "./doodles/AutomationDoodle";
import { ContactDoodle } from "./doodles/ContactDoodle";
import { ExtrasDoodle } from "./doodles/ExtrasDoodle";

export type SectionKey = "about" | "skills" | "projects" | "automation" | "contact" | "extras";

interface DoodleDockProps {
    activeSection: SectionKey;
    onSectionChange: (section: SectionKey) => void;
}

const dockItems: { key: SectionKey; label: string; Icon: React.FC<{ className?: string }> }[] = [
    { key: "about", label: "About", Icon: AboutDoodle },
    { key: "skills", label: "Skills", Icon: SkillsDoodle },
    { key: "projects", label: "Projects", Icon: ProjectsDoodle },
    { key: "automation", label: "Automation", Icon: AutomationDoodle },
    { key: "contact", label: "Contact", Icon: ContactDoodle },
    { key: "extras", label: "Extras", Icon: ExtrasDoodle },
];

const DoodleDock = ({ activeSection, onSectionChange }: DoodleDockProps) => {
    const [playingItem, setPlayingItem] = useState<SectionKey | null>(null);
    const shouldReduceMotion = useReducedMotion();
    const dockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleGlobalClick = () => setPlayingItem(null);
        window.addEventListener("click", handleGlobalClick);
        return () => window.removeEventListener("click", handleGlobalClick);
    }, []);

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.div
                ref={dockRef}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="pointer-events-auto
                     flex items-center gap-2 md:gap-6 p-4 md:p-4
                     bg-surface/90 backdrop-blur-md
                     border-4 border-border-main rounded-2xl
                     shadow-sticker
                     overflow-x-auto no-scrollbar max-w-full
                     "
                role="navigation"
                aria-label="Main Navigation"
                onClick={(e) => e.stopPropagation()} // Prevent dock clicks from clearing state
            >
                {dockItems.map((item) => {
                    const isActive = activeSection === item.key;
                    const isPlaying = playingItem === item.key;

                    return (
                        <motion.button
                            key={item.key}
                            onClick={(e) => {
                                onSectionChange(item.key);
                                setPlayingItem(item.key);
                            }}
                            onPointerEnter={(e) => {
                                if (e.pointerType === 'mouse') setPlayingItem(item.key);
                            }}
                            onPointerLeave={(e) => {
                                if (e.pointerType === 'mouse') setPlayingItem(null);
                            }}
                            variants={{
                                idle: { y: 0, scale: 1, filter: "grayscale(100%)" },
                                hover: { y: -10, scale: 1.15, filter: "grayscale(0%)" },
                                reducedActive: { y: 0, scale: 1, filter: "grayscale(0%)" }
                            }}
                            initial="idle"
                            animate={(isActive || isPlaying) ? (shouldReduceMotion ? "reducedActive" : "hover") : "idle"}
                            whileTap={{ scale: 0.9 }}
                            className={`
              relative group shrink-0
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
              flex items-center justify-center
              focus:outline-none 
            `}
                            aria-label={`Go to ${item.label} section`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {/* Tooltip / Label */}
                            <span className="hidden md:block absolute -top-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                {item.label}
                            </span>

                            {/* Icon */}
                            <item.Icon className={`w-full h-full drop-shadow-sm`} />

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="absolute -bottom-2 w-1.5 h-1.5 bg-black rounded-full"
                                />
                            )}
                        </motion.button>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default DoodleDock;
