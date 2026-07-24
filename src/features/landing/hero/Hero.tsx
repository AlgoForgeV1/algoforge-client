"use client";

import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroCTA from "./HeroCTA";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
  className="
    mx-auto
    flex
    min-h-[calc(100vh-120px)]
    max-w-7xl
    -translate-y-12
    flex-col
    items-center
    justify-center
    px-6
    text-center
  "
>
        <HeroHeading />

        <HeroDescription />

        <HeroCTA />

      </div>
    </section>
  );
}