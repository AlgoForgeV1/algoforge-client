"use client";

import { useState } from "react";
import ProfileHero from "./ProfileHero";
import CodingProfiles from "./CodingProfiles";
import ExperienceCard from "./ExperienceCard";
import SubscriptionCard from "./SubscriptionCard";

import EditProfileDialog from "./EditProfileDialog";

interface ProfileData {
  displayName: string;
  avatarUrl?: string | null;
  experienceLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  githubUsername?: string | null;
  leetcodeUsername?: string | null;
  plan: "FREE" | "PRO" | "TEAM";
  renewsOn?: string | null;
}

export default function ProfilePage({ profile }: { profile: ProfileData }) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-6 py-10">
      <ProfileHero
        displayName={profile.displayName}
        avatarUrl={profile.avatarUrl}
        experienceLevel={profile.experienceLevel}
        githubUsername={profile.githubUsername}
        leetcodeUsername={profile.leetcodeUsername}
        onEdit={() => setEditOpen(true)}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <ExperienceCard experienceLevel={profile.experienceLevel} />
          <CodingProfiles
            githubUsername={profile.githubUsername}
            leetcodeUsername={profile.leetcodeUsername}
          />
        </div>

        <div className="space-y-6">
          <SubscriptionCard plan={profile.plan} renewsOn={profile.renewsOn} />
 
        </div>
      </div>

      <EditProfileDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        defaultValues={{
          displayName: profile.displayName,
          githubUsername: profile.githubUsername ?? undefined,
          leetcodeUsername: profile.leetcodeUsername ?? undefined,
          experienceLevel: profile.experienceLevel,
        }}
      />
    </div>
  );
}