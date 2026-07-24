"use client";

import { motion } from "framer-motion";
import WorkspaceHeader from "./WorkspaceHeader";
import SolutionPanel from "./SolutionPanel";
import AnalysisPanel from "./AnalysisPanel";
import RecommendationCards from "./ReccomendationCards";

export default function ShowcaseWorkspace() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-neutral-200
        bg-white/70
        p-8
        shadow-[0_30px_80px_rgba(0,0,0,0.05)]
        backdrop-blur-2xl

        dark:border-white/10
        dark:bg-white/[0.03]
        dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-orange-400/5
          blur-[120px]
        "
      />

      <div className="relative z-10">
        <WorkspaceHeader />

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.35fr_0.9fr]">
          {/* Solution */}

          <SolutionPanel />

          {/* Analysis */}

          <AnalysisPanel />
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-white/10" />

        <RecommendationCards />
      </div>
    </motion.div>
  );
}