"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Briefcase,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const companies = [
  {
    name: "Amazon",
    role: "SDE Intern",
    duration: "100 mins",
    questions: "2 Coding • 2 MCQs",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Google",
    role: "SWE Intern",
    duration: "90 mins",
    questions: "2 Coding",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Microsoft",
    role: "New Grad",
    duration: "120 mins",
    questions: "3 Coding",
    color: "from-sky-500 to-indigo-500",
  },
  {
    name: "Atlassian",
    role: "SDE",
    duration: "90 mins",
    questions: "2 Coding",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Adobe",
    role: "Intern",
    duration: "90 mins",
    questions: "2 Coding",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Salesforce",
    role: "Intern",
    duration: "100 mins",
    questions: "2 Coding",
    color: "from-blue-600 to-sky-500",
  },
];

export default function InterviewLandingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Hero */}

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
            <Sparkles size={16} />
            Premium Feature
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Interview Simulator
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Experience real Online Assessments from top companies with a VS Code
            powered editor, interview mode, AI evaluation and detailed feedback.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-zinc-200 px-5 py-3 dark:border-zinc-700">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm text-zinc-500">
                Companies
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 px-5 py-3 dark:border-zinc-700">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-zinc-500">
                OA Sets
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 px-5 py-3 dark:border-zinc-700">
              <div className="text-2xl font-bold">AI</div>
              <div className="text-sm text-zinc-500">
                Detailed Report
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Companies */}

      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Popular Companies
            </h2>

            <p className="mt-2 text-zinc-500">
              Practice the latest interview patterns.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -5,
              }}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div
                className={`h-2 bg-gradient-to-r ${company.color}`}
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {company.name}
                </h3>

                <p className="mt-1 text-zinc-500">
                  {company.role}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock3
                      size={18}
                      className="text-orange-500"
                    />

                    {company.duration}
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Briefcase
                      size={18}
                      className="text-orange-500"
                    />

                    {company.questions}
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <ShieldCheck
                      size={18}
                      className="text-orange-500"
                    />

                    Practice + Interview Mode
                  </div>
                </div>

                <Link
                  href={`/dashboard/interview/${company.name.toLowerCase()}`}
                  className="mt-8 flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start Simulation

                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}