import { TrendingUp } from "lucide-react";

export default function ProgressCard() {
  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-xl">

      <div className="flex items-center justify-between">

        <span className="text-sm text-zinc-500">
          Weekly Progress
        </span>

        <TrendingUp
          className="text-orange-500"
          size={18}
        />

      </div>

      <h2 className="mt-4 text-3xl font-bold text-zinc-900">
        72%
      </h2>

      <div className="mt-5 h-3 rounded-full bg-zinc-200">

        <div className="h-full w-[72%] rounded-full bg-[#FF9324]" />

      </div>

    </div>
  );
}