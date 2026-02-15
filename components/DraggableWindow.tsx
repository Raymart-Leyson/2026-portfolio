"use client";

import { motion, useDragControls } from "framer-motion";
import { useWindowContext, WindowId } from "@/components/hooks/useWindowContext";
import WindowFrame from "@/components/WindowFrame";
import { useEffect, useRef } from "react";

interface DraggableWindowProps {
    id: WindowId;
    children: React.ReactNode;
}

export default function DraggableWindow({ id, children }: DraggableWindowProps) {
    const { windows, closeWindow, focusWindow, minimizeWindow, toggleMaximize, updateWindowPosition, updateWindowSize, activeWindowId } = useWindowContext();
    const dragControls = useDragControls();
    const windowRef = useRef<HTMLDivElement>(null);

    const windowState = windows[id];
    if (!windowState) return null;

    const { title, isOpen, isMinimized, isMaximized, zIndex, position, size } = windowState;

    // Safety fallbacks for HMR/State mismatch
    const safePosition = position || { x: 50, y: 50 };
    const safeSize = size || { width: 800, height: 600 };

    // Use local position/size if not maximized, else fixed
    // Actually, we can rely on context position/size since we update it.
    // But for smooth dragging, framer motion handles visual via x/y.
    // We need to sync x/y back to context onDragEnd.

    if (!isOpen || isMinimized) return null;

    const isActive = activeWindowId === id;

    const handleDragEnd = (event: any, info: any) => {
        // Need to calculate absolute position based on delta or current transform
        // But since we use x/y in animate, we can just use the final values?
        // Framer motion 'drag' modifies the transform. To sync, we likely need to read from the element or use onUpdate?
        // Simpler: Just rely on x/y from context. Framer motion's 'drag' with external control/update is tricky.
        // Let's rely on `x` and `y` props being controlled by context for "initial" and let drag handle the offset.
        // Wait, if we use `animate={{ x: position.x, ... }}` and then drag, does it conflict?
        // Yes. It's better to let framer handle the drag offset, and onDragEnd, update the context position
        // by adding the delta to the current context position.

        // Actually, simpler: Use `onDragEnd` to update context.
        const newX = safePosition.x + info.offset.x;
        const newY = safePosition.y + info.offset.y;
        updateWindowPosition(id, { x: newX, y: newY });
    };

    // For Resizing: complex. Let's use a simpler approach: 
    // Just "Maximize" is the main request. "Sizeable" means resize.
    // We can add a resize handle at bottom-right.
    const handleResize = (e: React.PointerEvent, direction: string) => {
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = safeSize.width;
        const startHeight = safeSize.height;

        const onPointerMove = (moveEvent: PointerEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;

            let newWidth = startWidth;
            let newHeight = startHeight;

            if (direction.includes("e")) newWidth = Math.max(300, startWidth + deltaX);
            if (direction.includes("s")) newHeight = Math.max(200, startHeight + deltaY);

            updateWindowSize(id, { width: newWidth, height: newHeight });
        };

        const onPointerUp = () => {
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", onPointerUp);
        };

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
    };

    return (
        <motion.div
            drag={!isMaximized}
            dragListener={false}
            dragControls={dragControls}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            initial={{
                x: safePosition.x,
                y: safePosition.y,
                width: safeSize.width,
                height: safeSize.height,
                scale: 0.9,
                opacity: 0,
            }}
            animate={{
                x: isMaximized ? 0 : safePosition.x,
                y: isMaximized ? 0 : safePosition.y,
                width: isMaximized ? "100vw" : safeSize.width,
                height: isMaximized ? "calc(100vh - 64px)" : safeSize.height,
                scale: 1,
                opacity: 1,
                zIndex,
            }}
            // transition={{ duration: 0.2 }} // Smooth transition for max/restore
            onPointerDown={() => focusWindow(id)}
            style={{
                position: "absolute",
                // x, y, width, height handled by animate to allow smooth maximization
            }}
            className={`touch-none pointer-events-auto flex flex-col`}
        >
            {/* Drag Handle Overlay - Positioned over the title bar area */}
            <div
                onPointerDown={(e) => {
                    if (!isMaximized) {
                        dragControls.start(e);
                        focusWindow(id);
                    }
                }}
                onDoubleClick={() => toggleMaximize(id)}
                className={`absolute top-0 left-0 right-0 h-[48px] z-50 rounded-t-xl ${!isMaximized ? 'cursor-grab active:cursor-grabbing' : ''}`}
            />

            <WindowFrame
                title={title}
                className={`w-full h-full shadow-2xl transition-all duration-200 ${isActive ? "ring-4 ring-accent-2/50" : "opacity-95 text-opacity-80 drop-shadow-sm blur-[0.5px]"} ${isMaximized ? "rounded-none border-0 border-b-2" : "rounded-xl border-4"}`}
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)}
                onMaximize={() => toggleMaximize(id)}
                isMaximized={isMaximized}
            >
                <div
                    className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-border-main scrollbar-track-transparent flex flex-col relative bg-background"
                    onPointerDown={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </WindowFrame>

            {/* Resize Handles - Only show if not maximized */}
            {!isMaximized && (
                <>
                    {/* Right Handle */}
                    <div
                        className="absolute top-0 right-[-8px] bottom-[20px] w-4 cursor-ew-resize z-50 hover:bg-accent-1/20"
                        onPointerDown={(e) => handleResize(e as any, "e")}
                    />
                    {/* Bottom Handle */}
                    <div
                        className="absolute bottom-[-8px] left-0 right-[20px] h-4 cursor-ns-resize z-50 hover:bg-accent-1/20"
                        onPointerDown={(e) => handleResize(e as any, "s")}
                    />
                    {/* Corner Handle */}
                    <div
                        className="absolute bottom-[-8px] right-[-8px] w-6 h-6 cursor-nwse-resize z-50 bg-border-main rounded-tl text-white flex items-center justify-center p-1"
                        onPointerDown={(e) => handleResize(e as any, "se")}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M19 5l-14 14" /><path d="M19 11l-8 8" /></svg>
                    </div>
                </>
            )}
        </motion.div>
    );
}
