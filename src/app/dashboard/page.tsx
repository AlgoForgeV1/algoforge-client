import Greeting from "@/src/components/dashboard/greeting/Greeting";
import Heatmap from "@/src/components/dashboard/heatmap/Heatmap";
import Suggestions from "@/src/components/dashboard/suggestions/Suggestions";
import RecentActivity from "@/src/components/dashboard/recent/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Greeting name="Aadit" />

      <Heatmap />

      <Suggestions />

      <RecentActivity />
    </div>
  );
}