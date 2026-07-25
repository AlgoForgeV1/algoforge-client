"use client";

export default function AuthDivider() {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />

      <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">
        OR
      </span>

      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}