"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { recommendations } from "./data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function RecommendationCards() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-500">
          Recommended
        </p>
        <h3 className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
          Continue Progress
        </h3>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 flex flex-1 flex-col gap-3"
      >
        {recommendations.map((problem) => (
          <motion.div
            key={problem.id}
            variants={item}
            whileHover={{ x: 3 }}
            className="
              group relative cursor-pointer overflow-hidden rounded-xl
              border border-neutral-200 bg-neutral-50/70 p-3
              transition-colors duration-200
              hover:border-orange-500/20 hover:bg-orange-500/5

              dark:border-white/10 dark:bg-white/[0.02]
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <Sparkles size={14} />
              </div>
              <ArrowUpRight
                size={16}
                className="text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500"
              />
            </div>

            <h4 className="mt-2 text-sm font-semibold text-neutral-900 dark:text-white">
              {problem.title}
            </h4>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              {problem.topic}
            </p>

            <span className="mt-2 inline-block rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-medium text-orange-600 dark:text-orange-400">
              {problem.difficulty}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}