import { Flame } from "lucide-react";

export default function StreakCard() {
  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-xl">

      <Flame
        className="text-orange-500"
        size={26}
      />

      <h2 className="mt-5 text-4xl font-bold text-zinc-900">
        28
      </h2>

      <p className="mt-2 text-zinc-500">
        Day Streak
      </p>

    </div>
  );
}