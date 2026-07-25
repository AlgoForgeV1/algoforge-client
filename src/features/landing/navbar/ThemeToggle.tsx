"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        bg-black/5 dark:bg-white/5
        "
        aria-label="Toggle Theme"
      />
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-black/5
      dark:bg-white/5
      text-zinc-700
      dark:text-zinc-300
      transition-all
      hover:scale-105
      hover:text-orange-500
      "
      aria-label="Toggle Theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}