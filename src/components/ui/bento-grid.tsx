import BorderIncard from "@/app/(home)/components/BorderIncard";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex items-center flex-wrap md:auto-rows-[18rem] max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento h-auto md:h-[82vh] hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col w-full md:w-[70vw] lg:w-[45vw] space-y-4",
        className
      )}
    >
      <div>
        <h1 className="text-base sm:text-xl md:text-2xl p-3">
          Hey there! I’m Ansley, a 20-year-old full-stack developer from India with a passion for building end-to-end web applications. 🚀 I love working across the stack—crafting sleek, responsive frontends and powering them with robust, scalable backends.        </h1>
      </div>

      <div className="mt-8">
        <BorderIncard />
      </div>

      <h1 className="text-2xl sm:text-3xl ml-4 mt-4">Experience</h1>
      <ul className="list-disc ml-6">
        <li className="mb-1">Served as a Tech Executive for the academic year 2023-2024 in SFIT Student Council</li>
        <li className="mb-1">Served as a PR Head for academic year 2024-2025 in ISTE SFIT</li>
      </ul>

      <div className="mt-8">
        <BorderIncard />
      </div>

      {/* <h1 className="text-2xl sm:text-3xl ml-4 mt-4">Achievement</h1>
      <ul className="list-disc ml-6">
        <li className="mb-1">Winner of Prakalp. <span className="text-gray-400">(An Institute Level Miniproject Competition)</span></li>
        <li className="mb-1">Runner-up of Pragati. <span className="text-gray-400">(An Institute Level Innovative-based Competition)</span></li>
        <li className="mb-1">Runner-up of prayas<span className="text-gray-400">(An Institute Level Business-based Competition)</span></li>
      </ul> */}
    </div>
  );
};
