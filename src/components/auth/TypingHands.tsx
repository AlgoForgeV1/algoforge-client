"use client";

import { motion } from "framer-motion";

interface TypingHandsProps {
  leftHandSrc: string;
  rightHandSrc: string;
}

export default function TypingHands({
  leftHandSrc,
  rightHandSrc,
}: TypingHandsProps) {
  return (
    <>
      {/* Left hand */}
      <motion.img
        src={leftHandSrc}
        alt=""
        draggable={false}
        animate={{
          y: [0, 2, 0, 1, 0],
          rotate: [0, -1.5, 0.5, -0.5, 0],
        }}
        transition={{
          duration: 0.52,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          h-full
          w-full
          select-none
          object-cover
          will-change-transform
        "
      />

      {/* Right hand */}
      <motion.img
        src={rightHandSrc}
        alt=""
        draggable={false}
        animate={{
          y: [1, 0, 2, 0, 1],
          rotate: [0.5, 0, -1.5, 0.5, 0],
        }}
        transition={{
          duration: 0.52,
          delay: 0.13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          h-full
          w-full
          select-none
          object-cover
          will-change-transform
        "
      />
    </>
  );
}