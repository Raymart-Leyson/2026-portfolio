"use client";
import { motion } from "framer-motion";

export const ExtrasDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M50 15L58 40L85 40L65 55L73 80L50 65L27 80L35 55L15 40L42 40L50 15Z"
            fill="#FFF490"
            stroke="#1A1A1A"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
                idle: { rotate: 0, scale: 1 },
                hover: {
                    rotate: 180,
                    scale: [1, 1.2, 1],
                    transition: { repeat: Infinity, duration: 2, ease: "linear" }
                }
            }}
        />

        {/* Sparkles */}
        <motion.g
            variants={{
                idle: { opacity: 0 },
                hover: { opacity: 1 }
            }}
        >
            <motion.circle cx="20" cy="20" r="3" fill="#FFE55C" variants={{ hover: { scale: [0, 1.5, 0], transition: { repeat: Infinity, duration: 1 } } }} />
            <motion.circle cx="80" cy="80" r="3" fill="#FFE55C" variants={{ hover: { scale: [0, 1.5, 0], transition: { repeat: Infinity, duration: 1, delay: 0.5 } } }} />
            <motion.circle cx="80" cy="20" r="2" fill="#FFE55C" variants={{ hover: { scale: [0, 1.5, 0], transition: { repeat: Infinity, duration: 0.8, delay: 0.2 } } }} />
        </motion.g>
    </motion.svg>
);
