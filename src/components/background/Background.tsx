"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#FFFDF9] dark:bg-[#050505] transition-colors duration-500">

<div
  className="
    absolute
    -top-[280px]
    -left-[280px]
    h-[800px]
    w-[800px]
    rounded-full
    bg-orange-500/12
    blur-[150px]
  "
/>

<div
  className="
    absolute
    -top-[240px]
    -right-[240px]
    h-[760px]
    w-[760px]
    rounded-full
    bg-orange-400/10
    blur-[150px]
  "
/>

<div
  className="
    absolute
    left-1/2
    -bottom-[300px]
    h-[850px]
    w-[850px]
    -translate-x-1/2
    rounded-full
    bg-orange-500/11
    blur-[160px]
  "
/>

<div
  className="
    absolute
    left-1/2
    top-1/2
    h-[800px]
    w-[800px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-orange-400/4
    blur-[200px]
  "
/>

      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />


      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.08)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}