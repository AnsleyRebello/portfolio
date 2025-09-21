"use client";
import React from "react";
import { SparklesCore } from "../../../app/(home)/components/SparklesPreview";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function SparklesPreviews() {
  return (
    <section id="#home">
      <div className="h-[80vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        {/* Particle Background */}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Glassmorphic Card */}
        <div id="connect"
          className="rounded-lg flex flex-col items-center justify-center bg-gray-700 bg-opacity-50 
          backdrop-blur-md text-white w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] p-8 shadow-xl z-10"
        >
          {/* Title Section */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold  sm:text-3xl ">Let&apos;s Connect</h1>
            <h2 className="text-sm font-light sm:text-xl mt-1">Feel Free To Connect</h2>
          </div>

          {/* Email Button */}
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=rahulvish194002@gmail.com">

          <button 
            className="rounded-xl text-sm bg-slate-300 p-3 w-full sm:w-60 flex justify-center items-center 
            text-stone-500 font-bold hover:bg-slate-400 transition-colors mb-6"
          >
            Email
         
            <IconMail className="ml-2" />
          </button>
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/susu-%E8%A4%A4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="p-3 bg-gray-600 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="https://github.com/AnsleyRebello"
              className="p-3 bg-gray-600 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://x.com/AnsleyRebello"
              className="p-3 bg-gray-600 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <IconBrandTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
