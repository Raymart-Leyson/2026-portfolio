"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingDoodles from "@/components/FloatingDoodles";

/**
 * PageLoader - Animated loading screen that appears on initial page load
 * Matches the Creamy Cartoon OS Theme
 */
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }} // Fade out after content load
      onAnimationComplete={() => setIsLoading(false)}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      {/* Background Doodles specific to loader */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <FloatingDoodles />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Spinning Star Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </motion.div>

        {/* Loading Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-2xl border-4 border-border shadow-sticker text-center max-w-sm w-full"
        >
          <h2 className="text-3xl font-black text-foreground mb-2 uppercase tracking-wide">
            Booting OS...
          </h2>
          <p className="text-gray-500 font-bold text-sm mb-6">
            Initializing creative environment.
          </p>

          {/* Progress Bar */}
          <div className="w-full h-8 bg-gray-100 rounded-full border-4 border-border overflow-hidden relative">
            <motion.div
              initial={{ width: "5%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-accent-1 border-r-4 border-border"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
