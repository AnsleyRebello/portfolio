"use client";
import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";

export function AboutHeader() {
  return (
    <div id="about" className="w-full cursor-default bg-black flex flex-col items-center justify-center overflow-hidden rounded-md p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center text-white relative z-20">
        About
      </h1>

      <div className="w-full max-w-[50rem] h-32 sm:h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] sm:h-[3px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px sm:h-[2px] w-3/4" />
        <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] sm:h-[5px] w-1/2 sm:w-1/4 blur-sm" />
        <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 sm:w-1/4" />

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
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
