"use client";
import { motion } from "framer-motion";

export const ProjectsDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket Body */}
        <motion.g
            variants={{
                idle: { y: 0, rotate: 0 },
                hover: {
                    y: [-2, 2, -2],
                    rotate: [-1, 1, -1],
                    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }
            }}
        >
            <path d="M50 15C50 15 30 35 30 60C30 75 20 85 20 85L35 80C40 82 60 82 65 80L80 85C80 85 70 75 70 60C70 35 50 15 50 15Z" fill="var(--color-accent-2)" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="40" y="35" width="20" height="20" rx="10" fill="white" stroke="#1A1A1A" strokeWidth="4" />

            {/* Fins */}
            <motion.path
                d="M15 75C15 75 25 70 30 70"
                stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round"
                variants={{ hover: { rotate: [0, -5, 0], transition: { repeat: Infinity, duration: 0.5 } } }}
            />
            <motion.path
                d="M85 75C85 75 75 70 70 70"
                stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round"
                variants={{ hover: { rotate: [0, 5, 0], transition: { repeat: Infinity, duration: 0.5 } } }}
            />
        </motion.g>

        {/* Thrust/Smoke */}
        <motion.g
            variants={{
                idle: { opacity: 0 },
                hover: { opacity: 1, y: 5 }
            }}
        >
            <motion.circle cx="40" cy="90" r="4" fill="#E2E2E2" variants={{ hover: { y: [0, 10], opacity: [1, 0], transition: { repeat: Infinity, duration: 0.6 } } }} />
            <motion.circle cx="60" cy="90" r="4" fill="#E2E2E2" variants={{ hover: { y: [0, 10], opacity: [1, 0], transition: { repeat: Infinity, duration: 0.6, delay: 0.2 } } }} />
        </motion.g>
    </motion.svg>
);
