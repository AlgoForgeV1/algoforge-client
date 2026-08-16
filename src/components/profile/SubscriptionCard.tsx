"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

interface Props {
  plan: "FREE" | "PRO" | "TEAM";
  renewsOn?: string | null;
  onManage?: () => void;
}

const plans = {
  FREE: {
    label: "Free",
    accent: "text-zinc-500 dark:text-zinc-400",
    chip: "bg-zinc-100 dark:bg-white/[0.06]",
    features: ["5 AI reviews / day", "Core problem set", "Community access"],
    cta: "Upgrade to Pro",
  },
  PRO: {
    label: "Pro",
    accent: "text-[#FF9324]",
    chip: "bg-[#FF9324]/10",
    features: [
      "Unlimited AI reviews",
      "Full problem library",
      "Interview simulations",
      "Priority support",
    ],
    cta: "Manage subscription",
  },
  TEAM: {
    label: "Team",
    accent: "text-violet-500",
    chip: "bg-violet-500/10",
    features: [
      "Everything in Pro",
      "Shared team dashboards",
      "Usage analytics",
      "Dedicated support",
    ],
    cta: "Manage subscription",
  },
};

export default function SubscriptionCard({ plan, renewsOn, onManage }: Props) {
  const p = plans[plan];
  const isPaid = plan !== "FREE";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.16, duration: 0.4 }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-zinc-200/70
        bg-white/80
        p-7
        shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-28px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        dark:border-white/5
        dark:bg-zinc-900/60
      "
    >
      {isPaid && (
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF9324]/[0.08] blur-3xl" />
      )}

      <div className="relative flex items-center justify-between">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
          Subscription
        </p>

        <span
          className={`
            inline-flex items-center gap-1.5 rounded-full px-3 py-1
            text-[12px] font-semibold ${p.accent} ${p.chip}
          `}
        >
          {isPaid && <Crown size={12} strokeWidth={2.5} />}
          {p.label}
        </span>
      </div>

      <div className="relative mt-5">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {p.label} plan
        </h3>
        <p className="mt-1.5 text-[13.5px] text-zinc-500 dark:text-zinc-400">
          {isPaid && renewsOn
            ? `Renews on ${renewsOn}`
            : "Upgrade any time — no long-term commitment"}
        </p>
      </div>

      <ul className="relative mt-6 space-y-2.5">
        {p.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-[13.5px] text-zinc-600 dark:text-zinc-300"
          >
            <span
              className={`
                flex h-4.5 w-4.5 items-center justify-center rounded-full
                ${isPaid ? "bg-[#FF9324]/15 text-[#FF9324]" : "bg-zinc-100 text-zinc-400 dark:bg-white/[0.06]"}
              `}
            >
              <Check size={11} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onManage}
        className={`
          relative mt-7 flex h-11 w-full items-center justify-center rounded-full
          text-[13.5px] font-semibold transition
          ${
            isPaid
              ? "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/[0.05]"
              : "bg-[#FF9324] text-white shadow-[0_10px_24px_-10px_rgba(255,147,36,0.6)] hover:bg-[#ff9d32]"
          }
        `}
      >
        {p.cta}
      </motion.button>
    </motion.div>
  );
}