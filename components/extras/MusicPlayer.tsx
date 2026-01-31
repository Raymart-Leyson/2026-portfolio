"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartoonButton from "../CartoonButton";

// Presets
const STATIONS = [
    { name: "Lofi Girl ☕", id: "jfKfPfyJRdk" },
    { name: "Chillhop 🦝", id: "5yx6BWlEVcY" },
    { name: "Synthwave 🌃", id: "4xDzrJKXOOY" },
    { name: "Coffee Shop 🌧️", id: "lP26UCnoHg" },
];

export default function MusicPlayer() {
    const [currentStationIndex, setCurrentStationIndex] = useState(0);
    const [customUrl, setCustomUrl] = useState("");
    const [activeVideoId, setActiveVideoId] = useState(STATIONS[0].id);
    const [mode, setMode] = useState<"preset" | "custom">("preset");

    const handleNext = () => {
        setMode("preset");
        const nextIndex = (currentStationIndex + 1) % STATIONS.length;
        setCurrentStationIndex(nextIndex);
        setActiveVideoId(STATIONS[nextIndex].id);
    };

    const handlePrev = () => {
        setMode("preset");
        const prevIndex = (currentStationIndex - 1 + STATIONS.length) % STATIONS.length;
        setCurrentStationIndex(prevIndex);
        setActiveVideoId(STATIONS[prevIndex].id);
    };

    const handleCustomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic extraction
        let id = "";
        try {
            // Handle standard and shortened links
            if (customUrl.includes("v=")) {
                id = customUrl.split("v=")[1].split("&")[0];
            } else if (customUrl.includes("youtu.be/")) {
                id = customUrl.split("youtu.be/")[1].split("?")[0];
            }
        } catch (err) {
            console.error(err);
        }

        if (id) {
            setMode("custom");
            setActiveVideoId(id);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl border-4 border-border shadow-sticker flex flex-col gap-6 w-full relative overflow-hidden">
            {/* Header / Title */}
            <div className="flex flex-col gap-2 relative z-10">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-foreground text-xl flex items-center gap-2">
                        📺 <span className="uppercase tracking-widest">TubePlayer</span>
                    </h3>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full border-2 border-border bg-accent-1"></div>
                        <div className="w-3 h-3 rounded-full border-2 border-border bg-accent-2"></div>
                    </div>
                </div>
            </div>

            {/* Video Screen */}
            <div className="aspect-video w-full bg-black rounded-xl border-4 border-border overflow-hidden relative shadow-inner group">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 z-10"
                ></iframe>

                {/* Scanlines Effect Overlay (pointer-events-none) */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4">
                {/* Station Info / Controls */}
                <div className="flex items-center justify-between bg-background p-3 rounded-xl border-4 border-border">
                    <button onClick={handlePrev} className="p-2 hover:bg-accent-2/20 rounded-lg transition-colors group" aria-label="Previous">
                        {/* Custom SVG Prev Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:scale-110 transition-transform">
                            <polygon points="19 20 9 12 19 4 19 20"></polygon>
                            <line x1="5" y1="19" x2="5" y2="5"></line>
                        </svg>
                    </button>

                    <div className="text-center">
                        <p className="font-bold text-foreground text-sm uppercase tracking-wide">
                            {mode === "custom" ? "Custom URL" : STATIONS[currentStationIndex].name}
                        </p>
                    </div>

                    <button onClick={handleNext} className="p-2 hover:bg-accent-2/20 rounded-lg transition-colors group" aria-label="Next">
                        {/* Custom SVG Next Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:scale-110 transition-transform">
                            <polygon points="5 4 15 12 5 20 5 4"></polygon>
                            <line x1="19" y1="5" x2="19" y2="19"></line>
                        </svg>
                    </button>
                </div>

                {/* Custom Input */}
                <form onSubmit={handleCustomSubmit} className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Paste YT Link..."
                        value={customUrl}
                        onChange={(e) => setCustomUrl(e.target.value)}
                        className="flex-1 bg-background border-4 border-border rounded-xl px-3 py-2 text-sm font-bold text-foreground placeholder:text-gray-400 focus:outline-none focus:shadow-sticker-sm transition-all"
                    />
                    <CartoonButton type="submit" variant="secondary" className="px-4 py-2 text-xs">
                        Load
                    </CartoonButton>
                </form>
            </div>
        </div>
    );
}
