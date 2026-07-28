import { LucideIcon } from "lucide-react";

export interface Suggestion {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  priority: "high" | "medium" | "low";
}