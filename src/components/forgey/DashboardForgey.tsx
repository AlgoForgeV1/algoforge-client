"use client";

import { motion } from "framer-motion";
import SvgForgey from "../mascot/svg/ForgeySVG";

export default function DashboardForgey() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <motion.div
        className="absolute h-44 w-44 rounded-full bg-orange-500/15 blur-[70px]"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <SvgForgey
          wave
          className="h-[180px] w-[180px] drop-shadow-[0_15px_50px_rgba(249,115,22,0.3)]"
        />
      </motion.div>

    </div>
  );
}