"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showClose?: boolean;
}

const sizeMap = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  xl:   "max-w-xl",
  full: "max-w-full m-4",
};

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  size = "md",
  showClose = true,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full",
            "bg-[var(--color-surface)] rounded-3xl shadow-warm border border-[var(--color-border)]",
            "p-6 focus:outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "duration-200",
            sizeMap[size],
            className
          )}
        >
          {(title || showClose) && (
            <div className="flex items-start justify-between mb-4">
              <div>
                {title && (
                  <Dialog.Title className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {description}
                  </Dialog.Description>
                )}
              </div>
              {showClose && (
                <Dialog.Close className="rounded-xl p-2 text-[var(--color-muted)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-colors">
                  <X size={20} />
                  <span className="sr-only">Cerrar</span>
                </Dialog.Close>
              )}
            </div>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
