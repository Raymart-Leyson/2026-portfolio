"use client";

import { useWindowContext, WindowId } from "@/components/hooks/useWindowContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import StartMenu from "@/components/StartMenu";

export default function Taskbar() {
    const { windows, activeWindowId, focusWindow, minimizeWindow, openWindow } = useWindowContext();
    const [time, setTime] = useState<string>("");
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    useEffect(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleTaskClick = (id: WindowId) => {
        setIsStartMenuOpen(false);
        const win = windows[id];
        if (activeWindowId === id && !win.isMinimized) {
            minimizeWindow(id);
        } else {
            if (!win.isOpen) {
                openWindow(id);
            } else {
                focusWindow(id);
            }
        }
    };

    const toggleStartMenu = () => setIsStartMenuOpen(!isStartMenuOpen);

    const handleStartMenuItemClick = (id: WindowId) => {
        openWindow(id);
        setIsStartMenuOpen(false);
    };

    const openWindows = Object.values(windows).filter(w => w.isOpen);

    return (
        <>
            {/* Click-outside Overlay */}
            {isStartMenuOpen && (
                <div
                    className="fixed inset-0 z-[9990] bg-transparent"
                    onClick={() => setIsStartMenuOpen(false)}
                />
            )}

            {/* Start Menu */}
            <AnimatePresence>
                {isStartMenuOpen && (
                    <StartMenu onItemClick={handleStartMenuItemClick} isOpen={isStartMenuOpen} />
                )}
            </AnimatePresence>

            <div className="fixed bottom-0 left-0 right-0 h-16 bg-surface border-t-4 border-border-main z-[9999] flex items-center px-4 gap-4 shadow-sticker-lg">
                {/* Start Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleStartMenu}
                    className={`h-10 w-10 bg-accent-1 border-2 border-border-main rounded-lg shadow-sticker-sm flex items-center justify-center font-bold text-xl transition-colors ${isStartMenuOpen ? 'bg-accent-2 ring-2 ring-border-main ring-offset-2' : ''}`}
                >
                    🪟
                </motion.button>

                {/* Task List */}
                <div className="flex-1 flex gap-2 overflow-x-auto no-scrollbar items-center ml-2">
                    {openWindows.map((win) => (
                        <motion.button
                            key={win.id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            onClick={() => handleTaskClick(win.id)}
                            className={`
                  h-10 px-4 rounded-lg border-2 border-border-main flex items-center gap-2 font-mono text-sm font-bold min-w-[120px] max-w-[200px] truncate transition-all
                  ${activeWindowId === win.id && !win.isMinimized
                                    ? 'bg-accent-2 shadow-sticker-sm translate-y-[-2px]'
                                    : 'bg-white shadow-none hover:bg-gray-50'}
                `}
                        >
                            <span className="truncate">{win.title}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Tray Area - Clock */}
                <div className="flex items-center gap-2 pl-4 border-l-2 border-border-main/20">
                    <div className="h-10 px-3 bg-white border-2 border-border-main rounded-lg shadow-sm flex items-center justify-center font-mono font-bold text-sm">
                        {time}
                    </div>
                </div>
            </div>
        </>
    );
}
