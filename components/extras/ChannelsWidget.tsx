"use client";

import { motion } from "framer-motion";

const channels = [
    {
        name: "RNL Studio",
        url: "https://www.youtube.com/@RNLStudioD",
        color: "#FF0000",
        icon: "📺",
    },
    {
        name: "Spicy Rants",
        url: "https://www.youtube.com/@SpicyRants",
        color: "#FF4500",
        icon: "🌶️",
    },
    {
        name: "RNL Studio Clips",
        url: "https://www.youtube.com/@RNLStudioClips",
        color: "#000000",
        icon: "✂️",
    },
];

export default function ChannelsWidget() {
    return (
        <div className="bg-white p-6 rounded-2xl border-4 border-border shadow-sticker w-full">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">My Channels</h3>

            <div className="grid gap-4">
                {channels.map((channel, index) => (
                    <motion.a
                        key={index}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 p-4 rounded-xl border-4 border-transparent hover:border-border hover:bg-gray-50 transition-colors group"
                        style={{ borderLeftColor: channel.color }}
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl border-2 border-border group-hover:scale-110 transition-transform">
                            {channel.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-lg text-foreground">{channel.name}</h4>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                            ↗
                        </div>
                    </motion.a>
                ))}
            </div>

            <div className="mt-6 p-4 bg-accent-2/10 rounded-xl border-2 border-accent-2/20 text-center">
                <p className="text-sm font-bold text-gray-700">
                    Check out my latest video editing work!
                </p>
            </div>
        </div>
    );
}
