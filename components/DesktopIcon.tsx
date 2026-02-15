"use client";

import { useWindowContext, WindowId } from "@/components/hooks/useWindowContext";
import { motion } from "framer-motion";

interface DesktopIconProps {
    id: WindowId;
    label: string;
    icon: React.ReactNode;
}

export default function DesktopIcon({ id, label, icon }: DesktopIconProps) {
    const { openWindow } = useWindowContext();

    return (
        <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={() => openWindow(id)}
            className="flex flex-col items-center gap-2 cursor-pointer w-24 p-2 group"
        >
            <div className="w-16 h-16 bg-white rounded-xl border-[3px] border-border-main shadow-sticker group-hover:shadow-sticker-lg flex items-center justify-center text-3xl">
                {icon}
            </div>
            <span className="font-mono font-bold text-sm bg-white/80 px-2 py-0.5 rounded-md border-2 border-transparent group-hover:border-border-main group-hover:shadow-sm transition-all text-center">
                {label}
            </span>
        </motion.div>
    );
}
