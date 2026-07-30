"use client";

import Greeting from "../greeting/Greeting";
import Heatmap from "../heatmap/Heatmap";

export default function DashboardHome() {
  return (
    <div className="space-y-10 p-8">
      <Greeting name="Aadit" />

      {/* Heatmap */}
      <Heatmap />

      {/* AI Suggestions */}

      {/* Recent Activity */}
    </div>
  );
}