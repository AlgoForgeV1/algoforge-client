"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface StepNameProps {
  next: () => void;
}

export default function StepName({ next }: StepNameProps) {
  const [name, setName] = useState("");

  const handleContinue = () => {
    if (!name.trim()) return;

    // TODO:
    // Save to Context / Zustand later

    next();
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
          STEP 1
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          What's your name?
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          We'll use it across your dashboard, AI reports and personalized
          recommendations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-8"
      >
        <input
          autoFocus
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            h-12
            w-full
            rounded-xl
            border
            border-zinc-200
            bg-white
            px-4
            text-sm
            text-zinc-900
            placeholder:text-zinc-400
            outline-none
            transition-all
            duration-200
            focus:border-[#FF9324]
            focus:ring-4
            focus:ring-orange-500/10
            dark:border-zinc-700
            dark:bg-zinc-900
            dark:text-white
            dark:placeholder:text-zinc-500
          "
        />
      </motion.div>

      <div className="mt-8 flex justify-end">
        <button
          disabled={!name.trim()}
          onClick={handleContinue}
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-xl
            bg-[#FF9324]
            px-6
            text-sm
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-[#ff9d32]
            hover:shadow-lg
            hover:shadow-orange-500/20
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}