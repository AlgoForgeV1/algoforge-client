"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Code2 } from "lucide-react";
import { solution } from "./data";

export default function SolutionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white/70
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-white/[0.03]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-neutral-200
          px-6
          py-5

          dark:border-white/10
        "
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
            Solution
          </p>

          <h4 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
            Two Sum
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-neutral-100
              px-3
              py-2
              text-xs
              font-medium
              text-neutral-700

              dark:bg-white/5
              dark:text-neutral-300
            "
          >
            <Code2 size={14} />
            Java
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-emerald-500/10
              px-3
              py-2
              text-xs
              font-medium
              text-emerald-600

              dark:text-emerald-400
            "
          >
            <CheckCircle2 size={14} />
            Solved
          </div>
        </div>
      </div>

      {/* Meta */}

      <div
        className="
          flex
          items-center
          gap-6
          border-b
          border-neutral-200
          px-6
          py-4
          text-sm

          dark:border-white/10
        "
      >
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
          <Clock3 size={16} />
          Today
        </div>

        <span className="text-neutral-300 dark:text-neutral-700">•</span>

        <span className="text-neutral-500 dark:text-neutral-400">
          8m 42s
        </span>
      </div>

      {/* Code */}

      <div
        className="
          space-y-1
          p-6
          font-mono
          text-[14px]
          leading-8
        "
      >
        {solution.map((line, index) => (
          <motion.div
            key={line.id}
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className={`
              flex
              rounded-xl
              px-3
              transition-all

              ${
                line.highlight
                  ? "bg-orange-500/10"
                  : "hover:bg-neutral-100 dark:hover:bg-white/5"
              }
            `}
          >
            <span
              className="
                mr-5
                w-6
                text-right
                select-none
                text-neutral-400
                dark:text-neutral-600
              "
            >
              {line.id}
            </span>

            <span
              className={`
                whitespace-pre

                ${
                  line.highlight
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-neutral-700 dark:text-neutral-300"
                }
              `}
            >
              {line.text || " "}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}