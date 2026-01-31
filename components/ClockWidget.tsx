"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ClockWidget() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!time) return null; // Hydration mismatch prevention

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 md:top-8 md:right-8 z-50 pointer-events-none"
        >
            <div className="bg-white px-4 py-2 rounded-xl border-4 border-border shadow-sticker flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono font-bold text-foreground text-lg tracking-widest">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </motion.div>
    );
}
