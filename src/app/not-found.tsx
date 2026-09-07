"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

import PhoneFrame from "@/src/components/not-found/PhoneFrame";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-10 dark:bg-zinc-950">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#FF9324]/10
            blur-[120px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,147,36,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,147,36,.035)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />
      </div>

      {/* Main */}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center lg:text-left"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#FF9324]/20
              bg-[#FF9324]/5
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#FF9324]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9324]" />
            LOST IN THE FORGE
          </div>

          <h1
            className="
              text-7xl
              font-black
              tracking-[-0.06em]
              text-zinc-900
              sm:text-8xl
              dark:text-white
            "
          >
            404
          </h1>

          <h2
            className="
              mt-3
              text-2xl
              font-bold
              tracking-tight
              text-zinc-900
              sm:text-3xl
              dark:text-white
            "
          >
            This page got cooked.
          </h2>

          <p
            className="
              mt-4
              max-w-md
              text-sm
              leading-6
              text-zinc-500
              sm:text-base
              dark:text-zinc-400
            "
          >
            The page you're looking for doesn't exist anymore. While you're
            here, scroll through the Forge.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="/dashboard"
              className="
                inline-flex
                h-11
                items-center
                gap-2
                rounded-xl
                bg-[#FF9324]
                px-5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition
                hover:bg-[#ff9d32]
                active:scale-[0.98]
              "
            >
              <Home size={17} />
              Back to Dashboard
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="
                inline-flex
                h-11
                items-center
                gap-2
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-5
                text-sm
                font-medium
                text-zinc-700
                transition
                hover:border-[#FF9324]
                hover:text-[#FF9324]
                dark:border-zinc-800
                dark:bg-zinc-900
                dark:text-zinc-300
              "
            >
              <ArrowLeft size={17} />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Phone */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            rotate: 4,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [2, 1, 2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <PhoneFrame />
          </motion.div>

          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-10
              -z-10
              rounded-full
              bg-[#FF9324]/10
              blur-3xl
            "
          />
        </motion.div>
      </div>

   
    </main>
  );
}