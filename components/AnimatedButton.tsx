"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  withGlow?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

/**
 * AnimatedButton - Button with hover animations and optional glow effect
 * @param variant - Visual style variant
 * @param withGlow - Enable glow effect on hover
 */
export default function AnimatedButton({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  withGlow = true,
  disabled = false,
  type = "button",
}: AnimatedButtonProps) {
  const baseClasses = "relative px-8 py-4 rounded-full font-semibold transition-all overflow-hidden";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20",
    ghost: "bg-transparent text-white border border-white/30",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, type, disabled };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      initial={{ scale: 1 }}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      {withGlow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 0.6, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ left: "-100%" }}
        whileHover={{ left: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </Component>
  );
}

