"use client";
import React from "react";
import { Spotlight } from "../../../components/ui/Spotlight";
import { CoverDemo } from "../components/CoverDemo";
import DownloadResumeButton from "./DownloadResumeButton";
import { motion } from "framer-motion";

export function SpotlightPreview() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Enhanced Multiple Spotlights */}
      <Spotlight
        className="absolute top-[-5rem] left-0 
          sm:left-[10rem] sm:top-[-10rem]
          md:left-[20rem] md:top-[-8rem]"
        fill="white"
      />
      <Spotlight
        className="absolute top-10 right-[-10rem] 
          sm:right-[-5rem] 
          md:right-[15rem]"
        fill="purple"
      />
      <Spotlight
        className="absolute bottom-10 left-[50%] 
          md:left-[60%]"
        fill="blue"
      />
      
      {/* Enhanced Gradient Orbs with animations */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-pink-600/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/15 rounded-full blur-3xl"
      />
      
      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl flex flex-col justify-center items-center mx-auto relative z-10 w-full px-4 md:px-8 py-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <CoverDemo />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-neutral-300">
            Full-Stack Developer & Creative Problem Solver
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 text-center leading-relaxed px-4">
            Crafting exceptional digital experiences with modern technologies.
            <br className="hidden sm:block" />
            Passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 font-semibold">clean code</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 font-semibold">innovative solutions</span>.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 items-center z-20"
        >
          <DownloadResumeButton />
          <a 
            href="#projects"
            className="group px-8 py-3 rounded-lg border-2 border-neutral-700 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2, 
            delay: 1.5, 
            repeat: Infinity, 
            repeatDelay: 1
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-neutral-500 text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center relative">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}