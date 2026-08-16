import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Flame,
} from "lucide-react";

import { Activity } from "./types";

export const activityData: Activity[] = [
  {
    id: "1",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    title: "Solved Two Sum",
    description: "+45 XP • Easy",
    time: "2 min ago",
  },
  {
    id: "2",
    icon: Flame,
    iconColor: "text-orange-500",
    title: "Maintained 18 Day Streak",
    description: "Consistency is paying off.",
    time: "Today",
  },
  {
    id: "3",
    icon: BookOpen,
    iconColor: "text-blue-500",
    title: "Completed Arrays Roadmap",
    description: "42 problems completed.",
    time: "Yesterday",
  },
  {
    id: "4",
    icon: Brain,
    iconColor: "text-violet-500",
    title: "Started Dynamic Programming",
    description: "Next milestone unlocked.",
    time: "Yesterday",
  },
  {
    id: "5",
    icon: Award,
    iconColor: "text-amber-500",
    title: "Unlocked Consistency Badge",
    description: "Keep solving daily to level up.",
    time: "2 days ago",
  },
];