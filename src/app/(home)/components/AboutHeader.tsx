"use client";
import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";
import { motion } from "framer-motion";

export function AboutHeader() {
  return (
    <div id="about" className="w-full cursor-default bg-black flex flex-col items-center justify-center overflow-hidden rounded-md p-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center relative z-20 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
              About Me
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl text-neutral-300 max-w-4xl mx-auto px-4 leading-relaxed"
        >
          I&apos;m a passionate <span className="text-purple-400 font-semibold">full-stack developer</span> dedicated to creating impactful digital experiences. 
          <br className="hidden sm:block" />
          With expertise in modern web technologies and a keen eye for design, 
          <br className="hidden sm:block" />
          I transform <span className="text-pink-400 font-semibold">complex problems</span> into <span className="text-blue-400 font-semibold">elegant solutions</span>.
        </motion.p>
      </motion.div>

      <div className="w-full max-w-[60rem] h-40 sm:h-48 relative">
        {/* Enhanced Gradients with animations */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[3px] w-3/4 blur-sm"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[5px] w-1/2 sm:w-1/4 blur-sm"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[2px] w-1/2 sm:w-1/4"
        />

        {/* Core component with enhanced density */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1500}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_180px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(400px_240px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
