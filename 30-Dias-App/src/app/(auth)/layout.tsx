import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <header className="px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="font-display text-xl font-bold text-[var(--color-primary)]">
            Habla en 30 Días
          </span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </main>
      <footer className="px-6 py-4 text-center">
        <p className="text-sm font-body text-[var(--color-muted)]">
          © {new Date().getFullYear()} Habla en 30 Días. Con amor para las familias de LATAM.
        </p>
      </footer>
    </div>
  );
}
