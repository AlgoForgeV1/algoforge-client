"use client";

import { motion } from "framer-motion";
import { ArrowRight, AppWindow } from "lucide-react";

export default function ExtensionCTA() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className="mt-24 flex flex-col items-center text-center"
    >
      {/* Badge */}

      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-orange-500/20
          bg-orange-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-orange-400
        "
      >
        <AppWindow size={16} />

        Chrome Extension
      </motion.div>

      {/* Heading */}

      <h2
        className="
          mt-6
          max-w-3xl
          text-4xl
          font-bold
          tracking-tight
          text-zinc-900
          dark:text-white
          lg:text-5xl
        "
      >
        Everything you need,
        <br />
        right where you solve.
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-zinc-600
          dark:text-zinc-400
        "
      >
        Analyze every solution, discover weak topics,
        receive AI-powered recommendations, and build
        interview-ready skills without leaving your coding
        platform.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

        <motion.button
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-orange-500
            px-7
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-orange-500/30
            transition-colors
            hover:bg-orange-400
          "
        >
          <AppWindow size={18} />

          Add to Chrome

          <ArrowRight size={18} />
        </motion.button>

        <motion.button
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            rounded-2xl
            border
            border-zinc-300
            bg-white
            px-7
            py-4
            font-semibold
            text-zinc-900
            transition-colors
            hover:bg-zinc-100
            dark:border-white/10
            dark:bg-white/5
            dark:text-white
            dark:hover:bg-white/10
          "
        >
          Learn More
        </motion.button>

      </div>

      {/* Bottom Text */}

      <p
        className="
          mt-6
          text-sm
          text-zinc-500
        "
      >
        Available for Chrome • Edge support coming soon
      </p>
    </motion.div>
  );
}