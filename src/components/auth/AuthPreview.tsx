"use client";

import { motion } from "framer-motion";
import {
  Check,
  Code2,
  Flame,
  Target,
  TrendingUp,
} from "lucide-react";

import CodingIllustration from "./CodingIllustration";

export default function AuthPreview() {
  return (
    <div
      className="
        relative
        h-full
        min-h-[680px]
        w-full
        overflow-hidden
        rounded-r-[32px]
        bg-zinc-950
      "
    >
   
      {/* =====================================================
          MAIN ILLUSTRATION — fills the whole panel
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="absolute inset-0 z-10 h-full w-full"
      >
        <CodingIllustration />
      </motion.div>

      {/* =====================================================
          WEEKLY PROGRESS
      ====================================================== */}

      <FloatingCard
        className="
          left-[6%]
          top-[6%]
          w-[170px]
        "
        rotate={-5}
        delay={0}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-medium text-zinc-500">
              Weekly Progress
            </p>

            <p className="mt-1 text-xl font-black text-zinc-900">
              78%
            </p>
          </div>

          <TrendingUp
            size={10}
            className="text-[#FF9324]"
          />
        </div>

        <div className="mt-4 flex h-9 items-end gap-1.5">
          {[25, 35, 42, 30, 58, 72, 85].map(
            (height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{
                  height: `${height}%`,
                }}
                transition={{
                  delay: 0.3 + index * 0.05,
                  duration: 0.45,
                }}
                className="flex-1 rounded-t bg-[#FF9324]"
              />
            )
          )}
        </div>
      </FloatingCard>

      {/* =====================================================
          NEXT TO SOLVE
      ====================================================== */}

      <FloatingCard
        className="
          right-[5%]
          top-[20%]
          w-[175px]
        "
        rotate={4}
        delay={0.2}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-950">
            <Target
              size={15}
              className="text-white"
            />
          </div>

          <div>
            <p className="text-[9px] text-zinc-500">
              Next to Solve
            </p>

            <p className="text-sm font-bold text-zinc-900">
              Binary Search
            </p>
          </div>
        </div>

        <div className="mt-4">
          <span
            className="
              rounded-full
              bg-orange-500/10
              px-2.5
              py-1
              text-[9px]
              font-bold
              text-[#FF9324]
            "
          >
            Medium
          </span>
        </div>
      </FloatingCard>

      {/* =====================================================
          ROADMAP
      ====================================================== */}

      <FloatingCard
        className="
          bottom-[14%]
          right-[5%]
          w-[175px]
        "
        rotate={-3}
        delay={0.4}
      >
        <div className="flex items-center gap-2">
          <Code2
            size={16}
            className="text-[#FF9324]"
          />

          <p className="text-xs font-bold text-zinc-900">
            Your Roadmap
          </p>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            ["Arrays", true],
            ["Hashing", true],
            ["Sliding Window", false],
          ].map(([name, completed]) => (
            <div
              key={name as string}
              className="flex items-center gap-2"
            >
              <div
                className={`
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  rounded-full
                  ${
                    completed
                      ? "bg-green-500"
                      : "border border-zinc-300"
                  }
                `}
              >
                {completed && (
                  <Check
                    size={9}
                    className="text-white"
                  />
                )}
              </div>

              <span className="text-[10px] text-zinc-600">
                {name as string}
              </span>
            </div>
          ))}
        </div>
      </FloatingCard>

      {/* =====================================================
          CODE BADGE
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -7, 0],
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[25%]
          left-[7%]
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-zinc-950
          shadow-xl
        "
      >
        <Code2
          size={19}
          className="text-[#FF9324]"
        />
      </motion.div>

      {/* =====================================================
          STREAK
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[6%]
          left-[15%]
          z-40
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/70
          bg-white/85
          px-4
          py-2.5
          shadow-xl
          backdrop-blur-xl
        "
      >
        <Flame
          size={15}
          className="text-[#FF9324]"
        />

        <div>
          <p className="text-[9px] text-zinc-500">
            Current Streak
          </p>

          <p className="text-sm font-black text-zinc-900">
            12 days
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   FLOATING CARD
========================================================= */

function FloatingCard({
  children,
  className,
  rotate,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  rotate: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        rotate,
      }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        rotate,
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        y: -12,
        rotate: 0,
        scale: 1.04,
      }}
      className={`
        absolute
        z-40
        rounded-2xl
        border
        border-white/70
        bg-white/90
        p-4
        shadow-[0_18px_40px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
        transition-shadow
        hover:border-orange-300
        hover:shadow-[0_25px_50px_rgba(255,147,36,0.22)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}