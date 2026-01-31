"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full flex flex-col"
    >
      <motion.div
        whileHover={!shouldReduceMotion ? { y: -8, scale: 1.02 } : {}}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`
            relative flex flex-col h-full
            rounded-2xl bg-white 
            border-4 border-border-main 
            shadow-sticker hover:shadow-sticker-lg 
            transition-all duration-300
            p-0 overflow-hidden
        `}
      >
        {/* Image preview (if provided) */}
        {image && (
          <div className="relative h-48 w-full border-b-4 border-border-main bg-gray-100 overflow-hidden">
            <motion.div
              animate={isHovered && !shouldReduceMotion ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.4 }}
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
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-gray-800 font-medium mb-6 leading-relaxed flex-grow">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-accent-2/30 text-xs font-bold text-foreground border-2 border-accent-2"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(link || github) && (
            <div className="flex gap-4 pt-4 border-t-2 border-border-main/10 mt-auto">
              {link && !licenseRequired && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-foreground hover:text-accent-1 transition-colors flex items-center gap-1 group/link"
                >
                  View Project
                  <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              )}

              {link && licenseRequired && (
                <LicenseButton url={link} title={title} />
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-500 hover:text-foreground transition-colors flex items-center gap-1 group/git"
                >
                  GitHub
                  <span className="inline-block transition-transform group-hover/git:translate-x-1">→</span>
                </a>
              )}
            </div>
          )}
        </div>
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
        className="text-sm font-bold text-yellow-600 hover:text-yellow-500 transition-colors flex items-center gap-1"
      >
        Enter License →
      </button>
      <LicenseModal open={open} onClose={() => setOpen(false)} url={url} title={title} />
    </>
  );
}
