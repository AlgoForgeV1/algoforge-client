"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Forgey from "./Forgey";
import Rocket from "./Rocket";

export default function ForgeyTraveler() {
  const { scrollYProgress } = useScroll();

  /*
   * Smooth the raw scroll value so Forgey doesn't
   * move abruptly while scrolling.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    mass: 0.5,
  });

  /*
   * Horizontal journey.
   *
   * Forgey moves from:
   * left → center → right → center → left
   */
  const x = useTransform(
    smoothProgress,
    [0, 0.18, 0.4, 0.62, 0.82, 1],
    ["0vw", "18vw", "-16vw", "20vw", "-12vw", "0vw"]
  );

  /*
   * Vertical movement.
   *
   * This is intentionally subtle because the component
   * itself is fixed to the viewport.
   */
  const y = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0vh", "12vh", "-5vh", "14vh", "-8vh", "5vh"]
  );

  /*
   * Slight rotation makes the rocket feel like it
   * is actually travelling rather than sliding.
   */
  const rotate = useTransform(
    smoothProgress,
    [0, 0.18, 0.4, 0.62, 0.82, 1],
    [-3, 8, -7, 8, -5, 0]
  );

  /*
   * Scale down slightly as the user moves deeper
   * into the page.
   */
  const scale = useTransform(
    smoothProgress,
    [0, 0.25, 0.6, 1],
    [1, 0.96, 0.92, 0.88]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
      }}
      className="
        pointer-events-none
        fixed
        right-[7vw]
        top-[105px]
        z-40
        hidden
        md:block
      "
    >
      {/* Soft orange aura */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-400/10
          blur-3xl
        "
      />

      {/* Rocket */}
      <div className="relative">
        <Rocket />

        {/* Forgey sitting above the rocket */}
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[18px]
            -top-[58px]
            z-20
          "
        >
          <Forgey />
        </motion.div>
      </div>
    </motion.div>
  );
}