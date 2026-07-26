"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Forgey } from "@/src/components/mascot";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "./features";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const orbitCards = useMemo(
    () => [
      {
        feature: FEATURES[0],
        className:
          "left-1/2 top-10 -translate-x-1/2 rotate-2",
      },
      {
        feature: FEATURES[1],
        className:
          "left-16 top-36 -rotate-6 xl:left-20",
      },
      {
        feature: FEATURES[2],
        className:
          "right-16 top-36 rotate-6 xl:right-20",
      },
      {
        feature: FEATURES[3],
        className:
          "left-16 bottom-36 rotate-6 xl:left-20",
      },
      {
        feature: FEATURES[4],
        className:
          "right-16 bottom-36 -rotate-6 xl:right-20",
      },
      {
        feature: FEATURES[5],
        className:
          "bottom-10 left-1/2 -translate-x-1/2 -rotate-2",
      },
    ],
    []
  );

  return (
    <section
      id="features"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        py-16
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500/10
            blur-[140px]
            dark:bg-orange-500/15
          "
        />
      </div>

      <div className="relative mx-auto h-[760px] w-full max-w-[1400px]">
        {/* Center */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex flex-col items-center"
          >
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -top-36"
            >
              <span
                className="
                  rounded-full
                  border
                  border-orange-300
                  bg-orange-50
                  px-4
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-orange-600
                  dark:border-orange-500/30
                  dark:bg-orange-500/10
                  dark:text-orange-400
                "
              >
                FEATURES
              </span>
            </motion.div>

            {/* Platform */}

            <div
              className="
                absolute
                bottom-5
                h-10
                w-56
                rounded-full
                bg-orange-500/20
                blur-2xl
                dark:bg-orange-500/25
              "
            />

            <Forgey activeFeature={activeFeature} />
          </motion.div>
        </div>

        {/* Orbit Cards */}

        {orbitCards.map(({ feature, className }) => (
          <div
            key={feature.id}
            className={`absolute ${className}`}
          >
            <FeatureCard
              feature={feature}
              active={activeFeature === feature.id}
              onHover={() => setActiveFeature(feature.id)}
              onLeave={() => setActiveFeature(null)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}