"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-3">

      <ThemeToggle />

      <Link
        href="/login"
        className="
        hidden
        rounded-full
        px-5
        py-2.5
        text-[14px]
        font-medium

        text-zinc-700
        transition-all
        duration-200

        hover:bg-black/5
        hover:text-black

        dark:text-zinc-300
        dark:hover:bg-white/5
        dark:hover:text-white

        md:block
        "
      >
        Login
      </Link>

      <Link
        href="/signup"
        className="
        rounded-full

        bg-gradient-to-r
        from-orange-500
        to-orange-400

        px-6
        py-2.5

        text-[14px]
        font-semibold
        text-white

        shadow-lg
        shadow-orange-500/20

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:shadow-xl
        hover:shadow-orange-500/30
        active:translate-y-0
        "
      >
        Get Started
      </Link>

    </div>
  );
}