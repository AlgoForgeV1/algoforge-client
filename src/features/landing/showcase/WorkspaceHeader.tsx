"use client";

import { Sparkles } from "lucide-react";

export default function WorkspaceHeader() {
  return (
    <div className="flex items-center justify-between border-b border-neutral-200 pb-6 dark:border-white/10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
          AF Workspace
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">
          Solution Analysis
        </h3>

        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          AI-powered insights generated from your submission.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
        </span>

        <Sparkles size={16} />

        Live Analysis
      </div>
    </div>
  );
}