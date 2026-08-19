"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";

import {
  login,
  register,
  getGoogleAuthUrl,
  getGitHubAuthUrl,
} from "@/src/lib/api/auth";

import { getProfile } from "@/src/lib/api/profile";

interface Props {
  mode: "login" | "signup";
}

export default function AuthFormPanel({ mode }: Props) {
  const isLogin = mode === "login";

  const router = useRouter();
  const searchParams = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // OAuth error handler
  useEffect(() => {
    const oauthError = searchParams.get("error");

    if (oauthError) {
      setError(oauthError);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        const result = await login(email, password);

        console.log("Login successful:", result);

        const profile = await getProfile();

        console.log("Profile:", profile);

        if (profile.user.onboardingCompleted) {
          router.push("/dashboard");
        } else {
          router.push("/onboarding");
        }
      } else {
        await register(email, password);

        setSuccess(
          "Account created! Please verify your email before signing in.",
        );
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-97.5">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {isLogin ? "Welcome back" : "Create your account"}
      </h1>

      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {isLogin
          ? "Sign in to continue to AlgoForge."
          : "Start your AI-powered coding journey."}
      </p>

      {/* OAuth */}

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            window.location.href = getGoogleAuthUrl(mode);
          }}
          className="
            flex h-11 items-center justify-center gap-2
            rounded-xl border border-zinc-200 bg-white
            text-sm font-medium transition-all
            hover:border-[#FF9324] hover:bg-orange-50
            dark:border-zinc-700 dark:bg-zinc-900
          "
        >
          <FaGoogle className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          onClick={() => {
            window.location.href = getGitHubAuthUrl(mode);
          }}
          className="
            flex h-11 items-center justify-center gap-2
            rounded-xl border border-zinc-200 bg-white
            text-sm font-medium transition-all
            hover:border-[#FF9324] hover:bg-orange-50
            dark:border-zinc-700 dark:bg-zinc-900
          "
        >
          <FaGithub />
          GitHub
        </button>
      </div>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />

        <span className="text-xs uppercase tracking-widest text-zinc-400">
          OR
        </span>

        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          {!isLogin && (
            <input
              placeholder="Full Name"
              className="
                h-11 w-full rounded-xl border border-zinc-200
                px-4 text-sm outline-none transition
                focus:border-[#FF9324]
                dark:border-zinc-700 dark:bg-zinc-900
              "
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              h-11 w-full rounded-xl border border-zinc-200
              px-4 text-sm outline-none transition
              focus:border-[#FF9324]
              dark:border-zinc-700 dark:bg-zinc-900
            "
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                h-11 w-full rounded-xl border border-zinc-200
                px-4 pr-11 text-sm outline-none transition
                focus:border-[#FF9324]
                dark:border-zinc-700 dark:bg-zinc-900
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-3 top-1/2
                -translate-y-1/2
                text-zinc-400
                hover:text-[#FF9324]
              "
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {isLogin && (
          <div className="mt-3 flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-zinc-500 hover:text-[#FF9324]"
            >
              Forgot Password?
            </Link>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
            mt-5 h-11 w-full rounded-xl
            bg-[#FF9324]
            text-sm font-semibold text-white
            transition-all
            hover:bg-[#ff9d32]
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading
            ? isLogin
              ? "Signing in..."
              : "Creating account..."
            : isLogin
              ? "Sign In"
              : "Continue"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-zinc-500">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#FF9324]"
            >
              Create one
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#FF9324]"
            >
              Sign In
            </Link>
          </>
        )}
      </p>
    </div>
  );
}