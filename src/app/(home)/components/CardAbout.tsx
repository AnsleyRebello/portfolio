"use client";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import { 
  IconCode, 
  IconDeviceLaptop, 
  IconRocket, 
  IconBulb,
  IconUsers,
  IconTrophy 
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export interface CardItem {
  title: string;
  description: string;
  header: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
}

export function CardAbout(): JSX.Element {
  return (
    <BentoGrid
      className="max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-6"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              item.className,
              "flex flex-col justify-center items-start p-6 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
            )}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </BentoGrid>
  );
}

const SkillIcon: React.FC<{ icon: React.ReactNode; color: string }> = ({ icon, color }) => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 relative overflow-hidden border border-neutral-800 group-hover:border-purple-500/30 transition-all duration-300">
    {/* Animated gradient background */}
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
    
    {/* Icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="transform group-hover:scale-110 transition-transform duration-300 opacity-60 group-hover:opacity-100">
        <div className="w-16 h-16 md:w-20 md:h-20">
          {icon}
        </div>
      </div>
    </div>
    
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 bg-dot-white/[0.1]"></div>
  </div>
);

const items: CardItem[] = [
  {
    title: "Full-Stack Development",
    description: "Building end-to-end solutions with modern technologies like ReactJs, Angular, Next.js, Node.js, Spring Boot, Flask, and cloud platforms. Proficient in creating scalable applications.",
    header: <SkillIcon icon={<IconCode className="w-full h-full text-purple-400" />} color="from-purple-600/20 to-pink-600/20" />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <IconCode className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "Modern UI/UX Design",
    description: "Crafting beautiful, intuitive interfaces with attention to detail. Expert in Tailwind CSS, Framer Motion, and modern design principles.",
    header: <SkillIcon icon={<IconDeviceLaptop className="w-full h-full text-blue-400" />} color="from-blue-600/20 to-cyan-600/20" />,
    className: "md:col-span-1",
    icon: <IconDeviceLaptop className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Performance Optimization",
    description: "Delivering lightning-fast applications through code splitting, lazy loading, Docker containerization, and advanced caching strategies.",
    header: <SkillIcon icon={<IconRocket className="w-full h-full text-pink-400" />} color="from-pink-600/20 to-rose-600/20" />,
    className: "md:col-span-1",
    icon: <IconRocket className="h-5 w-5 text-pink-500" />,
  },
  {
    title: "Problem Solving",
    description: "Passionate about tackling complex challenges and finding elegant solutions. Strong foundation in algorithms, data structures, and system design with expertise in analytical thinking.",
    header: <SkillIcon icon={<IconBulb className="w-full h-full text-yellow-400" />} color="from-yellow-600/20 to-orange-600/20" />,
    className: "md:col-span-1",
    icon: <IconBulb className="h-5 w-5 text-yellow-500" />,
  },
  {
    title: "Collaborative Mindset",
    description: "Experienced in Agile methodologies, code reviews, and working with cross-functional teams to deliver quality products.",
    header: <SkillIcon icon={<IconUsers className="w-full h-full text-green-400" />} color="from-green-600/20 to-emerald-600/20" />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Continuous Learning",
    description: "Always staying updated with the latest technologies and best practices. Committed to writing clean, maintainable code.",
    header: <SkillIcon icon={<IconTrophy className="w-full h-full text-orange-400" />} color="from-orange-600/20 to-amber-600/20" />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <IconTrophy className="h-5 w-5 text-orange-500" />,
  },
];
