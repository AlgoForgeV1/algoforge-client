import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-6 flex items-start justify-between gap-4",
        className
      )}
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="h-5 w-1 rounded-full bg-orange-500" />

          <h2 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="mt-2 pl-4 text-sm text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}