import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardSidebar } from "@/components/shared/DashboardSidebar";
import { BottomNav } from "@/components/shared/BottomNav";
import { ReinicoConectivoButton } from "@/components/dashboard/ReinicoConectivo";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("has_access, onboarding_done")
    .eq("id", user.id)
    .single();

  if (!profile?.has_access) {
    redirect("/checkout");
  }

  if (!profile?.onboarding_done) {
    redirect("/checkout/success");
  }

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)]">
      <DashboardSidebar />
      <main className="flex-1 min-w-0 pb-20 md:pb-0">
        <div className="max-w-2xl mx-auto px-4 py-6 md:px-6 md:py-8">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </div>
      </main>
      <BottomNav />
      <ReinicoConectivoButton />
    </div>
  );
}
