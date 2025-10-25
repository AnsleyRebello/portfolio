"use client";
import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";
import { motion } from "framer-motion";

export function SkillEdu() {
  return (
    <div className="w-full cursor-default bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white relative z-20 mb-6">
          Skills & Education
        </h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto px-4">
          A showcase of my technical expertise and academic background
        </p>
      </motion.div>

      <div className="w-full max-w-[50rem] h-40 relative">
        {/* Enhanced Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
