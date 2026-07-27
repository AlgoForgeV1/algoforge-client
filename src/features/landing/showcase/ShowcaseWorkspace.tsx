"use client";

import { motion } from "framer-motion";
import WorkspaceHeader from "./WorkspaceHeader";
import SolutionPanel from "./SolutionPanel";
import AnalysisPanel from "./AnalysisPanel";
import RecommendationCards from "./ReccomendationCards";

export default function ShowcaseWorkspace() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200
        bg-white/70
        p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.05)]
        backdrop-blur-2xl

        dark:border-white/10
        dark:bg-white/[0.03]
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10">
        <WorkspaceHeader />

        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            <SolutionPanel />
            <AnalysisPanel />
          </div>

          <RecommendationCards />
        </div>
      </div>
    </motion.div>
  );
}