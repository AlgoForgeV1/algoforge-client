"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  AtSign,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Pencil,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  getProfile,
  type ProfileResponse,
} from "@/src/lib/api/profile";

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load profile.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-50 px-6 py-10 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl animate-pulse">
          <div className="h-6 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />

          <div className="mt-8 h-56 rounded-3xl bg-zinc-200 dark:bg-zinc-900" />

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="h-40 rounded-3xl bg-zinc-200 dark:bg-zinc-900" />
            <div className="h-40 rounded-3xl bg-zinc-200 dark:bg-zinc-900" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 dark:bg-zinc-950">
        <div className="text-center">
          <p className="text-sm text-red-500">
            {error || "Profile not found."}
          </p>

          <Link
            href="/dashboard"
            className="mt-4 inline-flex text-sm font-medium text-[#FF9324] hover:underline"
          >
            Back to dashboard
          </Link>
        </div>
      </main>
    );
  }

  const { user, profile: userProfile, preferences } = profile;

  const initials = userProfile.displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 dark:bg-zinc-950 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Top bar */}

        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            Dashboard
          </Link>

          <Link
            href="/settings"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-[#FF9324] hover:text-[#FF9324] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            Settings
          </Link>
        </div>

        {/* Header */}

        <section className="relative mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FF9324]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              {/* Avatar */}

              {userProfile.avatarUrl ? (
                <img
                  src={userProfile.avatarUrl}
                  alt={userProfile.displayName}
                  className="h-24 w-24 rounded-2xl border border-zinc-200 object-cover dark:border-zinc-700"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#FF9324] text-2xl font-bold text-white">
                  {initials}
                </div>
              )}

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {userProfile.displayName}
                  </h1>

                  {user.isEmailVerified && (
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[11px] font-medium text-green-600">
                      Verified
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  @{userProfile.username}
                </p>

                <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                  <Mail size={14} />
                  {user.email}
                </p>
              </div>
            </div>

            <Link
              href="/settings?section=profile"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF9324] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff9d32] active:scale-[0.98]"
            >
              <Pencil size={15} />
              Edit Profile
            </Link>
          </div>
        </section>

        {/* Main grid */}

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Developer */}

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF9324]">
                <Code2 size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-zinc-900 dark:text-white">
                  Developer profile
                </h2>

                <p className="text-xs text-zinc-500">
                  Your coding preferences
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <InfoRow
                icon={<Code2 size={16} />}
                label="Preferred language"
                value={
                  preferences.preferredLanguage?.name ||
                  "Not selected"
                }
              />

              <InfoRow
                icon={<Trophy size={16} />}
                label="Experience"
                value={formatExperience(userProfile.experienceLevel)}
              />

              <InfoRow
                icon={<Target size={16} />}
                label="Target role"
                value={preferences.targetRole || "Not set"}
              />
            </div>
          </section>

          {/* Goals */}

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF9324]">
                <Target size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-zinc-900 dark:text-white">
                  Coding goals
                </h2>

                <p className="text-xs text-zinc-500">
                  Your current targets
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatBox
                value={
                  preferences.dailyGoalMinutes
                    ? `${preferences.dailyGoalMinutes}m`
                    : "—"
                }
                label="Daily goal"
              />

              <StatBox
                value={
                  preferences.weeklyGoalProblems
                    ? `${preferences.weeklyGoalProblems}`
                    : "—"
                }
                label="Weekly problems"
              />
            </div>

            {preferences.targetCompany.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium text-zinc-500">
                  Target companies
                </p>

                <div className="flex flex-wrap gap-2">
                  {preferences.targetCompany.map((company) => (
                    <span
                      key={company}
                      className="rounded-lg border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Connections */}

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF9324]">
                <Globe size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-zinc-900 dark:text-white">
                  Developer connections
                </h2>

                <p className="text-xs text-zinc-500">
                  Your connected developer profiles
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ConnectionCard
                icon={<FaGithub size={18} />}
                title="GitHub"
                username={userProfile.githubUsername}
                href={
                  userProfile.githubUsername
                    ? `https://github.com/${userProfile.githubUsername}`
                    : undefined
                }
              />

              <ConnectionCard
                icon={<Code2 size={18} />}
                title="LeetCode"
                username={userProfile.leetcodeUsername}
                href={
                  userProfile.leetcodeUsername
                    ? `https://leetcode.com/u/${userProfile.leetcodeUsername}/`
                    : undefined
                }
              />
            </div>
          </section>

          {/* Account */}

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF9324]">
                <UserRound size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-zinc-900 dark:text-white">
                  Account
                </h2>

                <p className="text-xs text-zinc-500">
                  Account information
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoRow
                icon={<AtSign size={16} />}
                label="Username"
                value={`@${userProfile.username}`}
              />

              <InfoRow
                icon={<Mail size={16} />}
                label="Email"
                value={user.email}
              />

              <InfoRow
                icon={<UserRound size={16} />}
                label="Member since"
                value={formatDate(user.createdAt)}
              />

              <InfoRow
                icon={<Globe size={16} />}
                label="Profile status"
                value={
                  user.onboardingCompleted
                    ? "Profile complete"
                    : "Profile incomplete"
                }
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-4 last:border-0 last:pb-0 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <span className="text-zinc-400">{icon}</span>

        <span className="text-sm text-zinc-500">{label}</span>
      </div>

      <span className="text-right text-sm font-medium text-zinc-900 dark:text-zinc-200">
        {value}
      </span>
    </div>
  );
}

function StatBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xl font-bold text-zinc-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}

function ConnectionCard({
  icon,
  title,
  username,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  username: string | null;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <span className="text-zinc-500 dark:text-zinc-300">
          {icon}
        </span>

        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-white">
            {title}
          </p>

          <p className="text-xs text-zinc-500">
            {username ? `@${username}` : "Not connected"}
          </p>
        </div>
      </div>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition hover:text-[#FF9324]"
        >
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}

function formatExperience(level: ProfileResponse["profile"]["experienceLevel"]) {
  return level.charAt(0) + level.slice(1).toLowerCase();
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}