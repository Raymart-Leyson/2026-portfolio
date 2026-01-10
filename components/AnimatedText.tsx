"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  once?: boolean;
  delay?: number;
}

/**
 * AnimatedText - Reveals text letter by letter with smooth animations
 * @param text - The text to animate
 * @param className - Additional CSS classes
 * @param el - HTML element type (default: "p")
 * @param once - Whether to animate only once (default: true)
 * @param delay - Delay before animation starts
 */
export default function AnimatedText({
  text,
  className = "",
  el: Wrapper = "p",
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  // Split text into words and letters while preserving spaces
  const words = text.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        staggerChildren: 0.03,
        delayChildren: delay,
      }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as any,
                delay: (wordIndex * word.length + charIndex) * 0.03 + delay,
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: ((wordIndex + 1) * words[wordIndex].length) * 0.03 + delay,
              }}
              style={{ display: "inline-block" }}
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.div>
  );
}
