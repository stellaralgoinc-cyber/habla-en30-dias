"use client";

import { Component, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-[var(--color-primary-light)] flex items-center justify-center">
            <AlertCircle size={28} className="text-[var(--color-primary)]" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
              Algo salió mal
            </h2>
            <p className="font-body text-sm text-[var(--color-text-secondary)] mt-1 max-w-xs">
              Hubo un problema al cargar esta sección. Por favor intenta de nuevo.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={this.handleReset}
            className="gap-2"
          >
            <RefreshCw size={16} />
            Intentar de nuevo
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
