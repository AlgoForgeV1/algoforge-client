"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Clock3, Code2 } from "lucide-react";
import { solution } from "./data";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.05 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function SolutionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-neutral-200
        bg-white/70
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-white/[0.03]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500">
            Solution
          </p>
          <h4 className="mt-0.5 text-sm font-semibold text-neutral-900 dark:text-white">
            Two Sum
          </h4>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700 dark:bg-white/5 dark:text-neutral-300">
            <Code2 size={12} />
            Java
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={12} />
            Solved
          </div>
          <div className="flex items-center gap-1 text-[11px] text-neutral-400">
            <Clock3 size={12} />
            8m 42s
          </div>
        </div>
      </div>

      {/* Code */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-0.5 p-4 font-mono text-[12.5px] leading-[22px]"
      >
        {solution.map((l) => (
          <motion.div
            key={l.id}
            variants={line}
            className={`
              flex rounded-lg px-2 transition-colors
              ${
                l.highlight
                  ? "bg-orange-500/10"
                  : "hover:bg-neutral-100 dark:hover:bg-white/5"
              }
            `}
          >
            <span className="mr-4 w-4 shrink-0 select-none text-right text-neutral-400 dark:text-neutral-600">
              {l.id}
            </span>
            <span
              className={`whitespace-pre ${
                l.highlight
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-neutral-700 dark:text-neutral-300"
              }`}
            >
              {l.text || " "}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}