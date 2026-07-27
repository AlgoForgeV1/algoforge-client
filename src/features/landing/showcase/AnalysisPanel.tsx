"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { analysis } from "./data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function AnalysisPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="
        rounded-2xl
        border
        border-neutral-200
        bg-white/70
        p-4
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-white/[0.03]
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-3"
      >
        {analysis.map((a) => (
          <motion.div
            key={a.id}
            variants={item}
            className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-3 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
              <CheckCircle2 size={14} />
            </div>
            <p className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400">
              {a.title}
            </p>
            <h5 className="text-sm font-semibold text-neutral-900 dark:text-white">
              {a.value}
            </h5>
          </motion.div>
        ))}
      </motion.div>

      {/* Next focus strip */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 flex items-center justify-between rounded-xl bg-orange-500/8 px-4 py-2.5"
      >
        <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
          Next Focus
        </span>
        <span className="text-sm font-semibold text-neutral-900 dark:text-white">
          Sliding Window
        </span>
      </motion.div>
    </motion.div>
  );
}