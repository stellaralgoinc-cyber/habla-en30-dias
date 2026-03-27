-- Migration 002: Add unique constraint to bitacora_entries
-- This enables upsert (ON CONFLICT) to work correctly.
-- Run this in Supabase SQL Editor for your live database.

-- Drop the plain index if it exists (won't enforce uniqueness for ON CONFLICT)
DROP INDEX IF EXISTS bitacora_entries_user_id_day_number_idx;

-- Add a proper unique constraint so upsert can use ON CONFLICT (user_id, day_number)
ALTER TABLE public.bitacora_entries
  ADD CONSTRAINT bitacora_entries_user_id_day_number_key UNIQUE (user_id, day_number);
