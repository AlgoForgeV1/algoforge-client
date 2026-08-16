"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  CreditCard,
  Lock,
  LogOut,
  Shield,
  UserRound,
  WalletCards,
  Zap,
} from "lucide-react";

import { getProfile, type ProfileResponse } from "@/src/lib/api/profile";
import { logout } from "@/src/lib/api/auth";

type Section =
  | "account"
  | "subscription"
  | "payment"
  | "privacy";

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<Section>("account");

  const [profile, setProfile] = useState<ProfileResponse | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch {
        // The profile page/API handles authentication errors.
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  async function handleLogout() {
    try {
      await logout();
    } finally {
      window.location.href = "/login";
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 dark:bg-zinc-950 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition hover:border-[#FF9324] hover:text-[#FF9324] dark:border-zinc-800 dark:bg-zinc-900"
          >
            <ArrowLeft size={17} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Settings
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Manage your AlgoForge account.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[210px_1fr]">
          {/* Sidebar */}

          <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
            <SettingsButton
              active={activeSection === "account"}
              icon={<UserRound size={17} />}
              label="Account"
              onClick={() => setActiveSection("account")}
            />

            <SettingsButton
              active={activeSection === "subscription"}
              icon={<Zap size={17} />}
              label="Subscription"
              onClick={() => setActiveSection("subscription")}
            />

            <SettingsButton
              active={activeSection === "payment"}
              icon={<CreditCard size={17} />}
              label="Payment"
              onClick={() => setActiveSection("payment")}
            />

            <SettingsButton
              active={activeSection === "privacy"}
              icon={<Shield size={17} />}
              label="Privacy"
              onClick={() => setActiveSection("privacy")}
            />

            <div className="my-2 h-px bg-zinc-100 dark:bg-zinc-800" />

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              <LogOut size={17} />
              Log out
            </button>
          </aside>

          {/* Content */}

          <section className="min-w-0 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            {activeSection === "account" && (
              <AccountSection profile={profile} loading={loading} />
            )}

            {activeSection === "subscription" && (
              <SubscriptionSection />
            )}

            {activeSection === "payment" && (
              <PaymentSection />
            )}

            {activeSection === "privacy" && (
              <PrivacySection />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function SettingsButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-orange-500/10 text-[#FF9324]"
          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function AccountSection({
  profile,
  loading,
}: {
  profile: ProfileResponse | null;
  loading: boolean;
}) {
  return (
    <div>
      <SectionHeader
        icon={<UserRound size={19} />}
        title="Account"
        description="Manage your basic account information."
      />

      {loading ? (
        <div className="mt-8 space-y-4">
          <div className="h-16 animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-16 animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-16 animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
        </div>
      ) : profile ? (
        <div className="mt-8 space-y-3">
          <SettingRow
            label="Display name"
            value={profile.profile.displayName}
          />

          <SettingRow
            label="Username"
            value={`@${profile.profile.username}`}
          />

          <SettingRow
            label="Email"
            value={profile.user.email}
          />

          <SettingRow
            label="Experience"
            value={formatExperience(profile.profile.experienceLevel)}
          />

          <SettingRow
            label="Preferred language"
            value={
              profile.preferences.preferredLanguage?.name ||
              "Not selected"
            }
          />
        </div>
      ) : (
        <p className="mt-8 text-sm text-red-500">
          Unable to load account information.
        </p>
      )}
    </div>
  );
}

function SubscriptionSection() {
  return (
    <div>
      <SectionHeader
        icon={<Zap size={19} />}
        title="Subscription"
        description="Manage your AlgoForge plan and billing."
      />

      <div className="mt-8 overflow-hidden rounded-2xl border border-[#FF9324]/30 bg-orange-500/5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#FF9324]">
              Current plan
            </p>

            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
              Free
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Get started with the core AlgoForge experience.
            </p>
          </div>

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
            Active
          </span>
        </div>

        <button className="mt-6 rounded-xl bg-[#FF9324] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff9d32]">
          Upgrade plan
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <SimpleCard
          title="Plan renewal"
          value="—"
          description="No active subscription"
        />

        <SimpleCard
          title="Billing cycle"
          value="Free"
          description="No recurring payment"
        />
      </div>
    </div>
  );
}

function PaymentSection() {
  return (
    <div>
      <SectionHeader
        icon={<CreditCard size={19} />}
        title="Payment"
        description="Manage payment methods and billing history."
      />

      <div className="mt-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-500 dark:bg-zinc-800">
            <WalletCards size={20} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              No payment method
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              Add a payment method when you upgrade.
            </p>
          </div>
        </div>

        <button
          disabled
          className="mt-6 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-400 dark:border-zinc-800"
        >
          Add payment method
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
          Billing history
        </h3>

        <div className="mt-3 rounded-2xl border border-dashed border-zinc-200 p-8 text-center dark:border-zinc-800">
          <CreditCard className="mx-auto text-zinc-300 dark:text-zinc-700" size={24} />

          <p className="mt-3 text-sm text-zinc-500">
            No billing history yet.
          </p>
        </div>
      </div>
    </div>
  );
}

function PrivacySection() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [statsVisible, setStatsVisible] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <SectionHeader
        icon={<Shield size={19} />}
        title="Privacy"
        description="Control how your AlgoForge account is used."
      />

      <div className="mt-8 space-y-3">
        <ToggleRow
          icon={<GlobeIcon />}
          title="Public profile"
          description="Allow other users to view your developer profile."
          enabled={profileVisible}
          onChange={setProfileVisible}
        />

        <ToggleRow
          icon={<TrophyIcon />}
          title="Show coding statistics"
          description="Display your progress and coding statistics publicly."
          enabled={statsVisible}
          onChange={setStatsVisible}
        />

        <ToggleRow
          icon={<Bell size={17} />}
          title="Product notifications"
          description="Receive updates about your AlgoForge account."
          enabled={notifications}
          onChange={setNotifications}
        />
      </div>

      <div className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h3 className="text-sm font-semibold text-red-500">
          Danger zone
        </h3>

        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-red-200 bg-red-50/50 p-5 dark:border-red-900/40 dark:bg-red-950/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              Delete account
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Permanently remove your AlgoForge account and data.
            </p>
          </div>

          <button className="rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100 dark:border-red-900/50 dark:hover:bg-red-950/30">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF9324]">
        {icon}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function SettingRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950">
      <span className="text-sm text-zinc-500">{label}</span>

      <span className="text-right text-sm font-medium text-zinc-900 dark:text-zinc-200">
        {value}
      </span>
    </div>
  );
}

function SimpleCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
      <p className="text-xs text-zinc-500">{title}</p>

      <p className="mt-2 font-semibold text-zinc-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-zinc-500">{description}</p>
    </div>
  );
}

function ToggleRow({
  icon,
  title,
  description,
  enabled,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="flex min-w-0 items-center gap-3">
        <div className="text-zinc-400">{icon}</div>

        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-white">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-zinc-500">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        aria-pressed={enabled}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-[#FF9324]" : "bg-zinc-300 dark:bg-zinc-700"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function formatExperience(level: ProfileResponse["profile"]["experienceLevel"]) {
  return level.charAt(0) + level.slice(1).toLowerCase();
}

function GlobeIcon() {
  return <Shield size={17} />;
}

function TrophyIcon() {
  return <Zap size={17} />;
}