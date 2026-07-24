import { Code2 } from "lucide-react";

export default function StatsCard() {
  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-xl">

      <Code2
        className="text-orange-500"
        size={24}
      />

      <h2 className="mt-5 text-3xl font-bold text-zinc-900">
        148
      </h2>

      <p className="mt-2 text-zinc-500">
        Problems Solved
      </p>

    </div>
  );
}