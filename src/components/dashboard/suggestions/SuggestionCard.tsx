"use client";

import { motion } from "framer-motion";

import DashboardButton from "../../ui/dashboard-button";

interface SuggestionCardProps {
  emoji: string;
  badge: string;
  title: string;
  description: string;
  action: string;
  index: number;
}

export default function SuggestionCard({
  emoji,
  badge,
  title,
  description,
  action,
  index,
}: SuggestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
      className="
        group
        flex
        h-full
        min-h-[260px]
        flex-col
        rounded-3xl
        border
        border-black/5
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500/20
        dark:border-white/5
        dark:bg-white/[0.02]
      "
    >
      {/* Top row: emoji tile + badge, vertically centered together */}
      <div className="flex items-center justify-between">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-zinc-100
            text-2xl
            leading-none
            dark:bg-white/5
          "
        >
          {emoji}
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-black/5
            bg-zinc-100
            px-3
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-zinc-500
            dark:border-white/5
            dark:bg-white/5
            dark:text-zinc-400
          "
        >
          {badge}
        </span>
      </div>

      {/* Text block */}
      <div className="mt-6 flex-1">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>

      {/* Action always pinned to bottom, same offset every card */}
      <div className="mt-6">
        <DashboardButton className="w-full">
          {action}
        </DashboardButton>
      </div>
    </motion.div>
  );
}