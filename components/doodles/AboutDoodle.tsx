"use client";
import { motion } from "framer-motion";

export const AboutDoodle = ({ className = "w-full h-full" }: { className?: string }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Breathing Head */}
        <motion.g
            variants={{
                idle: { y: 0 },
                hover: { y: [0, -2, 0], transition: { repeat: Infinity, duration: 1, ease: "easeInOut" } }
            }}
        >
            <circle cx="50" cy="45" r="25" fill="var(--color-accent-3)" stroke="#1A1A1A" strokeWidth="6" />
            <path d="M40 40C40 40 43 45 50 45C57 45 60 40 60 40" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />
            {/* Blinking Eyes */}
            <motion.circle
                cx="38" cy="35" r="3" fill="#1A1A1A"
                variants={{
                    idle: { scaleY: 1 },
                    hover: { scaleY: [1, 0.1, 1], transition: { repeat: Infinity, duration: 2, delay: 0.5 } }
                }}
            />
            <motion.circle
                cx="62" cy="35" r="3" fill="#1A1A1A"
                variants={{
                    idle: { scaleY: 1 },
                    hover: { scaleY: [1, 0.1, 1], transition: { repeat: Infinity, duration: 2, delay: 0.5 } }
                }}
            />
        </motion.g>

        {/* Body */}
        <motion.path
            d="M15 90C15 70 30 65 50 65C70 65 85 70 85 90"
            stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-accent-2)"
            variants={{
                idle: { scale: 1 },
                hover: { scale: 1.02, transition: { repeat: Infinity, duration: 1.5, repeatType: "reverse" } }
            }}
        />

        {/* Sparkles (Hearts) */}
        <motion.g
            variants={{
                idle: { opacity: 0, scale: 0 },
                hover: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } }
            }}
        >
            <motion.path
                d="M80 30 C80 30 85 25 90 30 C95 35 90 40 80 45 C70 40 65 35 70 30 C75 25 80 30 80 30"
                fill="#FF9AA2"
                stroke="none"
                variants={{
                    hover: { y: [0, -5, 0], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 1.5 } }
                }}
            />
            <motion.path
                d="M20 20 C20 20 25 15 30 20 C35 25 30 30 20 35 C10 30 5 25 10 20 C15 15 20 20 20 20"
                fill="#FF9AA2"
                stroke="none"
                variants={{
                    hover: { y: [0, -5, 0], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 1.2, delay: 0.2 } }
                }}
            />
        </motion.g>
    </motion.svg>
);
