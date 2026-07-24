"use client";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
}: AuthInputProps) {
  return (
    <div className="group">
      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-12
          w-full
          border-0
          border-b
          border-zinc-300
          bg-transparent
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
    </div>
  );
}