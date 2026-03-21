-- ============================================================
-- Habla en 30 Días — Initial Schema
-- ============================================================
-- Run this in your Supabase SQL editor or via `supabase db push`
-- ============================================================

-- ─── Extensions ───────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Enums ────────────────────────────────────────────────
create type speech_stage as enum (
  'pre-verbal',
  'primeras-silabas',
  'primeras-palabras',
  'frases-simples'
);

create type mood_type as enum (
  'excelente',
  'bien',
  'dificil'
);

-- ============================================================
-- TABLES
-- ============================================================

-- ─── profiles ─────────────────────────────────────────────
-- One row per auth.users user. Created automatically via trigger.
create table public.profiles (
  id                  uuid        primary key references auth.users(id) on delete cascade,
  full_name           text,
  has_access          boolean     not null default false,
  stripe_customer_id  text        unique,
  stripe_payment_id   text,
  onboarding_done     boolean     not null default false,
  created_at          timestamptz not null default now()
);

-- ─── child_profiles ───────────────────────────────────────
create table public.child_profiles (
  id                  uuid          primary key default uuid_generate_v4(),
  user_id             uuid          not null references public.profiles(id) on delete cascade,
  child_name          text          not null,
  birth_date          date,
  avatar_url          text,
  speech_stage        speech_stage  not null default 'primeras-palabras',
  started_program_at  timestamptz   not null default now(),
  created_at          timestamptz   not null default now()
);

-- ─── day_progress ─────────────────────────────────────────
create table public.day_progress (
  id            uuid        primary key default uuid_generate_v4(),
  user_id       uuid        not null references public.profiles(id) on delete cascade,
  day_number    int         not null check (day_number between 1 and 30),
  completed_at  timestamptz,
  checklist     jsonb       not null default '{}',
  mood          mood_type,
  phase_times   jsonb       not null default '{}',
  created_at    timestamptz not null default now(),
  unique (user_id, day_number)
);

-- ─── bitacora_entries ─────────────────────────────────────
create table public.bitacora_entries (
  id                  uuid        primary key default uuid_generate_v4(),
  user_id             uuid        not null references public.profiles(id) on delete cascade,
  day_number          int         not null check (day_number between 1 and 30),
  entry_date          date        not null default current_date,
  observed_advance    text        not null,
  connection_moment   text,
  parent_feeling      text,
  is_weekly_star      boolean     not null default false,
  is_weekly_victory   boolean     not null default false,
  created_at          timestamptz not null default now()
);

-- ─── word_log ─────────────────────────────────────────────
create table public.word_log (
  id              uuid        primary key default uuid_generate_v4(),
  user_id         uuid        not null references public.profiles(id) on delete cascade,
  word_or_sound   text        not null,
  context         text,
  is_first_word   boolean     not null default false,
  logged_at       timestamptz not null default now(),
  created_at      timestamptz not null default now()
);

-- ─── achievements ─────────────────────────────────────────
create table public.achievements (
  id            uuid        primary key default uuid_generate_v4(),
  user_id       uuid        not null references public.profiles(id) on delete cascade,
  badge_id      text        not null,
  unlocked_at   timestamptz not null default now(),
  unique (user_id, badge_id)
);

-- ============================================================
-- INDEXES
-- ============================================================
create index on public.child_profiles  (user_id);
create index on public.day_progress    (user_id);
create index on public.bitacora_entries(user_id);
create index on public.bitacora_entries(user_id, day_number);
create index on public.word_log        (user_id);
create index on public.word_log        (user_id, logged_at desc);
create index on public.achievements    (user_id);

-- ============================================================
-- TRIGGER: auto-create profile on sign-up
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table public.profiles        enable row level security;
alter table public.child_profiles  enable row level security;
alter table public.day_progress    enable row level security;
alter table public.bitacora_entries enable row level security;
alter table public.word_log        enable row level security;
alter table public.achievements    enable row level security;

-- ─── profiles ─────────────────────────────────────────────
create policy "profiles: users can view own"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can only update safe fields (full_name, onboarding_done).
-- has_access and stripe_* are locked: users cannot elevate their own access.
create policy "profiles: users can update own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (
    auth.uid() = id
    AND has_access         = (select has_access         from public.profiles where id = auth.uid())
    AND stripe_customer_id IS NOT DISTINCT FROM (select stripe_customer_id from public.profiles where id = auth.uid())
    AND stripe_payment_id  IS NOT DISTINCT FROM (select stripe_payment_id  from public.profiles where id = auth.uid())
  );

-- Service role (Stripe webhook) can update any profile
create policy "profiles: service role full access"
  on public.profiles for all
  using (auth.role() = 'service_role');

-- ─── child_profiles ───────────────────────────────────────
create policy "child_profiles: owner select"
  on public.child_profiles for select
  using (auth.uid() = user_id);

create policy "child_profiles: owner insert"
  on public.child_profiles for insert
  with check (auth.uid() = user_id);

create policy "child_profiles: owner update"
  on public.child_profiles for update
  using (auth.uid() = user_id);

create policy "child_profiles: owner delete"
  on public.child_profiles for delete
  using (auth.uid() = user_id);

-- ─── day_progress ─────────────────────────────────────────
create policy "day_progress: owner select"
  on public.day_progress for select
  using (auth.uid() = user_id);

create policy "day_progress: owner insert"
  on public.day_progress for insert
  with check (auth.uid() = user_id);

create policy "day_progress: owner update"
  on public.day_progress for update
  using (auth.uid() = user_id);

-- ─── bitacora_entries ─────────────────────────────────────
create policy "bitacora_entries: owner select"
  on public.bitacora_entries for select
  using (auth.uid() = user_id);

create policy "bitacora_entries: owner insert"
  on public.bitacora_entries for insert
  with check (auth.uid() = user_id);

create policy "bitacora_entries: owner update"
  on public.bitacora_entries for update
  using (auth.uid() = user_id);

create policy "bitacora_entries: owner delete"
  on public.bitacora_entries for delete
  using (auth.uid() = user_id);

-- ─── word_log ─────────────────────────────────────────────
create policy "word_log: owner select"
  on public.word_log for select
  using (auth.uid() = user_id);

create policy "word_log: owner insert"
  on public.word_log for insert
  with check (auth.uid() = user_id);

create policy "word_log: owner delete"
  on public.word_log for delete
  using (auth.uid() = user_id);

-- ─── achievements ─────────────────────────────────────────
create policy "achievements: owner select"
  on public.achievements for select
  using (auth.uid() = user_id);

create policy "achievements: owner insert"
  on public.achievements for insert
  with check (auth.uid() = user_id);
