"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";

interface OAuthButtonProps {
  provider: "google" | "github";
}

export default function OAuthButton({
  provider,
}: OAuthButtonProps) {
  const isGoogle = provider === "google";

  return (
    <button
      type="button"
      className="
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-zinc-200
        bg-white
        text-base
        font-medium
        text-zinc-800
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:border-[#FF9324]
        hover:shadow-lg
        dark:border-zinc-700
        dark:bg-[#18181B]
        dark:text-white
      "
    >
      {isGoogle ? (
        <FaGoogle className="text-red-500" size={18} />
      ) : (
        <FaGithub size={20} />
      )}

      Continue with {isGoogle ? "Google" : "GitHub"}
    </button>
  );
}