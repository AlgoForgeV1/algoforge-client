export interface SolutionLine {
  id: number;
  text: string;
  highlight?: boolean;
}

export interface AnalysisItem {
  id: number;
  title: string;
  value: string;
  highlightLine?: number;
}

export interface Recommendation {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
}