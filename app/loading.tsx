"use client";

import { motion } from "framer-motion";
import FloatingDoodles from "@/components/FloatingDoodles";

export default function Loading() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Doodles */}
            <FloatingDoodles />

            <div className="relative z-10 flex flex-col items-center">
                {/* Spinning Star Icon instead of generic circle */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="mb-8"
                >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </motion.div>

                <div className="bg-white p-8 rounded-2xl border-4 border-border shadow-sticker text-center max-w-sm w-full">
                    <h2 className="text-2xl font-black text-foreground mb-2 uppercase tracking-wide">
                        Powering Up...
                    </h2>
                    <p className="text-gray-500 font-bold text-sm mb-6">
                        Loading creative assets and doodles.
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full h-8 bg-gray-100 rounded-full border-4 border-border overflow-hidden relative">
                        <motion.div
                            initial={{ width: "10%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                            className="h-full bg-accent-1 border-r-4 border-border"
                        />
                        {/* Shine effect on bar */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30" />
                    </div>
                </div>
            </div>
        </div>
    );
}
