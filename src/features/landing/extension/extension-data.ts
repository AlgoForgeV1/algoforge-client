import {
  AppWindow,
  LayoutDashboard,
  Code2,
  Trophy,
  BrainCircuit,
  ShieldCheck,
  MousePointerClick,
  RefreshCw,
  Globe,
  Lock,
} from "lucide-react";

export const setupStates = [
  {
    title: "Add to Chrome",
    subtitle: "Installing AlgoForge Extension...",
    progress: 20,
    status: "installing",
  },
  {
    title: "Extension Installed",
    subtitle: "Signing you in securely...",
    progress: 45,
    status: "installed",
  },
  {
    title: "Account Connected",
    subtitle: "Syncing your dashboard...",
    progress: 75,
    status: "syncing",
  },
  {
    title: "You're Ready!",
    subtitle: "Start solving problems anywhere.",
    progress: 100,
    status: "ready",
  },
];

export const platforms = [
  {
    name: "LeetCode",
    icon: Code2,
    color: "text-orange-500",
    position: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
    position: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    name: "Codeforces",
    icon: Trophy,
    color: "text-violet-500",
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    name: "Chrome",
    icon: AppWindow,
    color: "text-green-500",
    position: "left-0 top-1/2 -translate-y-1/2",
  },
];

export const features = [
  {
    icon: MousePointerClick,
    title: "One Click Setup",
    description: "Install and start tracking in under 30 seconds.",
  },
  {
    icon: RefreshCw,
    title: "Auto Sync",
    description: "Every solved problem instantly updates your dashboard.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Built for modern coding platforms and interview prep.",
  },
  {
    icon: Lock,
    title: "Secure & Lightweight",
    description: "Runs quietly in the background without slowing you down.",
  },
];

export const supportedPlatforms = [
  "LeetCode",
  "Codeforces",
  "HackerRank",
  "CodeChef",
  "AtCoder",
];

export const chromeStoreStats = {
  rating: "4.9",
  users: "10K+ Developers",
};