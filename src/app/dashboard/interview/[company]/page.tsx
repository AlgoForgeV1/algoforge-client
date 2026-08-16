import {
  Brain,
  Clock3,
  Code2,
  Sparkles,
} from "lucide-react";

import ModeSelector from "@/src/components/interview/ModeSelector";

interface Props {
  params: Promise<{
    company: string;
  }>;
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-5
        dark:border-zinc-800
        dark:bg-zinc-900
      "
    >
      <div className="text-orange-500">
        {icon}
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        {title}
      </p>

      <p className="mt-1 text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}

export default async function CompanyInterviewPage({
  params,
}: Props) {
  const { company: slug } = await params;

  const company =
    slug.charAt(0).toUpperCase() +
    slug.slice(1);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Hero */}

      <section
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-10
          dark:border-zinc-800
          dark:bg-zinc-900
        "
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-500">
            Interview Simulator
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            {company}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Practice the latest {company} Online Assessment with
            a VS Code powered editor, AI evaluation and real
            interview experience.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <InfoCard
              icon={<Clock3 size={22} />}
              title="Duration"
              value="100 Minutes"
            />

            <InfoCard
              icon={<Code2 size={22} />}
              title="Questions"
              value="2 Coding • 2 MCQs"
            />

            <InfoCard
              icon={<Brain size={22} />}
              title="Difficulty"
              value="Medium"
            />

            <InfoCard
              icon={<Sparkles size={22} />}
              title="AI Report"
              value="Included"
            />
          </div>
        </div>
      </section>

      {/* Topics */}

      <section
        className="
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-8
          dark:border-zinc-800
          dark:bg-zinc-900
        "
      >
        <h2 className="text-2xl font-semibold">
          Topics Covered
        </h2>

        <p className="mt-2 text-zinc-500">
          Based on recent Online Assessment patterns.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Arrays",
            "Strings",
            "HashMap",
            "Graphs",
            "Trees",
            "Greedy",
            "Binary Search",
            "Dynamic Programming",
          ].map((topic) => (
            <span
              key={topic}
              className="
                rounded-xl
                bg-orange-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-orange-500
              "
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Practice / Interview Mode */}

      <ModeSelector company={slug} />
    </div>
  );
}