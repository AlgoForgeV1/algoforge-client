"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import DiceAvatar from "./DiceAvatar";
import { AvatarStyle } from "./AvatarStyles";

interface Props {
  style: AvatarStyle;
  title: string;
  description: string;
  seed: string;
  selected: boolean;
  onClick: () => void;
}

export default function AvatarCard({
  style,
  title,
  description,
  seed,
  selected,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative
        flex
        flex-col
        items-center
        rounded-2xl
        border
        p-5
        transition-all

        ${
          selected
            ? "border-[#FF9324] bg-orange-50 shadow-lg shadow-orange-500/10 dark:bg-orange-500/10"
            : "border-zinc-200 bg-white hover:border-[#FF9324] dark:border-zinc-700 dark:bg-zinc-900"
        }
      `}
    >
      <DiceAvatar
        style={style}
        seed={seed}
        size={88}
        className="rounded-full"
      />

      <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
        {description}
      </p>

      {selected && (
        <motion.div
          layoutId="avatar-selected"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF9324] text-white"
        >
          <Check size={16} />
        </motion.div>
      )}
    </motion.button>
  );
}