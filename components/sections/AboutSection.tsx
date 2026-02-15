"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { fadeInUp, fadeInLeft } from "@/lib/animations";

export default function AboutSection() {
    return (
        <div className="flex flex-col gap-8 p-6 pt-10 md:p-12 md:pt-16 max-w-5xl mx-auto h-full overflow-y-auto">
            {/* Hero / Intro */}
            <section className="flex flex-col items-center text-center space-y-6">
                <motion.div
                    variants={fadeInUp}
                    className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-border shadow-sticker bg-white"
                >
                    <Image
                        src="/pp1.png"
                        alt="Raymart Leyson"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                    <p className="text-foreground font-bold font-mono text-lg">
                        Welcome, I'm
                    </p>
                    <AnimatedText
                        text="Raymart Leyson"
                        className="text-4xl md:text-6xl font-bold text-foreground"
                        el="h1"
                    />
                    <p className="text-xl md:text-2xl font-bold text-accent-1">
                        24 Years Old
                    </p>
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-bold text-gray-700">
                    Software Engineer | Full Stack Developer
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-lg text-gray-800 font-medium max-w-2xl leading-relaxed">
                    Full Stack Developer from Cebu City with enterprise experience at Accenture and founder of RNLStudio.
                    Building production-ready solutions from AI learning platforms to secure payment systems.
                </motion.p>
            </section>

            <hr className="border-t-2 border-border/10 w-full" />

            {/* About Content */}
            <section className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto w-full">
                <motion.div variants={fadeInLeft} className="space-y-4">
                    <div className="bg-white p-6 rounded-2xl border-4 border-border shadow-sticker transform rotate-1 transition-transform hover:rotate-0 h-full">
                        <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
                        <p className="text-gray-800 leading-relaxed font-medium">
                            Computer Science graduate from Cebu Institute of Technology University.
                            My portfolio spans diverse domains from AI-powered learning tools to secure payment platforms.
                            I deeply value clean code, scalable architecture, and user-centric design.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeInLeft} className="space-y-4">
                    <div className="bg-accent-2/10 p-6 rounded-2xl border-4 border-border shadow-sticker -rotate-1 transition-transform hover:rotate-0 h-full">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Loves doing...</h3>
                        <div className="flex flex-wrap gap-3">
                            {["🎮 Play Games", "🥾 Hiking", "😴 Sleeping", "🎵 Music", "💻 Developing", "🤖 Automation"].map((hobby) => (
                                <span key={hobby} className="px-3 py-1 bg-white border-2 border-border rounded-full font-bold text-sm shadow-sm hover:scale-105 transition-transform cursor-default">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
