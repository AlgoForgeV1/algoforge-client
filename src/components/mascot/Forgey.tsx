"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import SvgForgey from "./svg/ForgeySVG";

interface ForgeyProps {
  activeFeature?: number | null;
}

export default function Forgey({
  activeFeature = null,
}: ForgeyProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const rotateX = useSpring(useTransform(mouseY, (v) => -v), {
    stiffness: 120,
    damping: 18,
  });

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
    >
      {/* Glow */}

      <motion.div
        className="absolute h-72 w-72 rounded-full bg-orange-500/20 blur-[80px]"
        animate={{
          opacity: [0.18, 0.42, 0.18],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Floating */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        {/* Breathing */}

        <motion.div
          animate={{
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <SvgForgey
            activeFeature={activeFeature}
            className="
              w-[340px]
              h-[340px]
              drop-shadow-[0_20px_70px_rgba(249,115,22,0.35)]
            "
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}