"use client";

import TypingHands from "./TypingHands";

export default function CodingIllustration() {
  return (
    <div className="relative h-full w-full">
      {/* Base character */}
      <img
        src="/algoforge-bottom-left.png"
        alt="Developer coding on a laptop"
        draggable={false}
        className="
          absolute
          inset-0
          z-10
          h-full
          w-full
          object-cover
          select-none
        "
      />

      {/* Animated hands */}
      <TypingHands
        leftHandSrc="/landing/left-hand.png"
        rightHandSrc="/landing/right-hand.png"
      />

      {/* Typing indicator */}
      <div
        className="
          absolute
          bottom-[20%]
          left-[43%]
          z-50
          flex
          items-center
          gap-1.5
          rounded-full
          border
          border-orange-200
          bg-white/90
          px-3
          py-1.5
          shadow-lg
          backdrop-blur-md
        "
      >
        <span className="text-[9px] font-semibold text-zinc-600">
          typing
        </span>

        <span className="flex gap-0.5">
          <span className="h-1 w-1 animate-bounce rounded-full bg-[#FF9324]" />

          <span
            className="h-1 w-1 animate-bounce rounded-full bg-[#FF9324]"
            style={{
              animationDelay: "100ms",
            }}
          />

          <span
            className="h-1 w-1 animate-bounce rounded-full bg-[#FF9324]"
            style={{
              animationDelay: "200ms",
            }}
          />
        </span>
      </div>
    </div>
  );
}