import type { ReactNode } from "react";

import { RightPanel, Sidebar, Topbar } from "@/src/components/dashboard/layout";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-white text-zinc-900 dark:bg-[#09090B] dark:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 dark:bg-orange-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[160px]" />
      </div>

      <div className="grid h-screen grid-cols-[280px_1fr_360px]">
        <Sidebar />

        <main className="flex min-w-0 flex-col overflow-hidden border-x border-black/5 dark:border-white/5">
          <Topbar />

          <div className="flex-1 overflow-y-auto overscroll-contain no-scrollbar p-8">
            {children}
          </div>
        </main>

        <RightPanel />
      </div>
    </div>
  );
}