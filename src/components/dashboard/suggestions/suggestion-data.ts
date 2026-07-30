import {
  Flame,
  Brain,
  Target,
} from "lucide-react";

import { Suggestion } from "./types";

export const suggestionData: Suggestion[] = [
  {
    id: "1",
    icon: Flame,
    title: "Maintain Your Streak",
    description:
      "Solve one problem today to keep your 14-day streak alive.",
    action: "Solve Now",
    priority: "high",
  },
  {
    id: "2",
    icon: Brain,
    title: "Continue Dynamic Programming",
    description:
      "You've solved 7 DP problems this week. Keep the momentum going.",
    action: "Continue",
    priority: "medium",
  },
  {
    id: "3",
    icon: Target,
    title: "Graphs Need Attention",
    description:
      "Only 28% of Graph questions are completed. Strengthen this topic.",
    action: "View Roadmap",
    priority: "low",
  },
];