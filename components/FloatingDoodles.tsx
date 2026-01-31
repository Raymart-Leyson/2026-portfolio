"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Hand-drawn SVG paths (Rough style)
const DOODLE_SVGS = [
    // 1. Rough Star
    <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    // 2. Squiggle / Spring
    <svg key="squiggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12c0-8 6-8 6 0s6 8 6 0 6-8 6 0" />
    </svg>,
    // 3. Lightning
    <svg key="lightning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>,
    // 4. Circle Scribble
    <svg key="circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeDasharray="60" strokeDashoffset="10" />
        <path d="M12 22c-4 0-8-3-8-9s5-10 9-8" opacity="0.5" />
    </svg>,
    // 5. Triangle
    <svg key="triangle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l10 18H2L12 3z" />
    </svg>,
    // 6. Cross / X
    <svg key="cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>,
    // 7. Note
    <svg key="note" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>,
    // 8. Heart
    <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
];

// Generate random starting positions
const generateDoodles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        iconIndex: Math.floor(Math.random() * DOODLE_SVGS.length),
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 15,
        scale: 0.5 + Math.random() * 1, // Varied sizes
        rotation: Math.random() * 360,
    }));
};

export default function FloatingDoodles() {
    const [doodles, setDoodles] = useState<ReturnType<typeof generateDoodles>>([]);

    useEffect(() => {
        setDoodles(generateDoodles(20)); // Increased count slightly
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {doodles.map((doodle) => (
                <motion.div
                    key={doodle.id}
                    className="absolute text-black opacity-40" // Darker, more visible hand-drawn lines
                    style={{
                        top: `${doodle.top}%`,
                        left: `${doodle.left}%`,
                        width: '64px', // Fixed size container
                        height: '64px',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, -50, 0],
                        rotate: [doodle.rotation, doodle.rotation + 360],
                    }}
                    transition={{
                        duration: doodle.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                        delay: doodle.delay,
                    }}
                >
                    {DOODLE_SVGS[doodle.iconIndex]}
                </motion.div>
            ))}
        </div>
    );
}
