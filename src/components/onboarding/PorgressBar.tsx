"use client";

import { motion } from "framer-motion";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: Props) {
  const progress = (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
            Onboarding
          </p>

          <h2 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
            Build your profile
          </h2>
        </div>

        <div className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
          {current} / {total}
        </div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <motion.div
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-[#FF9324] to-orange-500"
        />
      </div>
    </div>
  );
}