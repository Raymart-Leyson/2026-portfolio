"use client";

import { motion } from "framer-motion";
import { WindowId } from "@/components/hooks/useWindowContext";
import {
    AboutIcon,
    ExperienceIcon,
    SkillsIcon,
    ProjectsIcon,
    BrowserIcon,
    ResumeIcon,
    GamesFolderIcon,
    AutomationIcon,
    ContactIcon,
    ChannelsIcon,
    MusicIcon
} from "@/components/icons/DoodleIcons";

interface StartMenuProps {
    onItemClick: (id: WindowId) => void;
    isOpen: boolean;
}

const MENU_ITEMS: { id: WindowId; label: string; icon: React.ReactNode }[] = [
    { id: "about", label: "About Me", icon: <AboutIcon /> },
    { id: "experience", label: "Experience", icon: <ExperienceIcon /> },
    { id: "skills", label: "Skills.exe", icon: <SkillsIcon /> },
    { id: "projects", label: "My Work", icon: <ProjectsIcon /> },
    { id: "browser", label: "Internet", icon: <BrowserIcon /> },
    { id: "resume", label: "My Resume", icon: <ResumeIcon /> },
    { id: "games", label: "Games", icon: <GamesFolderIcon /> },
    { id: "automation", label: "Bots", icon: <AutomationIcon /> },
    { id: "contact", label: "Contact", icon: <ContactIcon /> },
    { id: "channels", label: "YT Channels", icon: <ChannelsIcon /> },
    { id: "music", label: "Music", icon: <MusicIcon /> },
];

export default function StartMenu({ onItemClick, isOpen }: StartMenuProps) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 left-4 w-64 bg-surface border-4 border-border-main rounded-xl shadow-sticker-lg overflow-hidden flex flex-col z-[9999]"
            role="menu"
        >
            <div className="bg-accent-2 px-4 py-3 border-b-4 border-border-main">
                <h3 className="font-bold text-lg text-border-main">Start Menu</h3>
            </div>

            <div className="p-2 grid gap-1">
                {MENU_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onItemClick(item.id)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:border-2 hover:border-border-main border-2 border-transparent transition-all group text-left"
                        role="menuitem"
                    >
                        <div className="w-8 h-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <span className="font-bold text-border-main text-sm">{item.label}</span>
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 px-4 py-2 border-t-4 border-border-main flex justify-between items-center text-xs font-bold text-gray-500">
                <span>User: Drayley</span>
                <span>v1.0</span>
            </div>
        </motion.div>
    );
}
