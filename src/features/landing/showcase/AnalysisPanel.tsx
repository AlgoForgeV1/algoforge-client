"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { analysis } from "./data";

export default function AnalysisPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        h-full
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

      <div className="border-b border-neutral-200 px-6 py-5 dark:border-white/10">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
          AI Analysis
        </p>

        <h4 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
          Submission Insights
        </h4>

        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Generated automatically from your solution.
        </p>
      </div>

      {/* Analysis */}

      <div className="space-y-5 p-6">
        {analysis.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2 + index * 0.2,
              duration: 0.45,
            }}
            className="
              rounded-2xl
              border
              border-neutral-200
              bg-neutral-50/70
              p-5

              dark:border-white/10
              dark:bg-white/[0.02]
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  mt-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-500/10
                  text-orange-500
                "
              >
                <CheckCircle2 size={18} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.title}
                </p>

                <h5 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">
                  {item.value}
                </h5>

                {item.title === "Pattern" && (
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Efficient lookup strategy detected using a hash map.
                  </p>
                )}

                {item.title === "Complexity" && (
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Single pass traversal keeps runtime optimal.
                  </p>
                )}

                {item.title === "Time Taken" && (
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Includes reading, planning and implementation time.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Divider */}

        <div className="border-t border-neutral-200 pt-6 dark:border-white/10">
          <div className="rounded-2xl bg-orange-500/8 p-5">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Next Focus
            </p>

            <h4 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white">
              Sliding Window
            </h4>

            <p className="mt-2 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
              Based on your recent submissions, practicing Sliding Window
              problems will strengthen your pattern recognition and improve
              interview readiness.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}