"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  ArrowLeft,
  CheckCircle2,
  Lock,
} from "lucide-react";

import { resetPassword } from "@/src/lib/api/auth";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();

  const [token, setToken] =
    useState<string | null>(null);

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  useEffect(() => {
    setToken(searchParams.get("token"));
  }, [searchParams]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    if (!token) {
      setError("Invalid or missing reset link.");
      return;
    }

    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters long.",
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await resetPassword(
        token,
        password,
      );

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to reset password.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 dark:bg-zinc-950">

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,147,36,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,147,36,.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

      </div>

      <div className="relative z-10 w-full max-w-md">

        <Link
          href="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-[#FF9324]"
        >
          <ArrowLeft size={16} />
          Back to login
        </Link>

        <div
          className="
            rounded-3xl
            border
            border-zinc-200
            bg-white/90
            p-8
            shadow-2xl
            backdrop-blur-xl
            dark:border-zinc-800
            dark:bg-zinc-900/80
          "
        >

          {!success ? (
            <>
              <div className="mb-8">

                <div
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#FF9324]/10
                    text-[#FF9324]
                  "
                >
                  <Lock size={20} />
                </div>

                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Reset your password
                </h1>

                <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Choose a new password for your
                  AlgoForge account.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    New password
                  </label>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) =>
                      setPassword(
                        event.target.value,
                      )
                    }
                    autoComplete="new-password"
                    placeholder="Enter new password"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-zinc-200
                      bg-white
                      px-4
                      text-sm
                      outline-none
                      transition
                      focus:border-[#FF9324]
                      dark:border-zinc-700
                      dark:bg-zinc-900
                      dark:text-white
                    "
                  />

                </div>

                <div>

                  <label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(
                        event.target.value,
                      )
                    }
                    autoComplete="new-password"
                    placeholder="Confirm new password"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-zinc-200
                      bg-white
                      px-4
                      text-sm
                      outline-none
                      transition
                      focus:border-[#FF9324]
                      dark:border-zinc-700
                      dark:bg-zinc-900
                      dark:text-white
                    "
                  />

                </div>

                {error && (
                  <div
                    className="
                      rounded-xl
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-sm
                      text-red-600
                      dark:border-red-900/50
                      dark:bg-red-950/30
                      dark:text-red-400
                    "
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !token}
                  className="
                    h-12
                    w-full
                    rounded-xl
                    bg-[#FF9324]
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#ff9d32]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {loading
                    ? "Resetting..."
                    : "Reset password"}
                </button>

              </form>
            </>
          ) : (
            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-500/10
                  text-green-500
                "
              >
                <CheckCircle2 size={26} />
              </div>

              <h1 className="mt-5 text-2xl font-bold text-zinc-900 dark:text-white">
                Password updated
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Your password has been successfully
                reset.
              </p>

              <Link
                href="/login"
                className="
                  mt-7
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#FF9324]
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#ff9d32]
                "
              >
                Continue to login
              </Link>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}