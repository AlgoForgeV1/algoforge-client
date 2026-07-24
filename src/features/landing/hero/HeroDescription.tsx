"use client";

import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="
        mx-auto
        mt-8
        max-w-3xl
        text-lg
        leading-8
        text-neutral-600
        transition-colors
        duration-300

        md:text-xl

        dark:text-neutral-400
      "
    >
      AlgoForge analyzes your coding habits, uncovers weak concepts,
      and creates a personalized roadmap that helps you master
      algorithms faster and crack coding interviews with confidence.
    </motion.p>
  );
}