"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const onboardingCompleted =
      searchParams.get("onboardingCompleted");

    if (onboardingCompleted === "true") {
      router.replace("/dashboard");
    } else {
      router.replace("/onboarding");
    }
  }, [router, searchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-[#FF9324]" />

        <p className="mt-4 text-sm text-zinc-500">
          Signing you in...
        </p>
      </div>
    </main>
  );
}