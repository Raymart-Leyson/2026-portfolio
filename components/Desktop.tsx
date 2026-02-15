"use client";

import { useWindowContext, WindowId } from "@/components/hooks/useWindowContext";
import DraggableWindow from "@/components/DraggableWindow";
import DesktopIcon from "@/components/DesktopIcon";
import Taskbar from "@/components/Taskbar";
import FloatingDoodles from "@/components/FloatingDoodles";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AutomationSection from "@/components/sections/AutomationSection";
import ContactSection from "@/components/sections/ContactSection";
import TicTacToe from "@/components/extras/TicTacToe";
import MusicPlayer from "@/components/extras/MusicPlayer";
import SnakeGame from "@/components/extras/SnakeGame";
import ChannelsWidget from "@/components/extras/ChannelsWidget";
import GamesFolder from "@/components/apps/GamesFolder";
import BrowserApp from "@/components/extras/BrowserApp";
import ExperienceSection from "@/components/sections/ExperienceSection";
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

const ICONS: { id: WindowId; label: string; icon: React.ReactNode }[] = [
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

export default function Desktop() {
    const { openWindow } = useWindowContext();

    return (
        <div className="h-screen w-screen bg-background overflow-hidden relative selection:bg-accent-2 selection:text-border-main">
            <FloatingDoodles />

            {/* Desktop Icons Grid */}
            <div className="absolute top-8 left-8 flex flex-col gap-8 z-10 flex-wrap h-[calc(100vh-100px)] content-start">
                {ICONS.map((icon) => (
                    <DesktopIcon
                        key={icon.id}
                        id={icon.id}
                        label={icon.label}
                        icon={<div className="p-2 w-full h-full">{icon.icon}</div>}
                    />
                ))}
            </div>

            {/* Windows Area */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* About Window */}
                <div className="pointer-events-auto contents">
                    <DraggableWindow id="about">
                        <AboutSection />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="experience">
                        <ExperienceSection />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="skills">
                        <SkillsSection />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="projects">
                        <ProjectsSection />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="browser">
                        <BrowserApp />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="resume">
                        <div className="w-full h-full bg-white flex flex-col">
                            <iframe
                                src="/Raymart_Leyson-2026.pdf"
                                className="w-full h-full border-0"
                                title="My Resume"
                            />
                        </div>
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="games">
                        <GamesFolder />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="automation">
                        <AutomationSection />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="contact">
                        <ContactSection />
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="channels">
                        <div className="p-4 h-full flex items-center justify-center">
                            <ChannelsWidget />
                        </div>
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="music">
                        <div className="p-4 h-full flex items-center justify-center">
                            <MusicPlayer />
                        </div>
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="tictactoe">
                        <div className="p-4 h-full flex items-center justify-center">
                            <TicTacToe />
                        </div>
                    </DraggableWindow>
                </div>

                <div className="pointer-events-auto contents">
                    <DraggableWindow id="snake">
                        <div className="p-4 h-full flex items-center justify-center">
                            <SnakeGame />
                        </div>
                    </DraggableWindow>
                </div>
            </div>

            {/* Taskbar */}
            <Taskbar />

        </div>
    );
}
