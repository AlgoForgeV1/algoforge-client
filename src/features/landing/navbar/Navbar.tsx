"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    if (latest < 80) {
      setHidden(false);
      return;
    }

    if (diff > 4) {
      setHidden(true); 
    } else if (diff < -4) {
      setHidden(false); 
    }
  });

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-6">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{
          opacity: hidden ? 0 : 1,
          y: hidden ? -100 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          flex
          h-[68px]
          w-full
          max-w-7xl
          items-center
          justify-between

          rounded-full

          border
          border-white/8
          dark:border-white/8

          bg-white/55
          dark:bg-white/[0.035]

          px-8

          backdrop-blur-[30px]
          supports-[backdrop-filter]:backdrop-blur-[30px]

          shadow-[0_10px_40px_rgba(0,0,0,.08)]
          dark:shadow-[0_12px_40px_rgba(0,0,0,.22)]

          transition-all
          duration-300
          overflow-hidden
          "
      >
        <div
          className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-orange-500/5
          via-transparent
          to-orange-500/5
          pointer-events-none
          "
        />

        <Logo />
        <Navigation />
        <NavbarActions />
      </motion.nav>
    </header>
  );
}