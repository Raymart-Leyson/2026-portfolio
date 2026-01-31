"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface CartoonCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    wrapperClassName?: string;
    variant?: "white" | "colored";
}

const CartoonCard = ({
    children,
    className = "",
    variant = "white",
    ...props
}: CartoonCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -4, x: -2 }}
            className={`
        relative overflow-hidden
        rounded-2xl
        border-[4px] border-border-main
        ${variant === "white" ? "bg-surface" : "bg-background"}
        shadow-sticker
        transition-shadow duration-200
        hover:shadow-sticker-lg
        ${className}
      `}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default CartoonCard;
