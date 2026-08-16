"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Target } from "lucide-react";

interface Props {
  experienceLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
}

const levels = {
  BEGINNER: {
    title: "Apprentice",
    description: "Building strong programming fundamentals.",
    progress: 30,
    stroke: "#10b981",
    next: "Engineer",
  },
  INTERMEDIATE: {
    title: "Engineer",
    description: "Comfortable solving medium-level problems.",
    progress: 65,
    stroke: "#FF9324",
    next: "Architect",
  },
  ADVANCED: {
    title: "Architect",
    description: "Designing scalable systems, solving hard problems.",
    progress: 100,
    stroke: "#8b5cf6",
    next: "Max level",
  },
};

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ExperienceCard({ experienceLevel }: Props) {
  const level = levels[experienceLevel];
  const offset = CIRCUMFERENCE - (level.progress / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.4 }}
      className="
        rounded-[28px]
        border
        border-zinc-200/70
        bg-white/80
        p-7
        shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-28px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        dark:border-white/5
        dark:bg-zinc-900/60
      "
    >
      <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
        Developer level
      </p>

      <div className="mt-6 flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 112 112" className="h-28 w-28 -rotate-90">
            <circle
              cx="56"
              cy="56"
              r={RADIUS}
              fill="none"
              strokeWidth="8"
              className="stroke-zinc-100 dark:stroke-white/[0.06]"
            />
            <motion.circle
              cx="56"
              cy="56"
              r={RADIUS}
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              stroke={level.stroke}
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {level.progress}%
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            {level.title}
          </h3>
          <p className="mt-2 text-[13.5px] leading-6 text-zinc-500 dark:text-zinc-400">
            {level.description}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        <div className="flex items-center justify-between rounded-2xl bg-zinc-50/80 px-4 py-3.5 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2.5">
            <ArrowUpRight size={16} className="text-[#FF9324]" />
            <span className="text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300">
              Next level
            </span>
          </div>
          <span className="text-[13.5px] font-semibold text-zinc-900 dark:text-white">
            {level.next}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-zinc-50/80 px-4 py-3.5 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2.5">
            <Target size={16} className="text-[#FF9324]" />
            <span className="text-[13.5px] font-medium text-zinc-600 dark:text-zinc-300">
              Focus
            </span>
          </div>
          <span className="text-[13.5px] font-semibold text-zinc-900 dark:text-white">
            DSA practice
          </span>
        </div>
      </div>
    </motion.div>
  );
}