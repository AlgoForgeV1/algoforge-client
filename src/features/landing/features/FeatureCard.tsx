"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

import type { Feature } from "./features";

interface FeatureCardProps {
  feature: Feature;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function FeatureCard({
  feature,
  active,
  onHover,
  onLeave,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={false}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group relative h-full w-full rounded-2xl border p-5 transition-colors duration-300",

        // Light Theme
        "border-zinc-200 bg-white/70",

        // Dark Theme
        "dark:border-white/10 dark:bg-white/[0.05]",

        active
          ? "border-orange-400 dark:border-orange-400"
          : "hover:border-orange-300 dark:hover:border-orange-500/30"
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300",

            active
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
          )}
        >
          <Icon size={18} />
        </div>

        <ArrowUpRight
          size={16}
          className="
            text-zinc-400
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      <div className="mt-4 space-y-1.5">
        <h3
          className="
            text-base
            font-semibold
            tracking-tight
            text-zinc-900
            dark:text-white
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            text-sm
            leading-6
            text-zinc-600
            dark:text-zinc-400
          "
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}