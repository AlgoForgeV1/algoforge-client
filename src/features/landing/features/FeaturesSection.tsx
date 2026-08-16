"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Forgey } from "@/src/components/mascot";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "./features";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        px-6
        py-24
        sm:py-28
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/3
            rounded-full
            bg-orange-500/10
            blur-[140px]
            dark:bg-orange-500/15
          "
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
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

          <div className="relative mt-6 h-40 w-40 sm:h-48 sm:w-48">
            <div
              className="
                absolute
                inset-0
                -z-10
                rounded-full
                bg-orange-500/15
                blur-2xl
                dark:bg-orange-500/20
              "
            />
            <Forgey activeFeature={activeFeature} />
          </div>

          <h2
            className="
              mt-6
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-900
              sm:text-3xl
              dark:text-white
            "
          >
            Everything you need to prep smarter
          </h2>

          <p
            className="
              mt-2
              max-w-md
              text-sm
              leading-6
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Forgey studies how you solve problems, not just whether you did.
          </p>
        </motion.div>

        {/* Feature Grid */}

        <div
          className="
            mt-14
            grid
            w-full
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <FeatureCard
                feature={feature}
                active={activeFeature === feature.id}
                onHover={() => setActiveFeature(feature.id)}
                onLeave={() => setActiveFeature(null)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}