"use client";
import { motion } from "framer-motion";

export const AutomationDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <rect x="25" y="25" width="50" height="45" rx="8" fill="#A0E6B5" stroke="#1A1A1A" strokeWidth="6" />

        {/* Arms */}
        <motion.g variants={{ hover: { rotate: [0, 10, -10, 0], transition: { repeat: Infinity, duration: 1 } } }} style={{ originX: "25px", originY: "50px" }}>
            <path d="M20 50H25" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
        </motion.g>
        <motion.g variants={{ hover: { rotate: [0, -10, 10, 0], transition: { repeat: Infinity, duration: 1 } } }} style={{ originX: "75px", originY: "50px" }}>
            <path d="M75 50H80" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
        </motion.g>

        {/* Antennae */}
        <motion.path
            d="M40 10V25"
            stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round"
            variants={{ hover: { height: [15, 10, 15], y: [0, 2, 0], transition: { repeat: Infinity, duration: 0.4 } } }}
        />
        <path d="M60 10V25" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />

        {/* Eyes */}
        <motion.g
            variants={{
                idle: { scaleY: 1 },
                hover: { scaleY: [1, 0.1, 1], transition: { repeat: Infinity, duration: 3 } }
            }}
        >
            <circle cx="40" cy="8" r="5" fill="#1A1A1A" />
            <circle cx="60" cy="8" r="5" fill="#1A1A1A" />
        </motion.g>

        <rect x="35" y="38" width="10" height="6" fill="#1A1A1A" />
        <rect x="55" y="38" width="10" height="6" fill="#1A1A1A" />

        {/* Mouth */}
        <motion.path
            d="M40 58H60"
            stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round"
            variants={{ hover: { scaleX: [1, 0.8, 1], transition: { repeat: Infinity, duration: 1 } } }}
        />
    </motion.svg>
);
