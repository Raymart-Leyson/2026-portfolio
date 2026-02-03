"use client";
import { motion } from "framer-motion";

export const ChannelsDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g
            variants={{
                idle: { rotate: 0, scale: 1 },
                hover: { rotate: [0, -3, 3, 0], scale: 1.05, transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
            }}
        >
            {/* TV Box */}
            <rect x="15" y="25" width="70" height="50" rx="8" fill="var(--color-accent-1)" stroke="#1A1A1A" strokeWidth="6" strokeLinejoin="round" />

            {/* Screen Inner */}
            <rect x="22" y="32" width="56" height="36" rx="4" fill="white" stroke="#1A1A1A" strokeWidth="4" />

            {/* Play Button Triangle */}
            <motion.path
                d="M45 40 L60 50 L45 60 Z"
                fill="#FF0000"
                stroke="#1A1A1A"
                strokeWidth="3"
                strokeLinejoin="round"
                variants={{
                    hover: { scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 0.8 } }
                }}
            />

            {/* TV Antenna */}
            <motion.path
                d="M35 25 L25 10 M65 25 L75 10"
                stroke="#1A1A1A"
                strokeWidth="5"
                strokeLinecap="round"
                variants={{
                    hover: { d: ["M35 25 L25 10 M65 25 L75 10", "M35 25 L20 15 M65 25 L80 15", "M35 25 L25 10 M65 25 L75 10"], transition: { repeat: Infinity, duration: 1.5 } }
                }}
            />
        </motion.g>
    </motion.svg>
);
