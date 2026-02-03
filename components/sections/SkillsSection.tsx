"use client";

import { motion } from "framer-motion";
import { progressBar, staggerContainer, fadeInUp } from "@/lib/animations";

const skills = [
    { name: "Next.js / React / TypeScript", level: 92 },
    { name: "ASP.NET Core / C#", level: 90 },
    { name: "Java / Spring Boot", level: 85 },
    { name: "Tailwind CSS / UI/UX", level: 88 },
    { name: "Node.js / MongoDB / SQL", level: 85 },
    { name: "OpenAI / AI Integration", level: 82 },
    { name: "Payment APIs / Authentication", level: 87 },
    { name: "SEO / Web Performance", level: 84 },
    { name: "Video Editing / Content Creation", level: 85 },
];

export default function SkillsSection() {
    return (
        <div className="p-6 md:p-12 max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
                <div className="text-center space-y-4">
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground">
                        Technical Skills
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-800 font-medium max-w-2xl mx-auto">
                        A collection of technologies I use to build robust simulations, applications, and digital experiences.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {skills.map((skill, index) => (
                        <motion.div key={index} variants={fadeInUp} className="space-y-2 group">
                            <div className="flex justify-between items-end">
                                <span className="font-bold text-foreground text-lg group-hover:text-accent-1 transition-colors">{skill.name}</span>
                                <span className="font-mono text-foreground font-bold bg-accent-3/30 px-2 rounded-md border-2 border-accent-3">{skill.level}%</span>
                            </div>
                            <div className="h-6 bg-white rounded-full overflow-hidden border-4 border-border shadow-sticker-sm">
                                <motion.div
                                    className="h-full bg-accent-2 border-r-4 border-border"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={skill.level}
                                    variants={progressBar}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
