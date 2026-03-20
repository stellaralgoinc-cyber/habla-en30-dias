export interface SessionPhase {
  nombre:       string;
  duracionMin:  number;
  descripcion:  string;
  pasos:        string[];
  recordatorio?: string;
}

export interface Microjuego {
  id:          string;
  nombre:      string;
  objetivo:    string;
  duracionMin: number;
  materiales?: string[];
  pasos:       string[];
  trucoPro?:   string;
  variante?:   string;
}

export interface ChecklistItem {
  id:          string;
  label:       string;
  descripcion: string;
}

export interface ErrorComun {
  error:       string;
  reencuadre:  string;
}

export interface DayContent {
  day:                   number;
  week:                  number;
  weekTheme:             string;
  weekColor:             string;
  titulo:                string;
  subtitulo:             string;
  capitulo:              number;
  loEsencial:            string;
  objetivoDia:           string;
  faseConexion:          SessionPhase;
  faseJuego:             SessionPhase;
  faseCierre:            SessionPhase;
  microjuegos:           Microjuego[];
  checklist:             ChecklistItem[];
  indicadoresProgreso:   string[];
  consejoDia?:           string;
  fraseMotivacional:     string;
  erroresComunes:        ErrorComun[];
  imagePromptHint:       string;
}

export type Mood = "excelente" | "bien" | "dificil";

export type SpeechStage =
  | "pre-verbal"
  | "primeras-silabas"
  | "primeras-palabras"
  | "frases-simples";

export const SPEECH_STAGE_LABELS: Record<SpeechStage, string> = {
  "pre-verbal":        "Todavía no dice palabras, pero se comunica con gestos",
  "primeras-silabas":  "Dice ba, ma, pa u otros sonidos",
  "primeras-palabras": "Dice algunas palabras aisladas",
  "frases-simples":    "Está combinando 2 palabras",
};

export const WEEK_THEMES: Record<number, { name: string; color: string; colorVar: string }> = {
  1: { name: "Conectar sin palabras",    color: "#9B8EC4", colorVar: "var(--color-accent-lavender)" },
  2: { name: "Jugar con significado",    color: "#E8847A", colorVar: "var(--color-accent-rose)" },
  3: { name: "Las palabras despiertan",  color: "#6DB8D4", colorVar: "var(--color-accent-sky)" },
  4: { name: "El lenguaje vive en todo", color: "#7DB87A", colorVar: "var(--color-accent-sage)" },
};
