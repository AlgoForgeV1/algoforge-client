"use client";

import {
  ArrowLeft,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import AvatarCard from "../avatar/AvatarCard";
import { avatarInfo, AvatarStyle } from "../avatar/AvatarStyles";
import { completeOnboarding } from "@/src/lib/api/auth";

interface OnboardingData {
  name: string;
  username: string;
  experience: string;
  language: string;
  avatarStyle: AvatarStyle;
  avatarSeed: string;
}

interface Props {
  previous: () => void;
  onboarding: OnboardingData;
  setOnboarding: React.Dispatch<
    React.SetStateAction<OnboardingData>
  >;
}

export default function StepAvatar({
  previous,
  onboarding,
  setOnboarding,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateNew = () => {
    setOnboarding((prev) => ({
      ...prev,
      avatarSeed: `${prev.name || "algoforge"}-${crypto.randomUUID()}`,
    }));
  };

  const finishOnboarding = async () => {
    setError("");
    setLoading(true);

    try {
      await completeOnboarding({
        displayName: onboarding.name,
        username: onboarding.username,
        experienceLevel: onboarding.experience as
          | "BEGINNER"
          | "INTERMEDIATE"
          | "ADVANCED",
        preferredLanguageId: onboarding.language,
        avatarUrl: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
          onboarding.avatarSeed || onboarding.name,
        )}`,
      });

      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to complete onboarding.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
          STEP 4
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Choose your avatar
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Pick an avatar style that represents you.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {avatarInfo.map((avatar) => (
          <AvatarCard
            key={avatar.id}
            style={avatar.id}
            title={avatar.title}
            description={avatar.description}
            seed={onboarding.avatarSeed}
            selected={onboarding.avatarStyle === avatar.id}
            onClick={() =>
              setOnboarding((prev) => ({
                ...prev,
                avatarStyle: avatar.id,
              }))
            }
          />
        ))}
      </div>

      {error && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={previous}
          disabled={loading}
          className="flex h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 text-sm font-medium dark:border-zinc-700 dark:bg-zinc-900"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={generateNew}
            disabled={loading}
            className="flex h-11 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-medium dark:border-zinc-700 dark:bg-zinc-900"
          >
            <RefreshCcw size={16} />
            Generate New
          </button>

          <button
            type="button"
            onClick={finishOnboarding}
            disabled={loading}
            className="flex h-11 items-center gap-2 rounded-xl bg-[#FF9324] px-6 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Building..." : "Build My Profile"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}