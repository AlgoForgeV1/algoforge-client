import { HeatmapDay } from "./types";

const titles = [
  "Two Sum",
  "Clone Graph",
  "Course Schedule",
  "LRU Cache",
  "House Robber",
  "Word Break",
  "Binary Tree Paths",
  "Top K Frequent",
];

const difficulty = ["Easy", "Medium", "Hard"] as const;

const today = new Date();

export const heatmapData: HeatmapDay[] = Array.from(
  { length: 365 },
  (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (364 - i));

    const solved = i % 6;

    return {
      date: date.toISOString(),

      totalSolved: solved,

      xp: solved * 45,

      accuracy: solved === 0 ? 0 : 70 + (i % 30),

      averageTime: solved === 0 ? 0 : 10 + (i % 25),

      problems: Array.from({ length: solved }, (_, index) => ({
        id: `${i}-${index}`,
        title: titles[(i + index) % titles.length],
        difficulty: difficulty[(i + index) % difficulty.length],
      })),
    };
  }
);