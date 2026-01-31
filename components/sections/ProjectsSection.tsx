"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects, projectsData } from "@/lib/projectsData";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectsSection() {
    // Show all projects instead of just featured, or maybe just featured? 
    // User asked to "Migrate content", original page showed "Featured Projects" sliced to 3.
    // But since this is a dedicated "Projects" tab, we should probably show MORE than just 3.
    // Let's show all projects.
    const projects = projectsData;

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
                <div className="text-center space-y-4">
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground">
                        Project Gallery
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-800 font-medium max-w-2xl mx-auto">
                        Selected works ranging from web applications to enterprise APIs.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                            github={project.github}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
