"use client";

import { motion } from "framer-motion";

import ProgressCard from "./widgets/PorgressCard";
import RecommendationCard from "./widgets/ReccomendationCard";
import StreakCard from "./widgets/StreakCard";
import StatsCard from "./widgets/StatsCard";

export default function AuthPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFA53B] via-[#FF9324] to-[#F57C00]">

      {/* Background Glow */}

      <div className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-orange-300/30 blur-[100px]" />

      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-orange-600/25 blur-[120px]" />

      <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-[80px]" />

      {/* Decorative Shapes */}

      <div className="absolute -right-24 -top-20 h-72 w-72 rotate-12 rounded-[60px] bg-white/10" />

      <div className="absolute -bottom-24 -left-20 h-56 w-56 -rotate-12 rounded-[50px] bg-white/10" />

      {/* Main Content */}

      <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center">

        {/* ---------- TOP ROW ---------- */}

        <div className="grid w-full grid-cols-2 gap-5">

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <ProgressCard />
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <StatsCard />
          </motion.div>

        </div>

        {/* ---------- CENTER ---------- */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="my-16 text-center"
        >
          <h1 className="text-5xl font-black tracking-tight text-white">
            AlgoForge
          </h1>

          <p className="mt-3 max-w-md text-lg leading-relaxed text-orange-100">
            Personalized coding analytics powered by AI.
          </p>
        </motion.div>

        {/* ---------- BOTTOM ROW ---------- */}

        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-12">

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
            }}
          >
            <RecommendationCard />
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4.8,
              ease: "easeInOut",
            }}
          >
            <StreakCard />
          </motion.div>

        </div>

      </div>
    </div>
  );
}