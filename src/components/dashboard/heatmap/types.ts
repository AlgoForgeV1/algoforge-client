export interface SolvedProblem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface HeatmapDay {
  date: string;

  totalSolved: number;

  xp: number;

  accuracy: number;

  averageTime: number;

  problems: SolvedProblem[];
}