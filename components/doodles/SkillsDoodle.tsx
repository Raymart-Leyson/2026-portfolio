"use client";
import { motion } from "framer-motion";

export const SkillsDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M55 5L25 55H50L45 95L75 45H50L55 5Z"
            fill="var(--color-accent-1)"
            stroke="#1A1A1A"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
                idle: { skewX: 0 },
                hover: {
                    skewX: [-2, 2, -2],
                    scale: [1, 1.1, 1],
                    fill: ["#FF9AA2", "#FFD700", "#FF9AA2"],
                    transition: { repeat: Infinity, duration: 0.3 }
                }
            }}
        />

        {/* Shock lines */}
        <motion.g
            variants={{
                idle: { opacity: 0 },
                hover: { opacity: 1 }
            }}
        >
            <motion.path d="M10 40 L20 45" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" variants={{ hover: { opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.2 } } }} />
            <motion.path d="M90 40 L80 45" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" variants={{ hover: { opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.2, delay: 0.1 } } }} />
        </motion.g>
    </motion.svg>
);
