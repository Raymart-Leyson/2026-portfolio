"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import TicTacToe from "@/components/extras/TicTacToe";
import MusicPlayer from "@/components/extras/MusicPlayer";
import SnakeGame from "@/components/extras/SnakeGame";
import ChannelsWidget from "@/components/extras/ChannelsWidget";
import CartoonButton from "@/components/CartoonButton";
import { ChannelsDoodle } from "@/components/doodles/ChannelsDoodle";

type WidgetType = "menu" | "music" | "tictactoe" | "snake" | "channels";

export default function ExtrasSection() {
    const [activeWidget, setActiveWidget] = useState<WidgetType>("menu");

    return (
        <div className="p-6 md:p-12 max-w-6xl mx-auto min-h-full">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center gap-8">
                <div className="text-center space-y-4">
                    <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-foreground">
                        Extras & Play
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-800 font-medium">
                        {activeWidget === "menu" ? "Choose an app to launch:" : "Have fun!"}
                    </motion.p>
                </div>

                <AnimatePresence mode="wait">
                    {activeWidget === "menu" ? (
                        <motion.div
                            key="menu"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl"
                        >
                            {/* Channels Launcher */}
                            <motion.button
                                onClick={() => setActiveWidget("channels")}
                                whileHover="hover"
                                initial="idle"
                                whileTap={{ scale: 0.95 }}
                                className="bg-white p-6 rounded-3xl border-4 border-border shadow-sticker flex flex-col items-center gap-4 hover:shadow-sticker-lg transition-all"
                            >
                                <div className="w-24 h-24">
                                    <ChannelsDoodle />
                                </div>
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">My Channels</h3>
                            </motion.button>

                            {/* Music Launcher */}
                            <motion.button
                                onClick={() => setActiveWidget("music")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white p-6 rounded-3xl border-4 border-border shadow-sticker flex flex-col items-center gap-4 hover:shadow-sticker-lg transition-all"
                            >
                                <div className="w-16 h-16 bg-accent-1/20 rounded-full flex items-center justify-center border-4 border-accent-1 text-3xl">
                                    🎵
                                </div>
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">Lo-Fi Player</h3>
                            </motion.button>

                            {/* TicTacToe Launcher */}
                            <motion.button
                                onClick={() => setActiveWidget("tictactoe")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white p-6 rounded-3xl border-4 border-border shadow-sticker flex flex-col items-center gap-4 hover:shadow-sticker-lg transition-all"
                            >
                                <div className="w-16 h-16 bg-accent-2/20 rounded-full flex items-center justify-center border-4 border-accent-2 text-3xl">
                                    ❌
                                </div>
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">Tic-Tac-Toe</h3>
                            </motion.button>

                            {/* Snake Launcher */}
                            <motion.button
                                onClick={() => setActiveWidget("snake")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white p-6 rounded-3xl border-4 border-border shadow-sticker flex flex-col items-center gap-4 hover:shadow-sticker-lg transition-all"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border-4 border-green-500 text-3xl">
                                    🐍
                                </div>
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">Snake</h3>
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="widget"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="w-full max-w-lg flex flex-col gap-6"
                        >
                            <div className="self-start">
                                <CartoonButton onClick={() => setActiveWidget("menu")} variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                                    <span>⬅️</span> Back to Menu
                                </CartoonButton>
                            </div>

                            {activeWidget === "music" && <MusicPlayer />}
                            {activeWidget === "tictactoe" && <TicTacToe />}
                            {activeWidget === "snake" && <SnakeGame />}
                            {activeWidget === "channels" && <ChannelsWidget />}
                        </motion.div>
                    )}
                </AnimatePresence>

                {activeWidget === "menu" && (
                    <motion.div variants={fadeInUp} className="w-full max-w-2xl mt-8">
                        <div className="bg-white p-6 rounded-2xl border-4 border-dashed border-border/40 text-center">
                            <p className="text-gray-500 font-bold">More mini-games (Memory Match) coming soon...</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
