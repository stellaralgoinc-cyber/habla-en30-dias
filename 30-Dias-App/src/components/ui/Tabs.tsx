"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = RadixTabs.Root;

export const TabsList = ({
  className,
  ...props
}: RadixTabs.TabsListProps) => (
  <RadixTabs.List
    className={cn(
      "flex items-center gap-1 rounded-2xl bg-[var(--color-primary-light)] p-1",
      className
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  ...props
}: RadixTabs.TabsTriggerProps) => (
  <RadixTabs.Trigger
    className={cn(
      "flex-1 rounded-xl px-4 py-2 font-accent text-sm font-medium transition-all duration-200",
      "text-[var(--color-text-secondary)]",
      "data-[state=active]:bg-[var(--color-surface)] data-[state=active]:text-[var(--color-primary)]",
      "data-[state=active]:shadow-card",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
      className
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: RadixTabs.TabsContentProps) => (
  <RadixTabs.Content
    className={cn(
      "mt-4 focus-visible:outline-none",
      className
    )}
    {...props}
  />
);
