"use client";

import GlassCard from "../../ui/glass-card";

import HeatmapCell from "./HeatmapCell";
import { heatmapData } from "./heatmap-data";

export default function Heatmap() {
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

      <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1">

        {heatmapData.map(day => (
          <HeatmapCell
            key={day.date}
            day={day}
          />
        ))}

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