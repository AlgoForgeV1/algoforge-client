"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { HTMLMotionProps, motion } from "framer-motion";

type DashboardButtonProps = React.PropsWithChildren<
  HTMLMotionProps<"button"> & {
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }
>;
export default function DashboardButton({
  children,
  className,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: DashboardButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      disabled={disabled || loading}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl",
        "bg-gradient-to-r from-orange-500 to-orange-600",
        "px-5 py-3",
        "font-medium text-white",
        "shadow-lg shadow-orange-500/20",
        "transition-all duration-300",
        "hover:shadow-xl hover:shadow-orange-500/30",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    >
      {/* Shine Animation */}
      <span
        className={cn(
          "absolute inset-0",
          "-translate-x-full",
          "bg-gradient-to-r",
          "from-transparent via-white/20 to-transparent",
          "transition-transform duration-700",
          "group-hover:translate-x-full"
        )}
      />

      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              opacity="0.25"
            />
            <path
              d="M22 12a10 10 0 00-10-10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <span className="relative z-10">Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="relative z-10">{leftIcon}</span>}

          <span className="relative z-10">{children}</span>

          {rightIcon && <span className="relative z-10">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
}