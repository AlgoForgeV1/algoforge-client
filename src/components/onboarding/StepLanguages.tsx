"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProgrammingLanguage {
  id: string;
  name: string;
}

interface Props {
  next: () => void;
  previous: () => void;
  value: string;
  onChange: (value: string) => void;
  languages: ProgrammingLanguage[];
}

export default function StepLanguages({
  next,
  previous,
  value,
  onChange,
  languages,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
          STEP 3
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Programming Language
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Choose your preferred programming language.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-3">
        {languages.map((language) => {
          const active = value === language.id;

          return (
            <motion.button
              key={language.id}
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onChange(language.id)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "border-[#FF9324] bg-[#FF9324] text-white shadow-lg"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-[#FF9324] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              }`}
            >
              {language.name}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={previous}
          className="flex h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 text-sm font-medium dark:border-zinc-700 dark:bg-zinc-900"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          disabled={!value}
          onClick={next}
          className="flex h-11 items-center gap-2 rounded-xl bg-[#FF9324] px-6 text-sm font-semibold text-white disabled:opacity-40"
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}