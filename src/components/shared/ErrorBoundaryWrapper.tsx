"use client";

import { usePathname } from "next/navigation";
import { ErrorBoundary } from "./ErrorBoundary";
import type { ReactNode } from "react";

export function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // key={pathname} forces ErrorBoundary to remount on every route change,
  // clearing any caught error so the new page renders correctly.
  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>;
}
