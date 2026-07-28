"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AppWindow,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import { chromeStoreStats, setupStates, supportedPlatforms } from "./extension-data";


export default function SetupCard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % setupStates.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const current = setupStates[step];

  return (
    <div className="relative flex items-center justify-center">

      <motion.div
        layout
        className="
          relative z-20 w-[340px] overflow-hidden rounded-[32px] border
          border-zinc-200 bg-white/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
          dark:border-white/10 dark:bg-zinc-900/90 dark:shadow-[0_30px_80px_rgba(0,0,0,.45)]
        "
      >
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent"
        />

        {/* Header */}
        <div className="relative flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
            <AppWindow className="text-orange-500" size={28} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              AlgoForge Extension
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm font-medium text-orange-500">
                ★ {chromeStoreStats.rating}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {chromeStoreStats.users}
              </span>
            </div>
          </div>
        </div>

        {/* Status */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative mt-6"
          >
            <div className="flex items-center gap-3">
              {current.status === "ready" ? (
                <CheckCircle2 size={22} className="text-green-500" />
              ) : (
                <LoaderCircle size={22} className="animate-spin text-orange-500" />
              )}
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {current.title}
              </h4>
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {current.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-zinc-500 dark:text-zinc-400">Progress</span>
            <span className="font-medium text-orange-500">{current.progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10">
            <motion.div
              animate={{ width: `${current.progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
            />
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Works With
          </p>

          <div className="flex flex-wrap gap-2">
            {supportedPlatforms.map((platform) => (
              <span
                key={platform}
                className="
                  rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5
                  text-xs font-medium text-zinc-700
                  dark:border-white/10 dark:bg-white/5 dark:text-zinc-300
                "
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="
            relative mt-6 flex w-full items-center justify-center gap-3
            rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white
            shadow-lg shadow-orange-500/25
          "
        >
          <AppWindow size={20} />
          Add to Chrome
        </motion.button>
      </motion.div>
    </div>
  );
}