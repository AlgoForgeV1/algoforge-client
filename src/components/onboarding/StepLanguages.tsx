"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  next: () => void;
  previous: () => void;
}

const languages = [
  "Java",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Go",
  "Rust",
  "Kotlin",
  "Swift",
  "C",
  "SQL",
  "PHP",
];

export default function StepLanguages({
  next,
  previous,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleLanguage = (language: string) => {
    if (selected.includes(language)) {
      setSelected(selected.filter((item) => item !== language));
    } else {
      setSelected([...selected, language]);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
          STEP 3
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Programming Languages
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Select all the languages you regularly use. You can always change
          these later from your profile.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-3">
        {languages.map((language) => {
          const active = selected.includes(language);

          return (
            <motion.button
              key={language}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => toggleLanguage(language)}
              className={`
                rounded-xl
                border
                px-4
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200

                ${
                  active
                    ? "border-[#FF9324] bg-[#FF9324] text-white shadow-lg shadow-orange-500/20"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-[#FF9324] hover:bg-orange-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-orange-500/10"
                }
              `}
            >
              {language}
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
          disabled={selected.length === 0}
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