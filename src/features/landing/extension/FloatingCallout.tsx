"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface FloatingCalloutProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FloatingCallout({
  icon: Icon,
  title,
  description,
  className,
}: FloatingCalloutProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className={clsx(
        "absolute w-64 rounded-2xl border border-white/10",
        "bg-white/70 backdrop-blur-xl",
        "dark:bg-white/[0.04]",
        "shadow-xl shadow-orange-500/10",
        "p-5",
        className
      )}
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br
          from-orange-500/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative">
        <div
          className="
            mb-4
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-orange-500/10
            text-orange-500
          "
        >
          <Icon size={20} />
        </div>

        <h4
          className="
            text-base
            font-semibold
            text-zinc-900
            dark:text-white
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-zinc-600
            dark:text-zinc-400
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}