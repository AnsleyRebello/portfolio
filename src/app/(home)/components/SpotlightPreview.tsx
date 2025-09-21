"use client";
import React from "react";
import { Spotlight } from "../../../components/ui/Spotlight";
import { CoverDemo } from "../components/CoverDemo";
import DownloadResumeButton from "./DownloadResumeButton";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Spotlight component with adjusted positioning for mobile */}
      <Spotlight
        className="absolute top-[5rem] left-[-1rem] 
          xs:left-[2rem] xs:top-[-2rem]
          sm:left-[5rem] sm:top-[-7rem]
          md:left-[15rem] md:top-[-5rem]"
        fill="white"
      />
      
      {/* Main Content */}
      <div className="max-w-7xl flex flex-col justify-center items-center mx-auto relative z-10 w-full px-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <CoverDemo />
          <br />
        </h1>
        <h2 className="font-normal mt-4 text-xs sm:text-sm md:text-base text-neutral-300 max-w-lg text-center mx-auto">
          Web Developer | Tech Enthusiast
        </h2>
        <div className="mt-4 sm:mt-5">
          <DownloadResumeButton />
        </div>
      </div>
    </div>
  );
}