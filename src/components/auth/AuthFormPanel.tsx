"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";

interface Props {
  mode: "login" | "signup";
}

export default function AuthFormPanel({ mode }: Props) {
  const isLogin = mode === "login";
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full max-w-[390px]">
      {/* Heading */}

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
          className="
            flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-zinc-200
            bg-white
            text-sm
            font-medium
            transition-all
            hover:border-[#FF9324]
            hover:bg-orange-50
            dark:border-zinc-700
            dark:bg-zinc-900
          "
        >
          <FaGoogle className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          className="
            flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-zinc-200
            bg-white
            text-sm
            font-medium
            transition-all
            hover:border-[#FF9324]
            hover:bg-orange-50
            dark:border-zinc-700
            dark:bg-zinc-900
          "
        >
          <FaGithub />
          GitHub
        </button>
      </div>

      {/* Divider */}

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />

        <span className="text-xs uppercase tracking-widest text-zinc-400">
          OR
        </span>

        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
      </div>

      {/* Form */}

      <div className="space-y-3">
        {!isLogin && (
          <input
            placeholder="Full Name"
            className="
              h-11
              w-full
              rounded-xl
              border
              border-zinc-200
              px-4
              text-sm
              outline-none
              transition
              focus:border-[#FF9324]
              dark:border-zinc-700
              dark:bg-zinc-900
            "
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="
            h-11
            w-full
            rounded-xl
            border
            border-zinc-200
            px-4
            text-sm
            outline-none
            transition
            focus:border-[#FF9324]
            dark:border-zinc-700
            dark:bg-zinc-900
          "
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="
              h-11
              w-full
              rounded-xl
              border
              border-zinc-200
              px-4
              pr-11
              text-sm
              outline-none
              transition
              focus:border-[#FF9324]
              dark:border-zinc-700
              dark:bg-zinc-900
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-zinc-400
              transition-colors
              hover:text-[#FF9324]
            "
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Forgot */}

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

      {/* Button */}

      <button
        type="button"
        onClick={() => {
          if (isLogin) {
            console.log("Login will be connected later");
          } else {
            router.push("/onboarding");
          }
        }}
        className="
          mt-5
          h-11
          w-full
          rounded-xl
          bg-[#FF9324]
          text-sm
          font-semibold
          text-white
          transition-all
          hover:bg-[#ff9d32]
          active:scale-[0.98]
        "
      >
        {isLogin ? "Sign In" : "Continue"}
      </button>

      {/* Footer */}

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