"use client";

import { motion } from "framer-motion";
import ShowcaseWorkspace from "./ShowcaseWorkspace";

export default function ShowcaseSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-1
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[180px]

          dark:bg-orange-500/5
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

       

        {/* Workspace */}

        <div className="mt-2">
          <ShowcaseWorkspace />
        </div>
      </div>
    </section>
  );
}