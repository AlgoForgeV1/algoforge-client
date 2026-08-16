"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { Activity } from "./types";

interface Props {
  activity: Activity;
  index: number;
}

export default function ActivityItem({
  activity,
  index,
}: Props) {
  const Icon = activity.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
      }}
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        px-2
        py-4
        transition-all
        duration-300
        hover:bg-black/[0.02]
        dark:hover:bg-white/[0.03]
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-zinc-100
            dark:bg-white/5
          "
        >
          <Icon
            size={22}
            className={clsx(activity.iconColor)}
          />
        </div>

        <div>
          <h3 className="font-medium text-zinc-900 dark:text-white">
            {activity.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {activity.description}
          </p>
        </div>
      </div>

      <span className="text-sm text-zinc-500 dark:text-zinc-500">
        {activity.time}
      </span>
    </motion.div>
  );
}