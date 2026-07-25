"use client";

import { ReactNode } from "react";
import AuthContainer from "./AuthContainer";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden

      bg-[#FFFCEF]
      dark:bg-[#09090B]

      transition-colors
      duration-500
    "
    >
      {/* Background Glow */}

      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#FF9324]/15 blur-[140px]" />

      <div className="absolute -bottom-56 -right-40 h-[600px] w-[600px] rounded-full bg-[#FF9324]/10 blur-[170px]" />

      {/* Subtle Grid */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        [background-image:linear-gradient(rgba(0,0,0,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.25)_1px,transparent_1px)]

        dark:[background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]

        bg-[size:42px_42px]
      "
      />

      <AuthContainer>{children}</AuthContainer>
    </main>
  );
}