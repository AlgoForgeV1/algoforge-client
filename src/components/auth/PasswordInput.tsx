"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="group">
      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Password
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="
            h-12
            w-full
            border-0
            border-b
            border-zinc-300
            bg-transparent
            pr-10
            text-base
            text-zinc-900
            placeholder:text-zinc-400
            transition-all
            duration-300
            focus:border-[#FF9324]
            focus:outline-none
            dark:border-zinc-700
            dark:text-white
            dark:placeholder:text-zinc-500
          "
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-1
            top-1/2
            -translate-y-1/2
            text-zinc-400
            transition-colors
            hover:text-[#FF9324]
          "
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}