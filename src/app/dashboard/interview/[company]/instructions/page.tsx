"use client";

import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe,
  Keyboard,
  Laptop,
  Monitor,
  ShieldCheck,
} from "lucide-react";

interface Props {
  params: Promise<{
    company: string;
  }>;

  searchParams: Promise<{
    mode?: string;
  }>;
}

const checks = [
  {
    icon: Laptop,
    title: "Browser",
    status: "Supported",
  },
  {
    icon: Globe,
    title: "Internet",
    status: "Connected",
  },
  {
    icon: Keyboard,
    title: "Keyboard",
    status: "Detected",
  },
  {
    icon: Monitor,
    title: "Display",
    status: "1920 × 1080",
  },
];

export default function InstructionsPage({
  params,
  searchParams,
}: Props) {
  const { company: slug } = use(params);
  const { mode = "practice" } = use(searchParams);

  const company =
    slug.charAt(0).toUpperCase() +
    slug.slice(1);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Hero */}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-10
          dark:border-zinc-800
          dark:bg-zinc-900
        "
      >
        <h1 className="text-4xl font-bold">
          {company} Interview
        </h1>

        <p className="mt-3 text-zinc-500">
          Please verify your system before starting the assessment.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {checks.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-zinc-200
                  p-5
                  dark:border-zinc-800
                "
              >
                <Icon
                  size={24}
                  className="text-orange-500"
                />

                <p className="mt-5 font-semibold">
                  {item.title}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-green-500">
                  <CheckCircle2 size={16} />
                  {item.status}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Rules */}

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <ShieldCheck
              className="text-orange-500"
              size={26}
            />

            <h2 className="text-2xl font-semibold">
              Rules
            </h2>
          </div>

          <div className="mt-8 space-y-5">
            {(mode === "practice"
              ? [
                  "Unlimited Run Code",
                  "Hints available",
                  "Pause timer",
                  "View solutions after submission",
                  "Unlimited attempts",
                ]
              : [
                  "No tab switching",
                  "No hints",
                  "Fullscreen required",
                  "One submission only",
                  "Hidden testcases",
                  "Timer cannot pause",
                ]
            ).map((rule) => (
              <div
                key={rule}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-orange-500"
                />

                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <Clock3
              className="text-orange-500"
              size={26}
            />

            <h2 className="text-2xl font-semibold">
              Assessment Summary
            </h2>
          </div>

          <div className="mt-8 space-y-6">
            <SummaryRow
              label="Duration"
              value="100 Minutes"
            />

            <SummaryRow
              label="Coding Questions"
              value="2"
            />

            <SummaryRow
              label="MCQs"
              value="2"
            />

            <SummaryRow
              label="Languages"
              value="Java • C++ • Python • JS"
            />

            <SummaryRow
              label="Mode"
              value={
                mode === "practice"
                  ? "Practice"
                  : "Interview"
              }
            />
          </div>
        </div>
      </section>

      {/* Start */}

      <div className="flex justify-end">
        <Link
          href={`/dashboard/interview/${slug}/assessment?mode=${mode}`}
          className="
            flex
            h-14
            items-center
            gap-2
            rounded-2xl
            bg-orange-500
            px-8
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "
        >
          Start Assessment

          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
      <span className="text-zinc-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}