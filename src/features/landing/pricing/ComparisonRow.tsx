"use client";

import { Check, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface LockedValue {
  locked: boolean;
  label: string;
}

interface ComparisonRowProps {
  icon: React.ElementType;
  title: string;
  description: string;
  free: boolean | string | LockedValue;
  pro: boolean | string;
}

function Cell({
  value,
}: {
  value: boolean | string | LockedValue;
}) {
  // Boolean ✓
  if (typeof value === "boolean") {
    return value ? (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10"
      >
        <Check className="h-5 w-5 text-orange-500" />
      </motion.div>
    ) : (
      <div className="h-11 w-11" />
    );
  }

  // Text (Unlimited, 1 Report / Problem, etc.)
  if (typeof value === "string") {
    return (
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {value}
      </span>
    );
  }

  // Locked Preview
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100/70 px-4 py-2 dark:border-white/10 dark:bg-white/5"
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-[2px]" />

      <div className="relative flex items-center gap-2">
        <Lock className="h-4 w-4 text-orange-500" />

        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {value.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function ComparisonRow({
  icon: Icon,
  title,
  description,
  free,
  pro,
}: ComparisonRowProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-[1.8fr_1fr_1fr] items-center gap-6 rounded-2xl border border-zinc-200/70 bg-white/70 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 dark:border-white/10 dark:bg-white/5"
    >
      {/* Feature */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
          <Icon className="h-5 w-5 text-orange-500" />
        </div>

        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>

      {/* Free */}
      <div className="flex justify-center">
        <Cell value={free} />
      </div>

      {/* Pro */}
      <div className="flex justify-center">
        <Cell value={pro} />
      </div>
    </motion.div>
  );
}