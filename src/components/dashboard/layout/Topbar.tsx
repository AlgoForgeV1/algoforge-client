"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Bell,
  Flame,
  Moon,
  Search,
  Sun,
} from "lucide-react";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-black/5 dark:border-white/5 bg-white/90 dark:bg-[#09090B]/80 px-8 backdrop-blur-xl">
      {/* Search */}
      <div className="relative w-full max-w-lg">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          placeholder="Search problems, reports..."
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-black/5
            dark:border-white/5
            bg-black/5
            dark:bg-white/5
            pl-11
            pr-20
            text-sm
            text-zinc-900
            dark:text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-zinc-500
            focus:border-orange-500/40
            focus:bg-black/[0.07]
            dark:focus:bg-white/[0.07]
          "
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2 py-1 text-xs text-zinc-500">
          Ctrl K
        </div>
      </div>

      {/* Right Actions */}
      <div className="ml-8 flex items-center gap-3">
        {/* Streak */}
        <div className="flex items-center gap-2 rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-2">
          <Flame
            size={18}
            className="text-orange-500"
          />

          <span className="text-sm font-medium text-orange-400">
            18 Day Streak
          </span>
        </div>

        {/* Notifications */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-black/5
            dark:border-white/5
            bg-black/5
            dark:bg-white/5
            text-zinc-900
            dark:text-white
            transition
            hover:bg-black/10
            dark:hover:bg-white/10
          "
        >
          <Bell size={19} />
        </button>

        {/* Theme */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-black/5
            dark:border-white/5
            bg-black/5
            dark:bg-white/5
            text-zinc-900
            dark:text-white
            transition
            hover:bg-black/10
            dark:hover:bg-white/10
          "
        >
          {mounted && (theme === "dark" ? <Moon size={18} /> : <Sun size={18} />)}
        </button>
      </div>
    </header>
  );
}