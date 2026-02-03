"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projectsData, getAllCategories } from "@/lib/projectsData";
import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const stats = {
    total: projectsData.length,
    live: projectsData.filter(p => p.status === "live").length,
    categories: getAllCategories().length,
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        {/* Header */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-gray-500 hover:text-foreground font-bold mb-8 group transition-colors">
              <motion.span
                whileHover={{ x: -5 }}
                className="mr-2"
              >
                ←
              </motion.span>
              Back to Home
            </Link>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
              >
                All Projects
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-700 font-medium max-w-3xl mb-8 leading-relaxed"
              >
                A comprehensive collection of my work spanning AI tools, business applications,
                landing pages, and enterprise APIs. Each project demonstrates expertise in full-stack
                development, modern frameworks, and production-ready solutions.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-4 max-w-2xl"
              >
                <div className="p-4 rounded-xl bg-white border-4 border-border shadow-sticker text-center">
                  <div className="text-3xl font-black text-accent-1">{stats.total}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Total Projects</div>
                </div>
                <div className="p-4 rounded-xl bg-white border-4 border-border shadow-sticker text-center">
                  <div className="text-3xl font-black text-green-500">{stats.live}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Live Projects</div>
                </div>
                <div className="p-4 rounded-xl bg-white border-4 border-border shadow-sticker text-center">
                  <div className="text-3xl font-black text-accent-3">{stats.categories}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Categories</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-6 mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-bold border-2 transition-all shadow-sm ${selectedCategory === category
                      ? "bg-accent-1 text-white border-accent-1 shadow-md"
                      : "bg-white text-gray-600 border-border hover:border-accent-1 hover:text-accent-1"
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="relative h-full">
                  {/* Status Badge */}
                  {project.status === "live" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute -top-3 -right-3 z-30 px-3 py-1 bg-green-500 border-2 border-border text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-sm transform rotate-3"
                    >
                      LIVE
                    </motion.div>
                  )}
                  {project.status === "beta" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute -top-3 -right-3 z-30 px-3 py-1 bg-yellow-400 border-2 border-border text-black text-xs font-black uppercase tracking-wider rounded-lg shadow-sm transform rotate-3"
                    >
                      BETA
                    </motion.div>
                  )}

                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    link={project.link}
                    github={project.github}
                    licenseRequired={project.licenseRequired}
                    index={index}
                  />
                </div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📂</div>
                <p className="text-gray-500 font-bold text-xl">No projects found in this category.</p>
                <p className="text-gray-400 mt-2">Try selecting a different filter.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-accent-2 border-4 border-border shadow-sticker"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">
              Interested in Working Together?
            </h2>
            <p className="text-white/90 font-medium mb-8 text-lg max-w-2xl mx-auto">
              I'm available for freelance projects and full-time opportunities.
              Let's build something amazing!
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-accent-2 font-black text-lg rounded-xl border-4 border-transparent hover:border-white shadow-lg hover:scale-105 transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
