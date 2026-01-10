"use client";

import { motion } from "framer-motion";
import { floatingVariants } from "@/lib/animations";

/**
 * AnimatedBackground - Floating gradient blobs for visual interest
 * Creates a dynamic, animated background effect
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient blobs */}
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-0 -right-4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ duration: 7, delay: 1 }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ duration: 8, delay: 2 }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  );
}
