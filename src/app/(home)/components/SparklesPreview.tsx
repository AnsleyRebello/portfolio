"use client";
import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";
import { motion } from "framer-motion";

export function SparklesPreview() {
  return (
    <div id="projects" className="w-full cursor-default bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center relative z-20 mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Featured Projects
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl text-neutral-300 max-w-4xl mx-auto px-4 leading-relaxed"
        >
          A showcase of my <span className="text-purple-400 font-semibold">creative work</span> and <span className="text-pink-400 font-semibold">technical expertise</span>
        </motion.p>
      </motion.div>

      <div className="w-full max-w-[60rem] h-44 relative">
        {/* Enhanced Gradients with staggered animations */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[3px] w-3/4 blur-sm"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[6px] w-1/4 blur-sm"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[2px] w-1/4"
        />

        {/* Core component with enhanced settings */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.5}
          particleDensity={1500}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(400px_220px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
