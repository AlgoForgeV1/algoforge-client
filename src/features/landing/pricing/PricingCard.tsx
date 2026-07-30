"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  button: string;
  highlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  description,
  price,
  period,
  button,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: highlighted ? 1.02 : 1.01,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
        highlighted
          ? "border-orange-500/40 bg-gradient-to-b from-orange-500/15 via-orange-500/5 to-transparent shadow-2xl shadow-orange-500/20"
          : "border-zinc-200/70 bg-white/70 hover:border-orange-500/20 dark:border-white/10 dark:bg-white/5"
      }`}
    >
      {/* Glow */}
      {highlighted && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_70%)]" />
      )}

      {/* Badge */}
      {badge && (
        <div className="absolute right-6 top-6 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
          {badge}
        </div>
      )}

      <div className="relative">
        {/* Title */}
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {/* Price */}
        <div className="mt-8 flex items-end gap-1">
          <span className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {price}
          </span>

          <span className="mb-1 text-zinc-500 dark:text-zinc-400">
            {period}
          </span>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-white/10" />

        {/* Highlights */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
              <Check className="h-4 w-4 text-orange-500" />
            </div>

            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              Everything shown below
            </span>
          </div>

          {highlighted && (
            <>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                  <Check className="h-4 w-4 text-orange-500" />
                </div>

                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  Unlimited AI Reports
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                  <Check className="h-4 w-4 text-orange-500" />
                </div>

                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  Premium AI Features
                </span>
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          className={`mt-10 w-full rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
            highlighted
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
              : "border border-zinc-300 bg-white text-zinc-900 hover:border-orange-500 hover:text-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
          }`}
        >
          {button}
        </motion.button>
      </div>
    </motion.div>
  );
}