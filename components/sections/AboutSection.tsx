"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

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

export default function AboutSection() {
    return (
        <div className="flex flex-col gap-12 p-6 md:p-12 max-w-5xl mx-auto">
            {/* Hero / Intro */}
            <section className="flex flex-col items-center text-center space-y-6">
                <motion.p variants={fadeInUp} className="text-foreground font-bold font-mono text-lg">
                    Welcome, I'm
                </motion.p>
                <div className="mb-2">
                    <AnimatedText
                        text="Raymart Leyson"
                        className="text-5xl md:text-7xl font-bold text-foreground"
                        el="h1"
                    />
                </div>
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground">
                    Software Engineer | Full Stack Developer
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-gray-800 font-medium max-w-2xl leading-relaxed">
                    Full Stack Developer from Cebu City with enterprise experience at Accenture and founder of RNLStudio.
                    Building production-ready solutions from AI learning platforms to secure payment systems.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-4">
                    {/* These buttons previously scrolled to sections. 
               Now that sections are tabs, we might remove them or make them switch tabs if we passed the setter. 
               For now, we'll keep them as static indicators or remove active navigation to avoid prop drilling complex logic. 
               Actually, let's keep it simple: just text triggers or decorative.
           */}
                    <div className="flex gap-4">
                        {/* Visual only for now as navigation is handled by dock */}
                    </div>
                </motion.div>
            </section>

            <hr className="border-t-2 border-border/10 w-full" />

            {/* About Content */}
            <section className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div variants={fadeInLeft} className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl border-4 border-border shadow-sticker transform rotate-1 transition-transform hover:rotate-0">
                        <h3 className="text-3xl font-bold text-foreground mb-4">My Journey</h3>
                        <p className="text-gray-800 leading-relaxed font-medium text-lg">
                            Computer Science graduate from Cebu Institute of Technology University with professional experience at Accenture.
                            My portfolio spans diverse domains from AI-powered learning tools to secure payment platforms.
                            I deeply value clean code, scalable architecture, and user-centric design.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-8">
                    <h3 className="text-3xl font-bold text-foreground drop-shadow-sm ml-6">Experience</h3>
                    <div className="space-y-8 pl-4">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-8 border-l-4 border-border/20 group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-accent-1 border-4 border-border z-10 transition-transform group-hover:scale-125" />

                                {/* Card Content */}
                                <div className="bg-white p-6 rounded-xl border-4 border-border shadow-sticker hover:shadow-sticker-lg transition-all duration-300">
                                    <span className="inline-block px-2 py-1 bg-accent-2/20 border-2 border-accent-2 rounded-md text-xs font-bold text-foreground mb-2">
                                        {item.year}
                                    </span>
                                    <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                                    <p className="text-accent-1 font-bold text-sm mb-3">{item.company}</p>
                                    <p className="text-gray-800 leading-relaxed text-sm font-bold opacity-90">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
