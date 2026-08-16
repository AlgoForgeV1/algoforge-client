import { LucideIcon } from "lucide-react";

export interface Activity {
  id: string;
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  time: string;
}