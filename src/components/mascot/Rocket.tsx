"use client";

import { motion } from "framer-motion";

interface RocketProps {
  className?: string;
}

export default function Rocket({
  className = "",
}: RocketProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Rocket */}
      <motion.div
        animate={{
          y: [0, -4, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        {/* Flame */}
        <motion.div
          animate={{
            scaleY: [1, 1.25, 0.9, 1],
            opacity: [0.8, 1, 0.7, 0.8],
          }}
          transition={{
            duration: 0.45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-7
            left-1/2
            h-8
            w-5
            -translate-x-1/2
            origin-top
            rounded-b-full
            bg-gradient-to-b
            from-[#FF9324]
            via-orange-400
            to-transparent
            blur-[1px]
          "
        />

        {/* Outer rocket */}
        <div
          className="
            relative
            h-[82px]
            w-[52px]
            rotate-[-35deg]
            rounded-[50%_50%_45%_45%]
            bg-[#FF9324]
            shadow-[0_12px_35px_rgba(255,147,36,0.28)]
          "
        >
          {/* Nose highlight */}
          <div
            className="
              absolute
              left-1/2
              top-2
              h-5
              w-5
              -translate-x-1/2
              rounded-full
              bg-orange-200/60
              blur-[1px]
            "
          />

          {/* Window */}
          <div
            className="
              absolute
              left-1/2
              top-[24px]
              h-6
              w-6
              -translate-x-1/2
              rounded-full
              border-[3px]
              border-orange-700/30
              bg-zinc-950
              shadow-inner
            "
          >
            <div className="absolute left-[4px] top-[3px] h-2 w-2 rounded-full bg-white/60" />
          </div>

          {/* Left fin */}
          <div
            className="
              absolute
              -bottom-1
              -left-3
              h-7
              w-5
              rounded-bl-xl
              rounded-br-sm
              bg-orange-600
            "
          />

          {/* Right fin */}
          <div
            className="
              absolute
              -bottom-1
              -right-3
              h-7
              w-5
              rounded-br-xl
              rounded-bl-sm
              bg-orange-600
            "
          />

          {/* Body shine */}
          <div
            className="
              absolute
              left-[10px]
              top-[13px]
              h-10
              w-2
              rounded-full
              bg-white/20
              blur-[1px]
            "
          />
        </div>
      </motion.div>

      {/* Exhaust particles */}
      <motion.div
        animate={{
          y: [0, 8, 14],
          opacity: [0.7, 0.4, 0],
          scale: [1, 0.8, 0.4],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="
          absolute
          -bottom-8
          left-1/2
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          bg-orange-300
        "
      />

      <motion.div
        animate={{
          y: [0, 10, 18],
          opacity: [0.5, 0.25, 0],
          scale: [1, 0.7, 0.3],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="
          absolute
          -bottom-7
          left-[42%]
          h-1.5
          w-1.5
          rounded-full
          bg-orange-400
        "
      />
    </div>
  );
}