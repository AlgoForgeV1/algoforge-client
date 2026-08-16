"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import StepName from "./StepName";
import StepExperience from "./StepExperience";
import StepLanguages from "./StepLanguages";
import StepAvatar from "./StepAvatar";
import ProgressBar from "./PorgressBar";
import { getProgrammingLanguages } from "@/src/lib/api/auth";

import { AvatarStyle } from "../avatar/AvatarStyles";

interface ProgrammingLanguage {
  id: string;
  name: string;
}

interface OnboardingData {
  name: string;
  username: string;
  experience: string;
  language: string;
  avatarStyle: AvatarStyle;
  avatarSeed: string;
}

export default function Onboarding() {

  const [languages, setLanguages] = useState<
  ProgrammingLanguage[]
>([]);

const [languageLoading, setLanguageLoading] =
  useState(true);

const [languageError, setLanguageError] =
  useState("");
  const [step, setStep] = useState(0);

  const [onboarding, setOnboarding] =
    useState<OnboardingData>({
      name: "",
      username: "",
      experience: "",
      language: "",
      avatarStyle: "initials",
      avatarSeed: "",
    });

  const totalSteps = 4;

  const next = () => {
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
    }
  };

  const previous = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  useEffect(() => {
  async function loadLanguages() {
    try {
      setLanguageLoading(true);
      setLanguageError("");

      const data = await getProgrammingLanguages();

      setLanguages(data);
    } catch (error) {
      setLanguageError(
        error instanceof Error
          ? error.message
          : "Failed to load programming languages.",
      );
    } finally {
      setLanguageLoading(false);
    }
  }

  loadLanguages();
}, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -right-40 -bottom-40 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,147,36,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,147,36,.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl">
          <ProgressBar
            current={step + 1}
            total={totalSteps}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                mt-8 rounded-3xl border border-zinc-200
                bg-white/90 p-8 shadow-2xl
                backdrop-blur-xl
                dark:border-zinc-800
                dark:bg-zinc-900/80
              "
            >
              {step === 0 && (
                <StepName
                  next={next}
                  name={onboarding.name}
                  username={onboarding.username}
                  onNameChange={(name) =>
                    setOnboarding((prev) => ({
                      ...prev,
                      name,
                      avatarSeed:
                        prev.avatarSeed || name,
                    }))
                  }
                  onUsernameChange={(username) =>
                    setOnboarding((prev) => ({
                      ...prev,
                      username,
                    }))
                  }
                />
              )}

              {step === 1 && (
                <StepExperience
                  next={next}
                  previous={previous}
                  value={onboarding.experience}
                  onChange={(experience) =>
                    setOnboarding((prev) => ({
                      ...prev,
                      experience,
                    }))
                  }
                />
              )}

              {step === 2 && (
  <StepLanguages
    next={next}
    previous={previous}
    value={onboarding.language}
    onChange={(language) =>
      setOnboarding((prev) => ({
        ...prev,
        language,
      }))
    }
    languages={languages}
  />
)}

              {step === 3 && (
                <StepAvatar
                  previous={previous}
                  onboarding={onboarding}
                  setOnboarding={setOnboarding}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}