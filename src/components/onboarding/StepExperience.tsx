"use client";

import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Cpu,
  Rocket,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  next: () => void;
  previous: () => void;
}

const levels = [
  {
    id: "beginner",
    title: "Apprentice",
    subtitle: "Beginner",
    description: "Learning programming and starting with DSA.",
    icon: Rocket,
  },
  {
    id: "intermediate",
    title: "Engineer",
    subtitle: "Intermediate",
    description: "Comfortable solving coding problems regularly.",
    icon: Code2,
  },
  {
    id: "advanced",
    title: "Architect",
    subtitle: "Advanced",
    description: "Enjoy competitive programming and advanced algorithms.",
    icon: Cpu,
  },
];

export default function StepExperience({
  next,
  previous,
}: Props) {
  const [selected, setSelected] = useState("");

  return (
    <div className="mx-auto w-full max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
          STEP 2
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          What's your coding experience?
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          We'll personalize your roadmap, AI recommendations and difficulty
          level based on your experience.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {levels.map((level) => {
          const Icon = level.icon;
          const active = selected === level.id;

          return (
            <motion.button
              key={level.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(level.id)}
              className={`
                relative
                rounded-2xl
                border
                p-5
                text-left
                transition-all
                duration-200

                ${
                  active
                    ? "border-[#FF9324] bg-orange-50 shadow-lg shadow-orange-500/10 dark:bg-orange-500/10"
                    : "border-zinc-200 bg-white hover:border-[#FF9324] dark:border-zinc-700 dark:bg-zinc-900"
                }
              `}
            >
              <div
                className={`
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl

                  ${
                    active
                      ? "bg-[#FF9324] text-white"
                      : "bg-orange-100 text-[#FF9324] dark:bg-orange-500/10"
                  }
                `}
              >
                <Icon size={20} />
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {level.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#FF9324]">
                {level.subtitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {level.description}
              </p>

              {active && (
                <motion.div
                  layoutId="selectedExperience"
                  className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-[#FF9324]"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={previous}
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-xl
            border
            border-zinc-200
            bg-white
            px-5
            text-sm
            font-medium
            text-zinc-700
            transition-all
            hover:border-[#FF9324]
            hover:text-[#FF9324]
            dark:border-zinc-700
            dark:bg-zinc-900
            dark:text-zinc-200
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          disabled={!selected}
          onClick={next}
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