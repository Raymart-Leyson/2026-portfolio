"use client";

import { motion } from "framer-motion";

interface WindowFrameProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const WindowFrame = ({ children, title = "Untitled", className = "" }: WindowFrameProps) => {
    return (
        <div className={`
      flex flex-col
      overflow-hidden rounded-xl
      border-[4px] border-border-main
      bg-background
      shadow-sticker-lg
      ${className}
    `}>
            {/* Title Bar */}
            <div className="shrink-0 flex items-center gap-3 border-b-[4px] border-border-main bg-accent-2 px-4 py-3">
                {/* Window Controls */}
                <div className="flex gap-2">
                    <div className="h-4 w-4 rounded-full border-[2px] border-border-main bg-accent-1 shadow-sm" />
                    <div className="h-4 w-4 rounded-full border-[2px] border-border-main bg-accent-3 shadow-sm" />
                    <div className="h-4 w-4 rounded-full border-[2px] border-border-main bg-[#A0E6B5] shadow-sm" />
                </div>

                {/* Title */}
                <div className="flex-1 text-center font-mono text-sm font-bold text-border-main uppercase tracking-widest">
                    {title}
                </div>

                {/* Spacer for centering */}
                <div className="w-[72px]" />
            </div>

            {/* Content Container */}
            <div className="flex-1 min-h-0 relative flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default WindowFrame;
