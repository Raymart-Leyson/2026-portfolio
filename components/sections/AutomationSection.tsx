"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AutomationSection() {
    return (
        <div className="p-6 md:p-12 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-foreground">
                    Automation & AI
                </motion.h2>
                <motion.div variants={fadeInUp} className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border-4 border-border shadow-sticker text-left">
                    <p className="text-gray-800 font-medium mb-6 text-lg">
                        Passionate about streamlining workflows and integrating intelligent systems.
                        My experience includes:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-2xl mt-1">🧪</span>
                            <div>
                                <strong className="text-foreground text-lg block">QA Automation (Selenium)</strong>
                                <span className="text-gray-800 font-medium">Achieved 95%+ test coverage at Accenture, drastically reducing regression testing time.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl mt-1">👁️</span>
                            <div>
                                <strong className="text-foreground text-lg block">Computer Vision (TensorFlow)</strong>
                                <span className="text-gray-800 font-medium">Developed a 5S Methodology tracking model with 80-90% accuracy for workplace organization.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl mt-1">🧠</span>
                            <div>
                                <strong className="text-foreground text-lg block">AI Integration (OpenAI)</strong>
                                <span className="text-gray-800 font-medium">Built learning tools like StudyGen that auto-generate study materials from raw content.</span>
                            </div>
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={fadeInUp} className="p-8 border-4 border-dashed border-border bg-white shadow-sticker-sm rounded-2xl">
                    <span className="text-4xl mb-4 block">🤖</span>
                    <p className="text-gray-800 font-bold text-sm">
                        More automation demos coming soon to this terminal.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
