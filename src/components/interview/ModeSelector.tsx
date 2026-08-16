"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Shield,
  CheckCircle2,
} from "lucide-react";

interface Props {
  company: string;
}

export default function ModeSelector({
  company,
}: Props) {
  const [mode, setMode] = useState<
    "practice" | "interview"
  >("practice");

  const modes = [
    {
      id: "practice",
      title: "Practice Mode",
      subtitle: "Learn while solving.",
      icon: GraduationCap,
      features: [
        "Unlimited Run Code",
        "Hints Available",
        "Pause Timer",
        "View Solutions",
        "Unlimited Attempts",
      ],
    },
    {
      id: "interview",
      title: "Interview Mode",
      subtitle: "Real Online Assessment experience.",
      icon: Shield,
      features: [
        "Fullscreen Required",
        "No Hints",
        "Fixed Timer",
        "One Submission",
        "AI Monitoring",
      ],
    },
  ] as const;

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">
        Choose Simulation Mode
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {modes.map((item) => {
          const Icon = item.icon;

          const active =
            mode === item.id;

          return (
            <motion.button
              key={item.id}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.99,
              }}
              onClick={() =>
                setMode(item.id)
              }
              className={`
                relative
                overflow-hidden
                rounded-3xl
                border
                p-8
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? "border-orange-500 bg-orange-500/5 shadow-xl shadow-orange-500/10"
                    : "border-zinc-200 bg-white hover:border-orange-300 dark:border-zinc-800 dark:bg-zinc-900"
                }
              `}
            >
              {active && (
                <motion.div
                  layoutId="selectedMode"
                  className="absolute inset-0 rounded-3xl border-2 border-orange-500"
                />
              )}

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      rounded-2xl
                      bg-orange-500/10
                      p-4
                      text-orange-500
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-zinc-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {item.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-orange-500"
                        />

                        <span className="text-sm">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href={`/dashboard/interview/${company}/instructions?mode=${mode}`}
          className="
            flex
            h-14
            items-center
            gap-2
            rounded-2xl
            bg-orange-500
            px-8
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "
        >
          Continue

          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}