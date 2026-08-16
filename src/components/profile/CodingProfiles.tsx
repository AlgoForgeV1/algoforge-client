"use client";

import { motion } from "framer-motion";
import { ExternalLink, Link2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  githubUsername?: string | null;
  leetcodeUsername?: string | null;
}

export default function CodingProfiles({
  githubUsername,
  leetcodeUsername,
}: Props) {
  const accounts = [
    {
      title: "GitHub",
      subtitle: "Code & contributions",
      username: githubUsername,
      icon: <FaGithub className="h-[18px] w-[18px]" />,
      href: githubUsername
        ? `https://github.com/${githubUsername}`
        : undefined,
      chip: "bg-zinc-900 dark:bg-white/10",
    },
    {
      title: "LeetCode",
      subtitle: "Practice history",
      username: leetcodeUsername,
      icon: (
        <span className="text-[11px] font-bold">L</span>
      ),
      href: leetcodeUsername
        ? `https://leetcode.com/${leetcodeUsername}`
        : undefined,
      chip: "bg-[#FFA116]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.4 }}
      className="
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
      <div className="flex items-center gap-2.5">
        <Link2 size={16} className="text-zinc-400" />
        <h2 className="text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-white">
          Connected accounts
        </h2>
      </div>

      <div className="mt-6 divide-y divide-zinc-100 dark:divide-white/[0.06]">
        {accounts.map((account) => (
          <div
            key={account.title}
            className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-white
                  ${account.chip}
                `}
              >
                {account.icon}
              </div>

              <div>
                <p className="text-[14px] font-medium text-zinc-900 dark:text-white">
                  {account.title}
                </p>
                <p className="text-[12.5px] text-zinc-400 dark:text-zinc-500">
                  {account.username
                    ? `@${account.username}`
                    : account.subtitle}
                </p>
              </div>
            </div>

            {account.username ? (
              <motion.a
                whileHover={{ x: 2 }}
                href={account.href}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-zinc-400
                  transition
                  hover:bg-zinc-100
                  hover:text-zinc-700
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-zinc-200
                "
              >
                <ExternalLink size={15} />
              </motion.a>
            ) : (
              <button
                className="
                  rounded-full
                  border
                  border-zinc-200
                  px-3.5
                  py-1.5
                  text-[12.5px]
                  font-medium
                  text-zinc-600
                  transition
                  hover:border-[#FF9324]/40
                  hover:text-[#FF9324]
                  dark:border-white/10
                  dark:text-zinc-300
                "
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}