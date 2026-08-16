"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import GlassCard from "../../ui/glass-card";
import { cn } from "@/lib/utils";
import { navigation } from "./navigation";
import { getProfile, type ProfileResponse } from "@/src/lib/api/profile";

export default function Sidebar() {
  const pathname = usePathname();

  const [profile, setProfile] = useState<ProfileResponse | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    }

    loadProfile();
  }, []);

  const displayName = profile?.profile.displayName || "User";

  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="flex h-screen flex-col border-r border-black/5 bg-white/90 px-5 py-6 backdrop-blur-xl dark:border-white/5 dark:bg-[#09090B]/90">
      {/* Logo */}
      <Link href="/" className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg shadow-orange-500/30">
          AF
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight">
            <span className="text-zinc-900 dark:text-white">Algo</span>
            <span className="text-orange-500">Forge</span>
          </h1>

          <p className="text-xs text-zinc-500">
            AI Interview Coach
          </p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigation.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
                active
                  ? "bg-orange-500/10 text-orange-400"
                  : "text-zinc-600 hover:bg-black/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
              )}
            >
              {/* Active Indicator */}
              {active && (
                <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-orange-500" />
              )}

              <Icon className="h-5 w-5" />

              <span className="flex-1 font-medium">
                {item.title}
              </span>

              {item.premium && (
                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2 py-0.5 text-[10px] font-semibold text-orange-400">
                  PRO
                </span>
              )}

              {!item.premium && (
                <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <Link
        href="/profile"
        className="group block rounded-2xl"
      >
        <GlassCard className="p-4 transition-colors group-hover:border-orange-500/30">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            {profile?.profile.avatarUrl ? (
              <img
                src={profile.profile.avatarUrl}
                alt={displayName}
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 font-semibold text-white">
                {initials}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h3 className="truncate font-medium text-zinc-900 dark:text-white">
                {displayName}
              </h3>

              <p className="text-sm text-zinc-500">
                Free Plan
              </p>
            </div>

            <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </GlassCard>
      </Link>
    </aside>
  );
}