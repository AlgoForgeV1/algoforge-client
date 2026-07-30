import {
  BarChart3,
  BookOpen,
  Bot,
  Flag,
  Home,
  Lock,
  Settings,
  Trophy,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.ElementType;
  premium?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "AI Reports",
    href: "/dashboard/reports",
    icon: Bot,
  },
  {
    title: "Question Library",
    href: "/dashboard/library",
    icon: BookOpen,
  },
  {
    title: "Roadmaps",
    href: "/dashboard/roadmaps",
    icon: Flag,
    premium: true,
  },
  {
    title: "Teaching Mode",
    href: "/dashboard/teaching",
    icon: Lock,
    premium: true,
  },
  {
    title: "Interview Simulator",
    href: "/dashboard/interview",
    icon: Trophy,
    premium: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];