"use client";

import { motion } from "framer-motion";
import { Pencil, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Props {
  displayName: string;
  avatarUrl?: string | null;
  experienceLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  githubUsername?: string | null;
  leetcodeUsername?: string | null;
  onEdit?: () => void;
}

const experience = {
  BEGINNER: {
    label: "Apprentice",
    dot: "bg-emerald-400",
    text: "text-emerald-700 dark:text-emerald-300",
    ring: "ring-emerald-500/20",
  },
  INTERMEDIATE: {
    label: "Engineer",
    dot: "bg-[#FF9324]",
    text: "text-[#c2650f] dark:text-orange-300",
    ring: "ring-orange-500/20",
  },
  ADVANCED: {
    label: "Architect",
    dot: "bg-violet-400",
    text: "text-violet-700 dark:text-violet-300",
    ring: "ring-violet-500/20",
  },
};

export default function ProfileHero({
  displayName,
  avatarUrl,
  experienceLevel,
  githubUsername,
  leetcodeUsername,
  onEdit,
}: Props) {
  const badge = experience[experienceLevel];
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-zinc-200/70
        bg-white/80
        p-8
        shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-28px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        dark:border-white/5
        dark:bg-zinc-900/60
        sm:p-10
      "
    >
      {/* Ambient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF9324]/[0.08] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/[0.05] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-900/5 to-transparent dark:via-white/10" />
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-6">
          {/* Avatar with gradient ring */}
          <div className="relative shrink-0">
            <div
              className="
                h-[104px] w-[104px]
                rounded-full
                bg-gradient-to-br from-[#FF9324] via-orange-400/70 to-violet-400/60
                p-[3px]
              "
            >
              <div className="h-full w-full overflow-hidden rounded-full bg-white p-[3px] dark:bg-zinc-900">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-orange-50 dark:bg-zinc-800">
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={displayName}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-3xl font-semibold tracking-tight text-[#FF9324]">
                      {initials}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <span
              className={`
                absolute
                bottom-1.5
                right-1.5
                h-4
                w-4
                rounded-full
                ${badge.dot}
                ring-[3px]
                ring-white
                dark:ring-zinc-900
              `}
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[28px] font-semibold tracking-tight text-zinc-900 dark:text-white">
                {displayName}
              </h1>

              <span
                className={`
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-white
                  px-3
                  py-1
                  text-xs
                  font-medium
                  ring-1
                  ${badge.ring}
                  ${badge.text}
                  dark:bg-white/5
                `}
              >
                <Sparkles size={12} strokeWidth={2.5} />
                {badge.label}
              </span>
            </div>

            <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
              AlgoForge member
            </p>

            <p className="mt-4 max-w-md text-[15px] leading-6 text-zinc-500 dark:text-zinc-400">
              Building consistency one coding problem at a time.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {githubUsername && (
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-zinc-200
                    bg-white
                    px-3.5
                    py-2
                    text-[13px]
                    font-medium
                    text-zinc-700
                    transition
                    hover:border-zinc-300
                    hover:bg-zinc-50
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-zinc-300
                    dark:hover:bg-white/[0.06]
                  "
                >
                  <FaGithub size={15} />
                  {githubUsername}
                  <ExternalLink
                    size={12}
                    className="text-zinc-400 transition group-hover:text-zinc-600"
                  />
                </a>
              )}

              {leetcodeUsername && (
                <a
                  href={`https://leetcode.com/${leetcodeUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-zinc-200
                    bg-white
                    px-3.5
                    py-2
                    text-[13px]
                    font-medium
                    text-zinc-700
                    transition
                    hover:border-orange-200
                    hover:bg-orange-50/60
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-zinc-300
                  "
                >
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[4px] bg-[#FFA116] text-[9px] font-bold text-white">
                    L
                  </span>
                  {leetcodeUsername}
                  <ExternalLink
                    size={12}
                    className="text-zinc-400 transition group-hover:text-orange-500"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onEdit}
          className="
            inline-flex
            h-11
            shrink-0
            items-center
            gap-2
            self-start
            rounded-full
            bg-zinc-900
            px-5
            text-[13px]
            font-semibold
            text-white
            shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]
            transition
            hover:bg-zinc-800
            dark:bg-white
            dark:text-zinc-900
            dark:hover:bg-zinc-100
            lg:self-center
          "
        >
          <Pencil size={15} />
          Edit Profile
        </motion.button>
      </div>
    </motion.section>
  );
}