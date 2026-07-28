export default function HeatmapLegend() {
  return (
    <div className="flex items-center gap-2 text-xs text-zinc-500">
      <span>Less</span>

      <div className="h-3 w-3 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-3 w-3 rounded bg-orange-200 dark:bg-orange-900" />
      <div className="h-3 w-3 rounded bg-orange-400" />
      <div className="h-3 w-3 rounded bg-orange-500" />

      <span>More</span>
    </div>
  );
}