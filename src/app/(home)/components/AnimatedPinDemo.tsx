"use client";
import React from "react";
import Image from "next/image";
import data from "../../../static/Info.json";
import { PinContainer } from "../../../components/ui/3d-pin";
import { motion } from "framer-motion";

export function AnimatedPinDemo() {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center py-12 lg:py-20 lg:w-[85vw]">
      {/* Responsive Grid with improved spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 w-full px-4 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <PinContainer title={item.title} href={item.href}>
              <div className="flex flex-col justify-between p-6 tracking-tight text-slate-100/50 w-full max-w-[22rem] h-auto sm:max-w-[20rem] sm:h-[26rem] lg:w-[26rem] lg:h-[28rem] rounded-xl shadow-2xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
                {/* Title */}
                <h3 className="font-bold text-base sm:text-lg text-slate-100 max-w-full !pb-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <div className="text-sm sm:text-base font-normal !m-0 !p-0 mb-4">
                  <span className="text-slate-400">{item.des}</span>
                </div>

                {/* Image with overlay effect */}
                <div className="relative flex flex-1 w-full mt-4 rounded-lg overflow-hidden group">
                  <Image
                    width={1000}
                    height={1000}
                    priority={true}
                    src={item.imageLink}
                    alt={item.title}
                    className="object-cover w-full h-auto sm:h-[12rem] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold">View Project →</span>
                  </div>
                </div>
                
                {/* Tech Stack or Additional Info */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    Full Stack
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    Modern UI
                  </span>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
