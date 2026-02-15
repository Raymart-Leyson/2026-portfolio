"use client";

import { motion } from "framer-motion";

interface WindowFrameProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    isMaximized?: boolean;
}

const WindowFrame = ({
    children,
    title = "Untitled",
    className = "",
    onClose,
    onMinimize,
    onMaximize,
    isMaximized = false
}: WindowFrameProps) => {
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
            <div className="shrink-0 flex items-center gap-3 border-b-[4px] border-border-main bg-accent-2 px-4 py-3 relative">
                {/* Window Controls - Elevated Z-index to be clickable over drag handle */}
                <div className="flex gap-2 relative z-[60]">
                    <button
                        onClick={onClose}
                        className="h-6 w-6 rounded-full border-[2px] border-border-main bg-accent-1 shadow-sm hover:brightness-110 active:scale-95 transition-transform flex items-center justify-center group"
                        aria-label="Close"
                        title="Close"
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-border-main">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <button
                        onClick={onMinimize}
                        className="h-6 w-6 rounded-full border-[2px] border-border-main bg-accent-3 shadow-sm hover:brightness-110 active:scale-95 transition-transform flex items-center justify-center group"
                        aria-label="Minimize"
                        title="Minimize"
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-border-main">
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button
                        onClick={onMaximize}
                        className="h-6 w-6 rounded-full border-[2px] border-border-main bg-[#A0E6B5] shadow-sm hover:brightness-110 active:scale-95 transition-transform flex items-center justify-center group"
                        aria-label={isMaximized ? "Restore" : "Maximize"}
                        title={isMaximized ? "Restore" : "Maximize"}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        {isMaximized ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-border-main">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" className="hidden" />
                                <path d="M15 3h6v6" />
                                <path d="M10 14L21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-border-main">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            </svg>
                        )}
                    </button>
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
