import {
  BarChart3,
  BookOpen,
  Bot,
  Flag,
  Home,
  GraduationCap,
  MessageSquareCode,
  Settings,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
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
    title: "Roadmaps",
    href: "/dashboard/roadmaps",
    icon: Flag,
    premium: true,
  },
  {
    title: "Teaching Mode",
    href: "/dashboard/teaching",
    icon: GraduationCap,
    premium: true,
  },
  {
    title: "Interview Simulator",
    href: "/dashboard/interview",
    icon: MessageSquareCode,
    premium: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];