"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import type { ChildProfile } from "@/types/database.types";

export function useChildProfile() {
  const [profile, setProfile] = useState<ChildProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    async function load() {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const { data, error: err } = await supabase
        .from("child_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (err && err.code !== "PGRST116") {
        setError("No pudimos cargar el perfil de tu hijo.");
      }
      setProfile(data);
      setLoading(false);
    }
    load();
  }, []);

  return { profile, loading, error };
}
