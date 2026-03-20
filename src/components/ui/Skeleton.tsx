import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-[var(--color-border)]",
        className
      )}
    />
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn("rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] p-5 space-y-3", className)}>
      <Skeleton className="h-5 w-2/5" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] p-5 space-y-4">
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-32 w-full rounded-2xl" />
      <div className="flex gap-3">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 flex-1" />
      </div>
    </div>
  );
}

export function SkeletonDashboard() {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-7 w-48" />
      </div>
      <SkeletonCard />
      <SkeletonHero />
      <div className="grid grid-cols-3 gap-3">
        <SkeletonCard className="p-4" />
        <SkeletonCard className="p-4" />
        <SkeletonCard className="p-4" />
      </div>
    </div>
  );
}

export function SkeletonCalendar() {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <Skeleton className="h-7 w-52" />
        <Skeleton className="h-4 w-72" />
      </div>
      {[1, 2, 3].map((w) => (
        <div key={w} className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-14 rounded-2xl" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonList({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
