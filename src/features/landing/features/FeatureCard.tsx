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
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      animate={{
        y: active ? -4 : 0,
        scale: active ? 1.02 : 1,
        rotate: active ? [0, -0.8, 0.8, 0] : 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className={clsx(
        "group relative w-[235px] lg:w-[245px] overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",

        // Light Theme
        "border-zinc-200 bg-white/70 shadow-lg shadow-zinc-200/40",

        // Dark Theme
        "dark:border-white/10 dark:bg-white/[0.05] dark:shadow-none",

        active
          ? "border-orange-400 shadow-xl shadow-orange-300/25 dark:border-orange-400 dark:shadow-[0_0_60px_rgba(249,115,22,.28)]"
          : "hover:border-orange-300 dark:hover:border-orange-500/30"
      )}
    >
      {/* Gradient */}

      <motion.div
        animate={{
          opacity: active ? 1 : 0,
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-orange-500/10
          via-transparent
          to-orange-400/5
        "
      />

      {/* Shine */}

      <motion.div
        initial={{ x: "-140%" }}
        whileHover={{ x: "180%" }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          inset-y-0
          w-16
          -skew-x-12
          bg-white/30
          blur-lg
          dark:bg-white/10
        "
      />

      <div className="relative p-5">
        <div className="flex items-start justify-between">
          <motion.div
            animate={{
              rotate: active ? [0, -8, 8, 0] : 0,
              scale: active ? [1, 1.12, 1] : 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className={clsx(
              "flex h-11 w-11 items-center justify-center rounded-xl transition-all",

              active
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
            )}
          >
            <Icon size={20} />
          </motion.div>

          <ArrowUpRight
            size={16}
            className="
              text-zinc-400
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

        <div className="mt-4 space-y-2">
          <h3
            className="
              text-lg
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
              line-clamp-3
              text-sm
              leading-6
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {feature.description}
          </p>
        </div>
      </div>
            {/* Bottom Accent */}

      <motion.div
        animate={{
          width: active ? "100%" : "0%",
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          rounded-r-full
          bg-orange-500
        "
      />

      {/* Floating Glow */}

      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.9,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          pointer-events-none
          absolute
          -inset-4
          -z-10
          rounded-[28px]
          bg-orange-400/15
          blur-2xl
          dark:bg-orange-500/20
        "
      />
    </motion.div>
  );
}