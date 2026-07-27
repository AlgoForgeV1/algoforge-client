"use client";

import { Sparkles } from "lucide-react";

export default function WorkspaceHeader() {
  return (
    <div className="flex items-center justify-between pb-4">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">
          AF Workspace
        </p>
        <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">
          Solution Analysis
        </h3>
      </div>

      <div className="flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-600 dark:text-orange-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
        </span>
        Live Analysis
      </div>
    </div>
  );
}