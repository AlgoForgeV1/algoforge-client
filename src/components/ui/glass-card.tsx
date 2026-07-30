import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

export default function GlassCard({
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border backdrop-blur-xl transition-all duration-300",

        // Light Theme
        "border-zinc-200/80 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",

        // Dark Theme
        "dark:border-white/5 dark:bg-white/5 dark:shadow-none",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}