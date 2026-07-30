"use client";

import GlassCard from "../../ui/glass-card";

import SuggestionCard from "./SuggestionCard";

const suggestions = [
  {
    emoji: "🔥",
    badge: "TODAY",
    title: "Keep Your Streak",
    description:
      "Solve one problem today to continue your 18 day streak and keep the momentum going.",
    action: "Continue →",
  },
  {
    emoji: "🎯",
    badge: "ROADMAP",
    title: "Resume Learning",
    description:
      "Continue from where you left off and finish today's roadmap milestone.",
    action: "Continue →",
  },
  {
    emoji: "🧠",
    badge: "AI PICK",
    title: "Daily Challenge",
    description:
      "A carefully selected problem designed to strengthen your weakest topic today.",
    action: "Start →",
  },
];

export default function Suggestions() {
  return (
    <GlassCard className="p-7">
      <div className="mb-8">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Forgey's Suggestions
        </h2>

        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Personalized recommendations to help you make the most of today's
          practice.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {suggestions.map((suggestion, index) => (
          <SuggestionCard
            key={suggestion.title}
            index={index}
            {...suggestion}
          />
        ))}
      </div>
    </GlassCard>
  );
}