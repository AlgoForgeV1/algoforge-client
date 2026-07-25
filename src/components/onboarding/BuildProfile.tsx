"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  CheckCircle2,
  Cpu,
  Network,
  LayoutDashboard,
} from "lucide-react";

const steps = [
  {
    title: "Initializing AI",
    icon: Cpu,
  },
  {
    title: "Creating Developer Identity",
    icon: Brain,
  },
  {
    title: "Analyzing Skill Profile",
    icon: Network,
  },
  {
    title: "Preparing Dashboard",
    icon: LayoutDashboard,
  },
];

export default function BuildProfile() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= steps.length) return;

    const timer = setTimeout(() => {
      setCurrent((c) => c + 1);
    }, 1800);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111F]">

      {/* Glow */}

      <div className="absolute h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Card */}

      <div className="relative w-full max-w-2xl rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-10 backdrop-blur-2xl">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
          AI INITIALIZATION
        </p>

        <h1 className="text-4xl font-bold text-white">
          Building your developer profile...
        </h1>

        <p className="mt-4 text-slate-400">
          This will only take a few seconds.
        </p>

        <div className="mt-12 space-y-7">

          {steps.map((step, index) => {
            const Icon = step.icon;

            const completed = index < current;

            const active = index === current;

            return (
              <div
                key={step.title}
                className="flex items-center gap-5"
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl

                    ${
                      completed
                        ? "bg-green-500 text-white"
                        : active
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-800 text-slate-500"
                    }
                  `}
                >
                  {completed ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Icon size={22} />
                  )}
                </div>

                <div className="flex-1">

                  <div className="mb-2 flex justify-between">

                    <span className="text-white">
                      {step.title}
                    </span>

                    <span className="text-sm text-slate-500">
                      {completed
                        ? "Done"
                        : active
                        ? "Processing..."
                        : "Waiting"}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-800">

                    <div
                      className={`
                        h-full
                        rounded-full
                        transition-all
                        duration-[1800ms]

                        ${
                          completed
                            ? "w-full bg-green-500"
                            : active
                            ? "w-full bg-cyan-400"
                            : "w-0"
                        }
                      `}
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        <div className="mt-14">

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
              style={{
                width: `${(current / steps.length) * 100}%`,
              }}
            />

          </div>

        </div>

      </div>

    </main>
  );
}