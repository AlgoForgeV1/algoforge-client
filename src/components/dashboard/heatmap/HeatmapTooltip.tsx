"use client";

import { format } from "date-fns";

import { HeatmapDay } from "./types";

interface Props {
  day: HeatmapDay;
}

export default function HeatmapTooltip({
  day,
}: Props) {
  return (
    <div className="w-72">

      <p className="font-semibold">
        {format(new Date(day.date), "MMMM d, yyyy")}
      </p>

      {day.totalSolved === 0 ? (
        <div className="mt-3 space-y-2">

          <p className="text-sm text-zinc-500">
            No questions solved.
          </p>

          <p className="text-xs text-orange-500">
            Keep your streak alive 🔥
          </p>

        </div>
      ) : (
        <>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">

            <div>
              <p className="text-xl font-bold text-orange-500">
                {day.totalSolved}
              </p>

              <p className="text-xs text-zinc-500">
                Solved
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-orange-500">
                {day.xp}
              </p>

              <p className="text-xs text-zinc-500">
                XP
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-orange-500">
                {day.accuracy}%
              </p>

              <p className="text-xs text-zinc-500">
                Accuracy
              </p>
            </div>

          </div>

          <div className="mt-4 border-t border-border pt-3">

            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Solved Problems
            </p>

            <div className="space-y-2">

              {day.problems.map(problem => (
                <div
                  key={problem.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">
                    {problem.title}
                  </span>

                  <span
                    className={`
                      rounded-full
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold

                      ${
                        problem.difficulty === "Easy"
                          ? "bg-green-500/10 text-green-500"
                          : problem.difficulty === "Medium"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : "bg-red-500/10 text-red-500"
                      }
                    `}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </>
      )}
    </div>
  );
}