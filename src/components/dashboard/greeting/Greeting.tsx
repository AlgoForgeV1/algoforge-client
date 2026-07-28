"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { subtitles } from "./greetings";

interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  const [subtitle, setSubtitle] = useState(subtitles[0]);

  const hour = new Date().getHours();

  let greeting = "Welcome Back";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 23) {
    greeting = "Good Evening";
  } else {
    greeting = "Still Grinding?";
  }

  useEffect(() => {
    setSubtitle(
      subtitles[Math.floor(Math.random() * subtitles.length)]
    );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {greeting}, <span className="text-orange-500">{name}</span> 👋
      </h1>

      <p className="mt-3 max-w-xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </motion.section>
  );
}