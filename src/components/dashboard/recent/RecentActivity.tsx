"use client";

import GlassCard from "../../ui/glass-card";

import ActivityItem from "./ActivityItem";
import { activityData } from "./activity-data";

export default function RecentActivity() {
  return (
    <GlassCard className="p-7">
      <div className="mb-8">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Track your latest milestones and coding progress.
        </p>
      </div>

      <div className="divide-y divide-black/5 dark:divide-white/5">
        {activityData.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            index={index}
          />
        ))}
      </div>
    </GlassCard>
  );
}