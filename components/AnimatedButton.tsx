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
  const baseClasses = "relative px-8 py-4 rounded-xl font-bold transition-all border-4 border-border shadow-sticker hover:-translate-y-1 hover:shadow-sticker-lg active:translate-y-0 active:shadow-sticker-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none";

  const variantClasses = {
    primary: "bg-accent-1 text-foreground",
    secondary: "bg-accent-2 text-foreground",
    ghost: "bg-white text-foreground",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, type, disabled };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
}

