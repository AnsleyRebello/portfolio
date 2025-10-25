"use client";
import React from "react";
import { BackgroundLines } from "../../../components/ui/background-lines";
import { motion } from "framer-motion";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-20 min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Something Amazing?
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
          Whether you&apos;re looking to build a new project from scratch, 
          need help with an existing application, or just want to chat about tech—
          I&apos;m always excited to connect with fellow developers and creators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:ansleyrebello@example.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </BackgroundLines>
  );
}
