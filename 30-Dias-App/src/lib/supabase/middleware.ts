import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import type { Database } from "@/types/database.types";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Protected dashboard routes
  if (
    pathname.startsWith("/inicio") ||
    pathname.startsWith("/calendario") ||
    pathname.startsWith("/dia") ||
    pathname.startsWith("/bitacora") ||
    pathname.startsWith("/progreso") ||
    pathname.startsWith("/capitulos") ||
    pathname.startsWith("/logros") ||
    pathname.startsWith("/perfil")
  ) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirect authenticated users away from auth pages
  if (user && (pathname === "/login" || pathname === "/registro")) {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }

  return supabaseResponse;
}
