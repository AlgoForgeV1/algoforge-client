"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import MemeFeed from "./MemeFeed";

export default function PhoneFrame() {
  return (
    <div className="relative">
      {/* Phone shadow */}

      <div
        className="
          absolute
          -bottom-8
          left-1/2
          h-16
          w-56
          -translate-x-1/2
          rounded-full
          bg-black/20
          blur-2xl
          dark:bg-black/50
        "
      />

      {/* Outer phone */}

      <div
        className="
          relative
          h-[620px]
          w-[310px]
          rounded-[46px]
          border
          border-zinc-300/80
          bg-white/20
          p-[7px]
          shadow-[0_30px_100px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          dark:border-white/15
          dark:bg-white/[0.04]
          dark:shadow-[0_30px_100px_rgba(0,0,0,0.5)]
          sm:h-[680px]
          sm:w-[340px]
        "
      >
        {/* Orange edge glow */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-[1px]
            rounded-[46px]
            bg-gradient-to-b
            from-[#FF9324]/40
            via-transparent
            to-[#FF9324]/10
            opacity-70
          "
        />

        {/* Inner frame */}

        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden
            rounded-[39px]
            border
            border-zinc-300/40
            bg-zinc-950
            dark:border-white/10
          "
        >
          {/* Dynamic Island */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-3
              z-30
              h-6
              w-24
              -translate-x-1/2
              rounded-full
              bg-black
              shadow-lg
            "
          />

          {/* Screen */}

          <MemeFeed />

          {/* Screen reflection */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
              rounded-[39px]
              bg-gradient-to-br
              from-white/[0.12]
              via-transparent
              to-transparent
            "
          />

          {/* Scroll hint */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 6, 12],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: 1,
            }}
            className="
              pointer-events-none
              absolute
              bottom-7
              left-1/2
              z-30
              flex
              -translate-x-1/2
              flex-col
              items-center
              text-white/70
            "
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.2em]">
              Scroll
            </span>

            <ChevronDown size={15} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}