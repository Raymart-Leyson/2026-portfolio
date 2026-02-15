"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const timeline = [
    {
        year: "2024 - Present",
        title: "Freelance Full Stack Developer",
        company: "RNLStudio",
        description: "Founded RNLStudio; shipped 7+ client solutions (AI tools, payment platforms, business systems) using Next.js and ASP.NET.",
    },
    {
        year: "Sep 2024 - Aug 2025",
        title: "Software Engineer",
        company: "Accenture",
        description: "Built React/TypeScript features; led QA automation with Selenium to 95%+ coverage and faster releases.",
    },
    {
        year: "Feb 2024 - Apr 2024",
        title: "Machine Learning Engineer",
        company: "Cebu Institute of Technology",
        description: "Built computer vision model (5S) with 80–90% accuracy; optimized pipeline with TensorFlow.",
    },
    {
        year: "Jan 2023 - Apr 2024",
        title: "ASP.NET Developer",
        company: "Cebu Institute of Technology",
        description: "Delivered 3 production Web APIs (Discussion, 5S, Barangay DB) with full CRUD and unit tests in ASP.NET Core.",
    },
    {
        year: "Jun 2023 - Aug 2023",
        title: "Quality Assurance Team Leader",
        company: "Ollopa",
        description: "Led QA workflows; published 100+ product designs and improved review throughput.",
    },
];

export default function ExperienceSection() {
    return (
        <div className="flex flex-col gap-12 p-6 md:p-12 max-w-5xl mx-auto">
            <section className="space-y-8">
                <motion.div variants={fadeInUp} className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-foreground drop-shadow-sm">Professional Experience</h2>
                    <p className="text-lg text-gray-800 font-medium mt-2">My journey through tech and leadership.</p>
                </motion.div>

                <div className="space-y-8 pl-4 max-w-3xl mx-auto">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative pl-8 border-l-4 border-border/20 group pb-8 last:pb-0">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-accent-1 border-4 border-border z-10 transition-transform group-hover:scale-125" />

                            {/* Card Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border-4 border-border shadow-sticker hover:shadow-sticker-lg transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                    <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                                    <span className="inline-block px-3 py-1 bg-accent-2/20 border-2 border-accent-2 rounded-md text-xs font-bold text-foreground whitespace-nowrap">
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-accent-1 font-bold text-sm mb-3">{item.company}</p>
                                <p className="text-gray-800 leading-relaxed text-sm font-bold opacity-90">{item.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
