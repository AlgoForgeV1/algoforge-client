import { Brain } from "lucide-react";

export default function RecommendationCard() {
  return (
    <div className="w-72 rounded-3xl bg-white p-6 shadow-xl">

      <Brain
        className="text-orange-500"
        size={22}
      />

      <h3 className="mt-5 font-semibold text-zinc-900">
        AI Recommendation
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Practice Graph algorithms today to improve interview readiness.
      </p>

    </div>
  );
}