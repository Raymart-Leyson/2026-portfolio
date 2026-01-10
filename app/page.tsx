"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedButton from "@/components/AnimatedButton";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  progressBar,
} from "@/lib/animations";
import { getFeaturedProjects } from "@/lib/projectsData";
import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const skills = [
    { name: "Next.js / React / TypeScript", level: 92 },
    { name: "ASP.NET Core / C#", level: 90 },
    { name: "Java / Spring Boot", level: 85 },
    { name: "Tailwind CSS / UI/UX", level: 88 },
    { name: "Node.js / MongoDB / SQL", level: 85 },
    { name: "OpenAI / AI Integration", level: 82 },
    { name: "Payment APIs / Authentication", level: 87 },
    { name: "SEO / Web Performance", level: 84 },
  ];

  // Get featured projects from data
  const featuredProjects = getFeaturedProjects().slice(0, 3);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured. Missing env variables.");
      }

      const templateParams = {
        // Align with your EmailJS template fields
        name: formState.name,
        email: formState.email,
        message: formState.message,
        title: "Portfolio Contact",
      };

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setSubmitStatus({ ok: true, msg: "Message sent! I'll get back to you shortly." });
      setFormState({ name: "", email: "", message: "" });
    } catch (err: any) {
      setSubmitStatus({ ok: false, msg: err?.message || "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Greeting */}
              <motion.p
                variants={fadeInUp}
                className="text-purple-400 text-lg mb-6 font-mono"
              >
                Welcome, I'm
              </motion.p>

              {/* Name - Animated letter by letter */}
              <div className="mb-6">
                <AnimatedText
                  text="Raymart Leyson"
                  className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                  el="h1"
                />
              </div>

              {/* Tagline */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8"
              >
                Software Engineer | Full Stack Developer
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Full Stack Developer from Cebu City with enterprise experience at Accenture and founder of RNLStudio. 
                Building production-ready solutions from AI learning platforms and secure payment systems to business management tools 
                and modern landing pages—powered by Next.js, ASP.NET Core, and cutting-edge web technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <AnimatedButton variant="primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  View My Work
                </AnimatedButton>
                <AnimatedButton variant="secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Get In Touch
                </AnimatedButton>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
              >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-white rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Computer Science graduate</strong> from Cebu Institute of Technology University with professional 
                  experience at <strong className="text-white">Accenture</strong> as a Full Stack Developer and QA Engineer, alongside running 
                  <strong className="text-white"> RNLStudio</strong>, a freelance venture delivering custom web solutions to clients.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My portfolio spans diverse domains: <strong className="text-white">AI-powered learning tools</strong> using OpenAI for automated 
                  study materials, <strong className="text-white">secure payment platforms</strong> with PayMongo integration, 
                  <strong className="text-white"> business management systems</strong> with MongoDB, and <strong className="text-white">landing pages</strong> for 
                  local businesses. On the backend, I've architected multiple <strong className="text-white">ASP.NET Core REST APIs</strong> with 90%+ test coverage 
                  and built <strong className="text-white">full-stack applications</strong> integrating computer vision with .NET.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From enterprise solutions to freelance projects, I thrive on delivering scalable, production-ready applications. 
                  My experience includes Next.js/React frontends, ASP.NET/Node.js backends, SQL/MongoDB databases, 
                  and modern tools like TypeScript, Tailwind CSS, and Framer Motion for exceptional user experiences.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-purple-500/30"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-purple-500"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <p className="text-purple-400 font-mono text-sm mb-1">{item.year}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 font-semibold mb-2">{item.company}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Education
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-8">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full"
                  >
                    <span className="text-purple-300 font-mono text-sm">Graduated Jun 2024</span>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
                  <p className="text-xl text-purple-300 mb-4">Cebu Institute of Technology University</p>
                  <p className="text-gray-400 leading-relaxed">
                    Comprehensive curriculum covering software development, algorithms, data structures, 
                    and modern web technologies. Completed multiple real-world projects including API development, 
                    machine learning applications, and full-stack web solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Skills & Technologies
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-gray-400 font-mono">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, delay: index * 0.1 + 1, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Tech Stack */}
            {/* Key Achievements */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 mb-12"
            >
              <h3 className="text-2xl font-bold text-center text-white mb-8">Key Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">12+</div>
                  <div className="text-gray-300">Production Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-pink-600/10 to-transparent border border-pink-500/20 text-center"
                >
                  <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
                  <div className="text-gray-300">Live Applications</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">7+</div>
                  <div className="text-gray-300">Client Solutions Delivered</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Additional Tech Stack */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-gray-400 mb-6">Additional Technologies & Tools:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Angular", "Bootstrap", "Tailwind", "Selenium", "Figma", "Git", "Eclipse", "Machine Learning"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
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

            {/* View More */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/projects">
                <AnimatedButton variant="ghost">
                  View All {getFeaturedProjects().length}+ Projects →
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Let's Work Together
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
            >
              Open to discussing full-time opportunities, freelance projects, or collaborative ventures. 
              I bring expertise in full-stack development, API architecture, and quality assurance 
              to deliver robust, scalable solutions.
            </motion.p>

            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Field */}
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUp}>
                <AnimatedButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </AnimatedButton>
              </motion.div>

              {/* Submission Status */}
              {submitStatus && (
                <motion.div
                  variants={fadeInUp}
                  className={`mt-4 p-4 rounded-lg text-center border ${
                    submitStatus.ok
                      ? "bg-green-600/10 border-green-500/30 text-green-300"
                      : "bg-red-600/10 border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.msg}
                </motion.div>
              )}
            </motion.form>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 flex justify-center gap-6"
            >
              {[
                { name: "GitHub", url: "https://github.com/Raymart-Leyson" },
                { name: "LinkedIn", url: "https://linkedin.com/in/raymart-leyson" },
                { name: "RNLStudio", url: "https://www.rnlstudio.online" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-lg"
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center text-gray-500"
          >
            <p>© 2026 Raymart Leyson. Built with Next.js and Framer Motion.</p>
          </motion.div>
        </footer>
      </div>
    </PageTransition>
  );
}

