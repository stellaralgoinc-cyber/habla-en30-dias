"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { WordLog } from "@/types/database.types";
import { toast } from "sonner";

export function useWordLog() {
  const [words, setWords]     = useState<WordLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);

  const load = useCallback(async () => {
    const supabase = createClient();
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setLoading(false); return; }

    const { data, error } = await supabase
      .from("word_log")
      .select("*")
      .eq("user_id", user.id)
      .order("logged_at", { ascending: false });

    if (error) toast.error("No pudimos cargar el registro de palabras.");
    setWords(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function addWord(params: {
    wordOrSound: string;
    context?:    string;
    isFirstWord?: boolean;
  }) {
    const supabase = createClient();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setSaving(false); return false; }

    const isFirst = words.length === 0 && params.isFirstWord !== false;

    const { error } = await supabase.from("word_log").insert({
      user_id:       user.id,
      word_or_sound: params.wordOrSound,
      context:       params.context ?? null,
      is_first_word: isFirst,
      logged_at:     new Date().toISOString().split("T")[0],
    });

    setSaving(false);

    if (error) {
      toast.error("No pudimos guardar la palabra. Intenta de nuevo.");
      return false;
    }

    toast.success(
      isFirst
        ? "¡Primera palabra registrada! 🎊 Este es un momento para celebrar."
        : "Palabra registrada. ¡Cada sonido cuenta!"
    );
    await load();
    return true;
  }

  return { words, loading, saving, addWord, reload: load };
}
