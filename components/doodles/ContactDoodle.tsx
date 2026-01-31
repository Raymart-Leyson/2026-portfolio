"use client";
import { motion } from "framer-motion";

export const ContactDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g
            variants={{
                idle: { rotate: 0 },
                hover: { rotate: [0, -5, 5, 0], transition: { repeat: Infinity, duration: 0.5 } }
            }}
        >
            <rect x="15" y="25" width="70" height="50" rx="4" fill="var(--color-accent-3)" stroke="#1A1A1A" strokeWidth="6" strokeLinejoin="round" />

            {/* Flap */}
            <motion.path
                d="M15 25L50 55L85 25"
                stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                variants={{
                    hover: { d: ["M15 25L50 55L85 25", "M15 25L50 40L85 25", "M15 25L50 55L85 25"], transition: { repeat: Infinity, duration: 1 } }
                }}
            />
        </motion.g>

        {/* Flying Lines */}
        <motion.g
            variants={{
                idle: { opacity: 0 },
                hover: { opacity: 1 }
            }}
        >
            <motion.path d="M85 80 L95 70" stroke="#1A1A1A" strokeWidth="3" variants={{ hover: { pathLength: [0, 1], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.5 } } }} />
            <motion.path d="M15 80 L5 70" stroke="#1A1A1A" strokeWidth="3" variants={{ hover: { pathLength: [0, 1], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.5, delay: 0.2 } } }} />
        </motion.g>

    </motion.svg>
);
