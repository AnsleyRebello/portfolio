"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid1";
import { motion } from "framer-motion";

export function SkillEducationCard() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] px-4 py-12">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-neutral-800 group-hover:border-purple-500/30 transition-all duration-300"></div>
);

const items = [
  {
    title: <h2 className="text-2xl font-bold gradient-text">Education</h2>,
    description: (
      <ul className="space-y-6 mt-4">
        <li>
          <h3 className="text-lg font-semibold text-white mb-1">Higher Secondary Education</h3>
          <p className="text-neutral-400 text-sm">2020 - 2022</p>
          <p className="text-neutral-500 text-sm mt-1">Completed with focus on Science and Mathematics</p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-white mb-1">B.Tech (Computer Engineering)</h3>
          <p className="text-neutral-400 text-sm">2022 - 2026 (Expected)</p>
          <p className="text-neutral-500 text-sm mt-1">Specializing in Full-Stack Development & AI</p>
        </li>
      </ul>
    ),
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    )
  },
  {
    title: <h2 className="text-2xl font-bold gradient-text">Technical Skills</h2>,
    description: (
      <ul className="space-y-4 mt-4">
        <li>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {['ReactJs', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Tkinter'].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30">
                {skill}
              </span>
            ))}
          </div>
        </li>
        <li>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'Express', 'Spring Boot', 'Flask', 'Python'].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-md border border-pink-500/30">
                {skill}
              </span>
            ))}
          </div>
        </li>
      </ul>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    )
  },
  {
    title: <h2 className="text-2xl font-bold gradient-text">Data Structures & Algorithms</h2>,
    description: (
      <div className="mt-4">
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          Strong foundation in DSA with problem-solving experience across various platforms.
        </p>
        <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Java', 'Python'].map((lang) => (
            <span key={lang} className="px-3 py-1.5 bg-green-500/20 text-green-300 text-sm rounded-md border border-green-500/30 hover:bg-green-500/30 transition-colors">
              {lang}
            </span>
          ))}
        </div>
      </div>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
    )
  },
  {
    title: <h2 className="text-2xl font-bold gradient-text">Dev Tools</h2>,
    description: (
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Postman', 'Render', 'Railway', 'Vercel'].map((tool) => (
            <span key={tool} className="px-3 py-1.5 bg-blue-500/20 text-blue-300 text-sm rounded-md border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
              {tool}
            </span>
          ))}
        </div>
        <p className="text-neutral-500 text-sm mt-4">
          Proficient with modern development tools and cloud deployment platforms
        </p>
      </div>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
      </svg>
    )
  },
  {
    title: <h2 className="text-2xl font-bold gradient-text">My Journey</h2>,
    description: (
      <div className="space-y-3 mt-4">
        <h3 className="text-base font-semibold text-white">How My Coding Journey Started</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          It all started in 9th grade when I got my first laptop. While watching the Avengers movie, 
          I became fascinated by the incredible visual effects and technology behind it. This curiosity 
          sparked my journey into programming.
        </p>
        <p className="text-neutral-400 text-sm leading-relaxed">
          I began exploring how computers work, how software is built, and how technology powers everything 
          we use daily. This fascination led me to programming, where I discovered the power to create, 
          innovate, and solve real-world problems through code.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
            Passionate Learner
          </span>
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">
            Problem Solver
          </span>
        </div>
      </div>
    ),
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 8l0 4l2 2" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
      </svg>
    )
  }
];