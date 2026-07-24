"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "./nav-links";

export default function Navigation() {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative"
        >
          <span
            className="
            text-[15px]
            font-medium
            text-zinc-600
            transition-colors
            duration-200
            group-hover:text-black
            dark:text-zinc-400
            dark:group-hover:text-white
            "
          >
            {item.title}
          </span>

          <motion.span
            layoutId="navbar-underline"
            className="
            absolute
            -bottom-2
            left-0
            h-[2px]
            w-0
            rounded-full
            bg-orange-500
            transition-all
            duration-300
            group-hover:w-full
            "
          />
        </Link>
      ))}
    </div>
  );
}