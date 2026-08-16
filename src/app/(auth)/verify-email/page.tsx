"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying",
  );
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("Verification token is missing.");
      return;
    }

    async function verifyEmail() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/verify-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
            }),
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Email verification failed.");
        }

        setStatus("success");
        setMessage("Your email has been verified successfully.");

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Email verification failed.",
        );
      }
    }

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {status === "verifying" && (
          <>
            <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-[#FF9324]" />

            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Verifying your email
            </h1>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Please wait while we verify your account.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              ✓
            </div>

            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Email verified!
            </h1>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {message}
            </p>

            <p className="mt-4 text-xs text-zinc-400">
              Redirecting you to login...
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              !
            </div>

            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Verification failed
            </h1>

            <p className="mt-2 text-sm text-red-500">{message}</p>

            <button
              onClick={() => router.push("/login")}
              className="mt-6 h-11 rounded-xl bg-[#FF9324] px-6 text-sm font-semibold text-white transition hover:bg-[#ff9d32]"
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}