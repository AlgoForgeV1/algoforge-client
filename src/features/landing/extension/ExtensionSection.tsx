"use client";

import { motion } from "framer-motion";

import SetupCard from "./SetupCard";
import { features } from "./extension-data";

export default function ExtensionSection() {
  return (
    <section
      id="extension"
      className="relative mt-32 flex min-h-screen items-center overflow-hidden py-16"
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px]
          -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          bg-[size:80px_80px]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
        "
      />

      <div
        className="
          relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6
          xl:h-[88vh] xl:justify-center
        "
      >
        {/* Top */}
        <div className="grid items-center gap-14 xl:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="
                max-w-xl text-4xl font-bold leading-tight
                text-zinc-900 dark:text-white lg:text-5xl
              "
            >
              Install Once.
              <br />
              <span className="text-orange-500">Everything Else</span>
              <br />
              Just Works.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Add AlgoForge to Chrome and your progress syncs automatically as you solve.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex justify-center"
          >
            <SetupCard />
          </motion.div>
        </div>

        {/* Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          
        </motion.div>
      </div>
    </section>
  );
}