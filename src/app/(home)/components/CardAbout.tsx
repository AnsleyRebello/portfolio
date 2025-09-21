import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import { IconClipboardCopy } from "@tabler/icons-react";

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
      className="max-w-4xl h-auto mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xxl:grid-cols-2 gap-4 w-full p-4 justify-center items-center"
    >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(
            item.className,
            "flex flex-col justify-center items-center p-4 rounded-lg bg-neutral-100 dark:bg-black text-sm" // Decreased font size
          )}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton: React.FC = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items: CardItem[] = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2 lg:col-span-1", // Larger span for medium screens, single column for large screens
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
