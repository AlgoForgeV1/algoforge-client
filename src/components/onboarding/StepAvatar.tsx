"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Upload,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  previous: () => void;
}

export default function StepAvatar({ previous }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);

    // TODO:
    // Upload later
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF9324]">
          STEP 4
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Add your profile picture
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          This is optional. You can always change it later from your profile
          settings.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
        {/* Avatar */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => inputRef.current?.click()}
          className="
            group
            relative
            mx-auto
            flex
            h-48
            w-48
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-2
            border-dashed
            border-orange-300
            bg-orange-50
            transition-all
            hover:border-[#FF9324]
            dark:border-orange-500/40
            dark:bg-zinc-900
          "
        >
          {preview ? (
            <img
              src={preview}
              alt="avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-full bg-[#FF9324]/10 p-4 text-[#FF9324]">
                <Camera size={30} />
              </div>

              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                Upload Photo
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.button>

        {/* Right Panel */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Choose your avatar
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Upload an image from your device or continue with the default
            avatar. A square image works best.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => inputRef.current?.click()}
              className="
                flex
                h-11
                items-center
                gap-2
                rounded-xl
                bg-[#FF9324]
                px-5
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-[#ff9d32]
              "
            >
              <Upload size={18} />
              Upload Photo
            </button>

            <button
              className="
                flex
                h-11
                items-center
                gap-2
                rounded-xl
                border
                border-zinc-300
                px-5
                text-sm
                font-medium
                text-zinc-700
                transition-all
                hover:border-[#FF9324]
                hover:text-[#FF9324]
                dark:border-zinc-700
                dark:text-zinc-300
              "
            >
              <User size={18} />
              Use Default
            </button>
          </div>

          <input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleImage(e.target.files[0]);
              }
            }}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={previous}
          className="
            flex
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
            transition-all
            hover:border-[#FF9324]
            hover:text-[#FF9324]
            dark:border-zinc-700
            dark:bg-zinc-900
            dark:text-zinc-300
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-xl
            bg-[#FF9324]
            px-6
            text-sm
            font-semibold
            text-white
            transition-all
            hover:bg-[#ff9d32]
            hover:shadow-lg
            hover:shadow-orange-500/20
          "
        >
          Build My Profile
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}