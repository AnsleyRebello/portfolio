"use client";
import React from "react";
import { Cover } from "../../../components/ui/cover";
import { motion } from "framer-motion";

export function CoverDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-8">
      {/* Responsive heading with enhanced animations */}
      <motion.h1 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.6, 0.05, 0.01, 0.9],
          delay: 0.1
        }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold max-w-7xl mx-auto text-center relative z-20"
      >
        <Cover>Ansley Rebello</Cover>
      </motion.h1>
      
      {/* Subtle tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-base md:text-xl text-neutral-400 text-center max-w-2xl"
      >
        Building the future, one line of code at a time
      </motion.p>
    </div>
  );
}
