"use client";

import { Tooltip } from "./tooltip";
import { TooltipContent, TooltipTrigger } from "./tooltip";
import HeatmapTooltip from "./HeatmapTooltip";
import { HeatmapDay } from "./types";

interface Props {
  day: HeatmapDay;
}

export default function HeatmapCell({
  day,
}: Props) {
  const color =
    day.totalSolved === 0
      ? "bg-zinc-200 dark:bg-zinc-800"
      : day.totalSolved <= 2
      ? "bg-orange-200 dark:bg-orange-900"
      : day.totalSolved <= 4
      ? "bg-orange-400"
      : "bg-orange-500";

  return (
    <Tooltip>

      <TooltipTrigger
  className={`
    h-3
    w-3
    cursor-pointer
    rounded-[3px]
    transition-all
    duration-200

    hover:scale-125
    hover:ring-2
    hover:ring-orange-400

    ${color}
  `}
/>


      <TooltipContent
        side="top"
        className="rounded-2xl p-4"
      >
        <HeatmapTooltip day={day} />
      </TooltipContent>

    </Tooltip>
  );
}