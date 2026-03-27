-- Migration 003: Add DELETE policies for program reset
-- ⚠️ RUN THIS IN SUPABASE SQL EDITOR for your live database.
-- Migration files only run automatically on fresh setups.

-- Allow users to delete their own day_progress rows (needed for program reset)
CREATE POLICY "day_progress: owner delete"
  ON public.day_progress FOR DELETE
  USING (auth.uid() = user_id);

-- Allow users to delete their own achievements rows (needed for program reset)
CREATE POLICY "achievements: owner delete"
  ON public.achievements FOR DELETE
  USING (auth.uid() = user_id);
