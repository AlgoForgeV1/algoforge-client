"use client";

import GlassCard from "../../ui/glass-card";

import HeatmapCell from "./HeatmapCell";
import { heatmapData } from "./heatmap-data";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Heatmap() {
  const monthLabels = heatmapData.reduce<
    { month: string; column: number }[]
  >((labels, day, index) => {
    const date = new Date(day.date);

    if (date.getDate() === 1) {
      labels.push({
        month: MONTHS[date.getMonth()],
        column: Math.floor(index / 7),
      });
    }

    return labels;
  }, []);

  return (
    <GlassCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Question Activity
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Your consistency over the last year.
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="w-[848px]">
          {/* Month Labels */}
          <div className="relative mb-3 h-5">
            {monthLabels.map((label) => (
              <span
                key={`${label.month}-${label.column}`}
                className="absolute text-xs font-medium text-zinc-500"
                style={{
                  left: `${label.column * 16}px`,
                }}
              >
                {label.month}
              </span>
            ))}
          </div>

          {/* Heatmap */}
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {heatmapData.map((day) => (
              <HeatmapCell
                key={day.date}
                day={day}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-2xl font-bold text-orange-500">
            187
          </p>

          <p className="text-sm text-zinc-500">
            Problems Solved
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-orange-500">
            18
          </p>

          <p className="text-sm text-zinc-500">
            Day Streak
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-orange-500">
            31
          </p>

          <p className="text-sm text-zinc-500">
            Longest Streak
          </p>
        </div>
      </div>
    </GlassCard>
  );
}