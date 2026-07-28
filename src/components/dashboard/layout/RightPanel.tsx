"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import DashboardForgey from "../../forgey/DashboardForgey";
import GlassCard from "../../ui/glass-card";

const insights = [
  {
    icon: Sparkles,
    title: "Today's Advice",
    description: "Solve 2 Graph problems before attempting DP.",
  },
  {
    icon: TrendingUp,
    title: "You're Improving",
    description: "Accuracy increased by 14% this week.",
  },
];

export default function RightPanel() {
  return (
    <aside className="sticky top-0 flex h-screen flex-col border-l border-black/5 dark:border-white/5 bg-white/100 dark:bg-[#09090B]/80 backdrop-blur-xl">

      {/* Main */}
      <div className="flex flex-1 flex-col justify-between p-3">

        {/* ================= Hero ================= */}

        <div className="relative overflow-hidden  via-transparent to-transparent p-5">

          {/* Forgey */}

          <DashboardForgey />

          <div className="relative z-10 mt-1 text-center">

            <p className="mt-2 text-l leading-5 text-zinc-600 dark:text-zinc-400">
              Ready to forge today's victory?
            </p>
          </div>
        </div>

        {/* ================= Insights ================= */}

        <div className="my-5 space-y-3">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <GlassCard
                key={item.title}
                className="cursor-pointer p-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-500/10 p-2">
                    <Icon
                      size={18}
                      className="text-orange-500"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-zinc-400 dark:text-zinc-600 transition group-hover:text-orange-500"
                  />
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>

      {/* ================= Chat ================= */}

      <div className="border-t border-black/5 dark:border-white/5 p-5">

        <h3 className="font-semibold text-zinc-900 dark:text-white">
          Ask Forgey
        </h3>

        <p className="mt-1 mb-4 text-sm text-zinc-500">
          Stuck on a problem? I'm here to help.
        </p>

        <div className="flex items-center gap-2 rounded-2xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 p-2 transition focus-within:border-orange-500/30">

          <input
            placeholder="Ask anything..."
            className="flex-1 bg-transparent px-3 py-2 text-sm text-zinc-900 dark:text-white outline-none placeholder:text-zinc-500"
          />

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white transition hover:bg-orange-600"
          >
            <Send size={16} />
          </button>

        </div>

      </div>

    </aside>
  );
}