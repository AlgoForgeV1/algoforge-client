"use client";

import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="
        mt-8
        text-5xl
        font-black
        tracking-tight
        text-neutral-900
        transition-colors
        duration-300

        md:text-7xl
        lg:text-8xl

        dark:text-white
      "
    >
      Stop Solving
      <br />

      <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
        Start Forging.
      </span>
    </motion.h1>
  );
}