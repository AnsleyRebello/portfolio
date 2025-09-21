import React from "react";
import { Cover } from "../../../components/ui/cover";

export function CoverDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-8">
      {/* Responsive heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-20 md:mt-90 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Ansley <Cover>Rebello</Cover>
      </h1>
    </div>
  );
}
