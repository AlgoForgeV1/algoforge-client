"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { recommendations } from "./data";

export default function RecommendationCards() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          Recommended Next
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">
          Continue Your Progress
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          Based on this solution, these problems will reinforce the same
          concepts while gradually increasing the difficulty.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {recommendations.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15 * index,
              duration: 0.45,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-neutral-200
              bg-white/70
              p-6
              backdrop-blur-xl
              transition-all
              duration-300

              hover:border-orange-500/20
              hover:shadow-xl
              hover:shadow-orange-500/10

              dark:border-white/10
              dark:bg-white/[0.03]
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                bg-orange-500/10
                blur-3xl
                transition-opacity
                duration-300
                opacity-0

                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <Sparkles size={22} />
                </div>

                <ArrowUpRight
                  size={20}
                  className="
                    text-neutral-400
                    transition-transform
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-orange-500
                  "
                />
              </div>

              <h4 className="mt-6 text-lg font-semibold text-neutral-900 dark:text-white">
                {problem.title}
              </h4>

              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {problem.topic}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span
                  className="
                    rounded-full
                    bg-orange-500/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-orange-600

                    dark:text-orange-400
                  "
                >
                  {problem.difficulty}
                </span>

                <span className="text-sm text-neutral-400">
                  Practice →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}