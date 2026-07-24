"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-12 flex flex-wrap items-center justify-center gap-4"
    >
      <Link href="/signup">
        <button
          className="
            group
            relative
            overflow-hidden
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-orange-500/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:scale-[1.02]
            hover:shadow-[0_0_50px_rgba(249,115,22,0.35)]
            active:scale-[0.98]
          "
        >
          <span className="relative flex items-center gap-2">
            Start Forging
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </button>
      </Link>

      <button
        className="
          group
          flex
          items-center
          gap-2
          rounded-full
          border
          border-neutral-200
          bg-white/80
          px-8
          py-4
          font-medium
          text-neutral-700
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-white
          hover:shadow-lg

          dark:border-white/10
          dark:bg-white/5
          dark:text-neutral-300
          dark:hover:bg-white/10
        "
      >
        <Play
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        Watch Demo
      </button>
    </motion.div>
  );
}