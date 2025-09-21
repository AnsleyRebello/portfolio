import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid1";


export function SkillEducationCard() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: <h1 className="text-2xl  ">Education</h1>,
    description: <ul className="list-disc ml-5 "><li className="text-xl mt-6 font-bold">Higher Education</li>
    <h2 className="text-zinc-500">2020-2022</h2>

    <li className="text-xl mt-10 font-bold">B.Tech (Computer Engineering)</li>
    <h2 className="text-zinc-500" >2022-2026</h2>
    </ul>,
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
  },
  {
    title:<h1 className="text-2xl">Skills</h1>,
    description:  <ul className="list-disc ml-5 text-base "><li className="text-xl mt-6 font-bold">Frontend</li>
    <h2>HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS.</h2>
    <li className="text-xl mt-6 font-bold">Backend</li>
    <h2>JavaScript, Express, Nodejs, Java, Flask , Python.</h2></ul>,

    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-imac-bolt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.5 17h-9.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" /><path d="M3 13h13" /><path d="M8 21h5.5" /><path d="M10 17l-.5 4" /><path d="M19 16l-2 3h4l-2 3" /></svg>
  },
  {
    title: <h1 className="text-2xl">DevTools</h1>,
    description: <h1 className="text-xl mt-6 ">Git, Github, Vscode, Docker, Eclipse, Spring.</h1>,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-tool"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>,
  },
  {
    title: <h1 className="text-2xl">History</h1>,
    description:  <ul className="list-disc ml-5 text-sm "><li className="text-xl mt-3 font-bold">How My Coding Journey Started</li>
    <h2>It all started when I was in 9th grade and got my first laptop. Like any teenager, I was excited to explore it, and one of the first things I did was watch the Avengers movie. But something unexpected happened—my curiosity was sparked. I started wondering how such incredible visual effects, intricate technology, and seamless storytelling were brought to life on a screen.</h2>
    <h2>This curiosity led me down a rabbit hole of research. I began exploring how computers work, how software is built, and how technology powers the things we use every day. I found myself captivated by the potential of programming and how it enables us to create, innovate, and solve problems</h2></ul>
    ,
    header: <Skeleton />,
    className: "md:col-span-2",
    icon:<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-history"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8l0 4l2 2" /><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>
  },


];