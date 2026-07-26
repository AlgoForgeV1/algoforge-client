import {
  Brain,
  BarChart3,
  Target,
  Flame,
  Building2,
  AppWindow,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;

  /**
   * Position around Forgey
   */
  position:
    | "top-left"
    | "top-right"
    | "middle-left"
    | "middle-right"
    | "bottom-left"
    | "bottom-right";

  /**
   * Forgey animation target
   */
  target: {
    x: number;
    y: number;
  };
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "AI Interview Coach",
    description:
      "Receive personalized feedback on every problem with AI-powered insights and improvement suggestions.",
    icon: Brain,
    position: "top-left",
    target: {
      x: -1,
      y: -1,
    },
  },

  {
    id: 2,
    title: "Smart Analytics",
    description:
      "Track solving speed, consistency, topic mastery, and coding patterns with beautiful visual analytics.",
    icon: BarChart3,
    position: "top-right",
    target: {
      x: 1,
      y: -1,
    },
  },

  {
    id: 3,
    title: "Personalized Roadmap",
    description:
      "Focus on the right questions at the right time with AI-generated learning paths tailored to you.",
    icon: Target,
    position: "middle-left",
    target: {
      x: -1,
      y: 0,
    },
  },

  {
    id: 4,
    title: "Chrome Extension",
    description:
      "Analyze every solved problem directly on LeetCode without leaving the platform.",
    icon: AppWindow,
    position: "middle-right",
    target: {
      x: 1,
      y: 0,
    },
  },

  {
    id: 5,
    title: "Daily Streaks",
    description:
      "Stay consistent with reminders, streak tracking, and motivation that keeps you coding.",
    icon: Flame,
    position: "bottom-left",
    target: {
      x: -1,
      y: 1,
    },
  },

  {
    id: 6,
    title: "Company Preparation",
    description:
      "Practice curated interview questions for top companies with structured preparation paths.",
    icon: Building2,
    position: "bottom-right",
    target: {
      x: 1,
      y: 1,
    },
  },
];