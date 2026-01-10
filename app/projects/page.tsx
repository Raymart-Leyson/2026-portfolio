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
            <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 group">
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
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                All Projects
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-400 max-w-3xl mb-8"
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
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-purple-400">{stats.total}</div>
                  <div className="text-sm text-gray-400">Total Projects</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-green-400">{stats.live}</div>
                  <div className="text-sm text-gray-400">Live Projects</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400">{stats.categories}</div>
                  <div className="text-sm text-gray-400">Categories</div>
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
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
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
                <div key={project.id} className="relative">
                  {/* Status Badge */}
                  {project.status === "live" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute -top-3 -right-3 z-10 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full"
                    >
                      LIVE
                    </motion.div>
                  )}
                  {project.status === "beta" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute -top-3 -right-3 z-10 px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full"
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
                <p className="text-gray-400 text-xl">No projects found in this category.</p>
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
            className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              I'm available for freelance projects and full-time opportunities. 
              Let's build something amazing!
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Get In Touch
            </Link>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
