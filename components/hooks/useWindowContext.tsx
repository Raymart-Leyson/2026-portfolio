"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type WindowId = "about" | "skills" | "projects" | "automation" | "contact" | "channels" | "music" | "tictactoe" | "snake" | "resume" | "browser" | "experience" | "games";

interface WindowState {
    id: WindowId;
    title: string;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
    position: { x: number; y: number };
    size: { width: number; height: number };
}

interface WindowContextType {
    windows: Record<WindowId, WindowState>;
    openWindow: (id: WindowId) => void;
    closeWindow: (id: WindowId) => void;
    minimizeWindow: (id: WindowId) => void;
    toggleMaximize: (id: WindowId) => void;
    focusWindow: (id: WindowId) => void;
    updateWindowPosition: (id: WindowId, position: { x: number; y: number }) => void;
    updateWindowSize: (id: WindowId, size: { width: number; height: number }) => void;
    activeWindowId: WindowId | null;
}

const defaultWindows: Record<WindowId, WindowState> = {
    about: { id: "about", title: "About Me", isOpen: true, isMinimized: false, isMaximized: false, zIndex: 1, position: { x: 60, y: 40 }, size: { width: 1200, height: 800 } },
    experience: { id: "experience", title: "My Experience", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 90, y: 15 }, size: { width: 1200, height: 800 } },
    skills: { id: "skills", title: "Skills & Tech", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 90, y: 70 }, size: { width: 1200, height: 800 } },
    projects: { id: "projects", title: "Projects", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 120, y: 100 }, size: { width: 1200, height: 800 } },
    automation: { id: "automation", title: "Automation", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 150, y: 130 }, size: { width: 1200, height: 800 } },
    contact: { id: "contact", title: "Contact Me", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 180, y: 160 }, size: { width: 1200, height: 800 } },
    channels: { id: "channels", title: "YT Channels", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 210, y: 190 }, size: { width: 1200, height: 800 } },
    browser: { id: "browser", title: "World Wide Web", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 240, y: 220 }, size: { width: 1200, height: 800 } },
    resume: { id: "resume", title: "My Resume", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 240, y: 20 }, size: { width: 1000, height: 800 } },
    music: { id: "music", title: "Lo-Fi Player", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 350, y: 100 }, size: { width: 500, height: 600 } },
    games: { id: "games", title: "Games Folder", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 300, y: 100 }, size: { width: 600, height: 500 } },
    tictactoe: { id: "tictactoe", title: "Tic-Tac-Toe", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 400, y: 150 }, size: { width: 500, height: 600 } },
    snake: { id: "snake", title: "Snake Game", isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, position: { x: 450, y: 200 }, size: { width: 500, height: 600 } },
};

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const WindowProvider = ({ children }: { children: ReactNode }) => {
    const [windows, setWindows] = useState<Record<WindowId, WindowState>>(defaultWindows);
    const [activeWindowId, setActiveWindowId] = useState<WindowId | null>("about");
    const [maxZIndex, setMaxZIndex] = useState(1);

    const focusWindow = (id: WindowId) => {
        const newZ = maxZIndex + 1;
        setMaxZIndex(newZ);
        setActiveWindowId(id);
        setWindows((prev) => ({
            ...prev,
            [id]: { ...prev[id], zIndex: newZ, isMinimized: false },
        }));
    };

    const openWindow = (id: WindowId) => {
        setWindows((prev) => {
            const isOpen = prev[id].isOpen;
            if (isOpen && !prev[id].isMinimized) {
                // Already open and focused? just return, or shake it?
                focusWindow(id);
                return prev;
            }
            return {
                ...prev,
                [id]: { ...prev[id], isOpen: true, isMinimized: false },
            };
        });
        // If not already focused/open, focus it
        setTimeout(() => focusWindow(id), 0);
    };

    const closeWindow = (id: WindowId) => {
        setWindows((prev) => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false, isMinimized: false },
        }));
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    };

    const minimizeWindow = (id: WindowId) => {
        setWindows((prev) => ({
            ...prev,
            [id]: { ...prev[id], isMinimized: true },
        }));
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    };

    const toggleMaximize = (id: WindowId) => {
        setWindows((prev) => ({
            ...prev,
            [id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
        }));
        focusWindow(id);
    };

    const updateWindowPosition = (id: WindowId, position: { x: number; y: number }) => {
        setWindows((prev) => ({
            ...prev,
            [id]: { ...prev[id], position },
        }));
    };

    const updateWindowSize = (id: WindowId, size: { width: number; height: number }) => {
        setWindows((prev) => ({
            ...prev,
            [id]: { ...prev[id], size },
        }));
    };

    return (
        <WindowContext.Provider
            value={{
                windows,
                openWindow,
                closeWindow,
                minimizeWindow,
                toggleMaximize,
                focusWindow,
                updateWindowPosition,
                updateWindowSize,
                activeWindowId
            }}
        >
            {children}
        </WindowContext.Provider>
    );
};

export const useWindowContext = () => {
    const context = useContext(WindowContext);
    if (!context) {
        throw new Error("useWindowContext must be used within a WindowProvider");
    }
    return context;
};
