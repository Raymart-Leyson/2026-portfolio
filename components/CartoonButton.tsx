"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface CartoonButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent";
}

const CartoonButton = ({
    children,
    className = "",
    variant = "primary",
    ...props
}: CartoonButtonProps) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "secondary":
                return "bg-accent-2 text-border-main";
            case "accent":
                return "bg-accent-3 text-border-main";
            default:
                return "bg-accent-1 text-border-main";
        }
    };

    return (
        <motion.button
            whileHover={{ y: -2, x: -2, boxShadow: "var(--shadow-sticker)" }}
            whileTap={{ y: 0, x: 0, boxShadow: "0px 0px 0px 0px var(--border-main)" }}
            className={`
        px-6 py-3
        rounded-xl
        border-[3px] border-border-main
        font-bold tracking-wide uppercase
        shadow-sticker-sm
        ${getVariantClasses()}
        ${className}
      `}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default CartoonButton;
