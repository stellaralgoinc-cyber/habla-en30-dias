"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { BitacoraEntry } from "@/types/database.types";
import { toast } from "sonner";

export function useBitacora() {
  const [entries, setEntries] = useState<BitacoraEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);

  const load = useCallback(async () => {
    const supabase = createClient();
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setLoading(false); return; }

    const { data, error } = await supabase
      .from("bitacora_entries")
      .select("*")
      .eq("user_id", user.id)
      .order("day_number", { ascending: true });

    if (error) {
      toast.error("No pudimos cargar tu Bitácora.");
    }
    setEntries(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function saveEntry(params: {
    dayNumber:        number;
    observedAdvance:  string;
    connectionMoment?: string;
    parentFeeling?:   string;
  }) {
    const supabase = createClient();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setSaving(false); return false; }

    const { error } = await supabase
      .from("bitacora_entries")
      .upsert(
        {
          user_id:           user.id,
          day_number:        params.dayNumber,
          entry_date:        new Date().toISOString().split("T")[0],
          observed_advance:  params.observedAdvance,
          connection_moment: params.connectionMoment ?? null,
          parent_feeling:    params.parentFeeling ?? null,
        },
        { onConflict: "user_id,day_number" }
      );

    setSaving(false);

    if (error) {
      toast.error("No pudimos guardar tu entrada. Intenta de nuevo.");
      return false;
    }

    await load();
    return true;
  }

  async function toggleStar(entryId: string, currentValue: boolean) {
    const supabase = createClient();
    const { error } = await supabase
      .from("bitacora_entries")
      .update({ is_weekly_star: !currentValue })
      .eq("id", entryId);

    if (error) {
      toast.error("No pudimos actualizar la entrada.");
      return;
    }

    setEntries((prev) =>
      prev.map((e) =>
        e.id === entryId ? { ...e, is_weekly_star: !currentValue } : e
      )
    );
  }

  return { entries, loading, saving, saveEntry, toggleStar, reload: load };
}
