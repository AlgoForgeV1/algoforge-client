"use client";

import { ReactNode } from "react";
import AuthPreview from "./AuthPreview";

interface Props {
  children: ReactNode;
}

export default function AuthContainer({ children }: Props) {
  return (
    <section
      className="
        relative
        z-10

        flex

        h-[88vh]
        max-h-[760px]
        min-h-[620px]

        w-[92vw]
        max-w-[1320px]

        overflow-hidden

        rounded-[32px]

        border
        border-black/5
        dark:border-white/10

        bg-white
        dark:bg-[#111214]

        shadow-[0_24px_70px_rgba(0,0,0,.08)]
        dark:shadow-[0_40px_120px_rgba(0,0,0,.55)]

        transition-colors
        duration-500
      "
    >
      {/* Left Panel */}

      <div
        className="
          flex
          w-[45%]
          items-center
          justify-center

          px-8
          lg:px-10
          xl:px-12
        "
      >
        {children}
      </div>

      {/* Right Preview */}

      <div
        className="
          relative
          hidden
          w-[55%]
          overflow-hidden
          lg:flex
        "
      >
        <AuthPreview />
      </div>
    </section>
  );
}