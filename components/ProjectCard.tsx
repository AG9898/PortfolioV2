"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-neutral-900 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      <img src={image} alt={title} className="w-full max-h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </motion.div>
  );
}
