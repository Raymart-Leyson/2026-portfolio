"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useState } from "react";
import { useIsMobile } from "@/components/hooks/useIsMobile";
import Image from "next/image";
import LicenseModal from "@/components/LicenseModal";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  index: number;
  licenseRequired?: boolean;
}

/**
 * ProjectCard - Animated card component for showcasing projects
 * Features hover effects, scale animations, and glassmorphism design
 */
export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  github,
  index,
  licenseRequired,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        initial={{ scale: 1, y: 0 }}
        whileHover={{ scale: isMobile ? 1.01 : 1.02, y: isMobile ? -4 : -8 }}
        transition={{ duration: isMobile ? 0.25 : 0.3, ease: [0.22, 1, 0.36, 1] as any }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6 h-full"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image preview (if provided) */}
        {image && (
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-white/5">
            <motion.div
              animate={{ scale: isHovered ? (isMobile ? 1.03 : 1.1) : 1 }}
              transition={{ duration: isMobile ? 0.5 : 0.6, ease: [0.22, 1, 0.36, 1] as any }}
              className="w-full h-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * (isMobile ? 0.03 : 0.05) }}
                viewport={{ once: true }}
                className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/10"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          {(link || github) && (
            <div className="flex gap-3 pt-4 border-t border-white/10">
              {link && !licenseRequired && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                  whileHover={{ x: isMobile ? 2 : 3 }}
                  transition={{ duration: isMobile ? 0.15 : 0.2 }}
                >
                  View Project →
                </motion.a>
              )}

              {link && licenseRequired && (
                <LicenseButton url={link} title={title} />
              )}

              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-1"
                  whileHover={{ x: isMobile ? 2 : 3 }}
                  transition={{ duration: isMobile ? 0.15 : 0.2 }}
                >
                  GitHub →
                </motion.a>
              )}
            </div>
          )}
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full"
          animate={{
            opacity: isHovered ? (isMobile ? 0.8 : 1) : 0,
            scale: isHovered ? (isMobile ? 0.9 : 1) : 0.5,
          }}
          transition={{ duration: isMobile ? 0.3 : 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

function LicenseButton({ url, title }: { url: string; title?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1"
      >
        Enter License →
      </button>
      <LicenseModal open={open} onClose={() => setOpen(false)} url={url} title={title} />
    </>
  );
}
