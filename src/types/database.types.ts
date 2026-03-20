export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id:                   string;
          full_name:            string | null;
          has_access:           boolean;
          stripe_customer_id:   string | null;
          stripe_payment_id:    string | null;
          onboarding_done:      boolean;
          created_at:           string;
        };
        Insert: {
          id:                   string;
          full_name?:           string | null;
          has_access?:          boolean;
          stripe_customer_id?:  string | null;
          stripe_payment_id?:   string | null;
          onboarding_done?:     boolean;
          created_at?:          string;
        };
        Update: {
          id?:                  string;
          full_name?:           string | null;
          has_access?:          boolean;
          stripe_customer_id?:  string | null;
          stripe_payment_id?:   string | null;
          onboarding_done?:     boolean;
          created_at?:          string;
        };
        Relationships: [];
      };
      child_profiles: {
        Row: {
          id:                   string;
          user_id:              string;
          child_name:           string;
          birth_date:           string | null;
          avatar_url:           string | null;
          speech_stage:         "pre-verbal" | "primeras-silabas" | "primeras-palabras" | "frases-simples";
          started_program_at:   string;
          created_at:           string;
        };
        Insert: {
          id?:                  string;
          user_id:              string;
          child_name:           string;
          birth_date?:          string | null;
          avatar_url?:          string | null;
          speech_stage?:        "pre-verbal" | "primeras-silabas" | "primeras-palabras" | "frases-simples";
          started_program_at?:  string;
          created_at?:          string;
        };
        Update: {
          id?:                  string;
          user_id?:             string;
          child_name?:          string;
          birth_date?:          string | null;
          avatar_url?:          string | null;
          speech_stage?:        "pre-verbal" | "primeras-silabas" | "primeras-palabras" | "frases-simples";
          started_program_at?:  string;
          created_at?:          string;
        };
        Relationships: [];
      };
      day_progress: {
        Row: {
          id:           string;
          user_id:      string;
          day_number:   number;
          completed_at: string;
          checklist:    Json;
          mood:         "excelente" | "bien" | "dificil" | null;
          phase_times:  Json;
          created_at:   string;
        };
        Insert: {
          id?:          string;
          user_id:      string;
          day_number:   number;
          completed_at?: string;
          checklist?:   Json;
          mood?:        "excelente" | "bien" | "dificil" | null;
          phase_times?: Json;
          created_at?:  string;
        };
        Update: {
          id?:          string;
          user_id?:     string;
          day_number?:  number;
          completed_at?: string;
          checklist?:   Json;
          mood?:        "excelente" | "bien" | "dificil" | null;
          phase_times?: Json;
          created_at?:  string;
        };
        Relationships: [];
      };
      bitacora_entries: {
        Row: {
          id:                 string;
          user_id:            string;
          day_number:         number;
          entry_date:         string;
          observed_advance:   string;
          connection_moment:  string | null;
          parent_feeling:     string | null;
          is_weekly_star:     boolean;
          is_weekly_victory:  boolean;
          created_at:         string;
        };
        Insert: {
          id?:                string;
          user_id:            string;
          day_number:         number;
          entry_date?:        string;
          observed_advance:   string;
          connection_moment?: string | null;
          parent_feeling?:    string | null;
          is_weekly_star?:    boolean;
          is_weekly_victory?: boolean;
          created_at?:        string;
        };
        Update: {
          id?:                string;
          user_id?:           string;
          day_number?:        number;
          entry_date?:        string;
          observed_advance?:  string;
          connection_moment?: string | null;
          parent_feeling?:    string | null;
          is_weekly_star?:    boolean;
          is_weekly_victory?: boolean;
          created_at?:        string;
        };
        Relationships: [];
      };
      word_log: {
        Row: {
          id:            string;
          user_id:       string;
          word_or_sound: string;
          context:       string | null;
          is_first_word: boolean;
          logged_at:     string;
          created_at:    string;
        };
        Insert: {
          id?:           string;
          user_id:       string;
          word_or_sound: string;
          context?:      string | null;
          is_first_word?: boolean;
          logged_at?:    string;
          created_at?:   string;
        };
        Update: {
          id?:           string;
          user_id?:      string;
          word_or_sound?: string;
          context?:      string | null;
          is_first_word?: boolean;
          logged_at?:    string;
          created_at?:   string;
        };
        Relationships: [];
      };
      achievements: {
        Row: {
          id:          string;
          user_id:     string;
          badge_id:    string;
          unlocked_at: string;
        };
        Insert: {
          id?:         string;
          user_id:     string;
          badge_id:    string;
          unlocked_at?: string;
        };
        Update: {
          id?:         string;
          user_id?:    string;
          badge_id?:   string;
          unlocked_at?: string;
        };
        Relationships: [];
      };
    };
    Views:          {
      [_ in never]: never;
    };
    Functions:      {
      [_ in never]: never;
    };
    Enums:          {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type TablesInsert<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type TablesUpdate<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];

export type Profile        = Tables<"profiles">;
export type ChildProfile   = Tables<"child_profiles">;
export type DayProgress    = Tables<"day_progress">;
export type BitacoraEntry  = Tables<"bitacora_entries">;
export type WordLog        = Tables<"word_log">;
export type Achievement    = Tables<"achievements">;
