"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lock, Sparkles } from "lucide-react";

import { plans, comparisonFeatures, pricingFooter } from "./pricing-data";

export default function PricingSection() {
  const [activePlan, setActivePlan] = useState<"free" | "pro">("pro");
  const plan = plans.find((p) => p.id === activePlan)!;

  return (
    <section
      id="pricing"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-3xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-xl text-center"
        >
    
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Start free. Upgrade when ready.
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="mx-auto mb-8 flex w-fit gap-2 rounded-full border border-zinc-200 bg-white/70 p-1 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          {plans.map((p) => {
            const isActive = p.id === activePlan;
            return (
              <button
                key={p.id}
                onClick={() => setActivePlan(p.id as "free" | "pro")}
                className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="pricing-tab-pill"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 rounded-full bg-orange-500"
                  />
                )}
                <span className="relative">{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Card */}
        <motion.div
          layout
          className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          {activePlan === "pro" && (
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_70%)]" />
          )}

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            {/* Price block */}
            <AnimatePresence mode="wait">
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {plan.description}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-zinc-500 dark:text-zinc-400">
                    {plan.period}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                    activePlan === "pro"
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400"
                      : "border border-zinc-300 bg-white text-zinc-900 hover:border-orange-500 hover:text-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  }`}
                >
                  {activePlan === "pro"}
                  {plan.button}
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Feature list */}
            <div className="w-full sm:max-w-xs">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activePlan}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="space-y-3"
                >
                  {comparisonFeatures.map((feature) => {
                    const value = feature[activePlan];
                    const Icon = feature.icon;
                    const isLocked =
                      value === false ||
                      (typeof value === "object" && value?.locked);

                    return (
                      <motion.li
                        key={feature.title}
                        variants={{
                          hidden: { opacity: 0, x: 12 },
                          show: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                            isLocked ? "bg-zinc-100 dark:bg-white/5" : "bg-orange-500/10"
                          }`}
                        >
                          {typeof value === "object" && value?.locked ? (
                            <Lock size={14} className="text-zinc-400 dark:text-zinc-500" />
                          ) : value === false ? (
                            <Icon size={14} className="text-zinc-300 dark:text-zinc-600" />
                          ) : (
                            <Check size={14} className="text-orange-500" />
                          )}
                        </div>

                        <div>
                          <p
                            className={`text-sm font-medium ${
                              isLocked
                                ? "text-zinc-400 dark:text-zinc-500"
                                : "text-zinc-900 dark:text-white"
                            }`}
                          >
                            {feature.title}
                          </p>
                          {typeof value === "string" && (
                            <p className="text-xs text-orange-500">{value}</p>
                          )}
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {pricingFooter.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
              >
                <Icon className="h-4 w-4 text-orange-500" />
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}