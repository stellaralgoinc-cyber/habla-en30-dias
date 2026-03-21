export interface BadgeDefinition {
  id:           string;
  emoji:        string;
  nombre:       string;
  descripcion:  string;
  categoria:    "conexion" | "juego" | "palabras" | "constancia" | "bitacora" | "resiliencia";
  comoDesbloquear: string;
  isPremium?:   boolean;
}

export const BADGES: BadgeDefinition[] = [
  // CONEXIÓN
  {
    id:              "primera-semilla",
    emoji:           "🌱",
    nombre:          "Primera Semilla",
    descripcion:     "Completaste el primer día del programa. ¡Todo gran viaje empieza con un paso!",
    categoria:       "conexion",
    comoDesbloquear: "Completa el Día 1",
  },
  {
    id:              "mirada-profunda",
    emoji:           "👁️",
    nombre:          "Mirada Profunda",
    descripcion:     "Has practicado 5 días de juegos de contacto visual. Esa conexión es poderosa.",
    categoria:       "conexion",
    comoDesbloquear: "Completa 5 días de la Semana 1",
  },
  {
    id:              "primer-vinculo",
    emoji:           "🤝",
    nombre:          "Primer Vínculo",
    descripcion:     "Completaste toda la Semana 1. Conexión sin palabras: domina.",
    categoria:       "conexion",
    comoDesbloquear: "Completa todos los días de la Semana 1 (Días 1-7)",
  },

  // JUEGO
  {
    id:              "tesoro-sonoro",
    emoji:           "🎵",
    nombre:          "Tesoro Sonoro",
    descripcion:     "Jugaste el Tesoro Sonoro al menos 3 veces. Tu hijo ya escucha el mundo diferente.",
    categoria:       "juego",
    comoDesbloquear: "Completa los días 3 y 8 del programa",
  },
  {
    id:              "carrera-campeona",
    emoji:           "🏎️",
    nombre:          "Carrera Campeona",
    descripcion:     "Completaste el juego Carrera de Palabras. ¡Vamos, listo, ya!",
    categoria:       "juego",
    comoDesbloquear: "Completa el Día 5 del programa",
  },
  {
    id:              "maestra-del-juego",
    emoji:           "🎮",
    nombre:          "Maestra del Juego",
    descripcion:     "Completaste toda la Semana 2. El juego con intención ya es tu herramienta.",
    categoria:       "juego",
    comoDesbloquear: "Completa todos los días de la Semana 2 (Días 8-14)",
  },

  // PALABRAS
  {
    id:              "primer-sonido",
    emoji:           "🌸",
    nombre:          "Primer Sonido",
    descripcion:     "Registraste el primer sonido de tu hijo en el Registro de Palabras. Ese sonido es historia.",
    categoria:       "palabras",
    comoDesbloquear: "Registra el primer sonido en el Registro de Palabras",
  },
  {
    id:              "primera-palabra",
    emoji:           "💬",
    nombre:          "Primera Palabra",
    descripcion:     "¡Tu hijo dijo su primera palabra registrada! Este momento siempre lo recordarás.",
    categoria:       "palabras",
    comoDesbloquear: "Registra la primera palabra en el Registro de Palabras",
  },
  {
    id:              "eco-perfecto",
    emoji:           "🎤",
    nombre:          "Eco Perfecto",
    descripcion:     "7 días practicando el Eco Emocional. Tu hijo sabe que sus sonidos tienen valor.",
    categoria:       "palabras",
    comoDesbloquear: "Completa los días de la Semana 1 con práctica de Eco Emocional (Día 4 + Días de la semana 3)",
  },

  // CONSTANCIA
  {
    id:              "tres-dias",
    emoji:           "🔥",
    nombre:          "3 Días Seguidos",
    descripcion:     "¡Tres días consecutivos! Ya estás construyendo el hábito.",
    categoria:       "constancia",
    comoDesbloquear: "Logra una racha de 3 días seguidos",
  },
  {
    id:              "siete-dias",
    emoji:           "⚡",
    nombre:          "7 Días Seguidos",
    descripcion:     "¡Una semana completa sin faltar! Eso es dedicación real.",
    categoria:       "constancia",
    comoDesbloquear: "Logra una racha de 7 días seguidos",
  },
  {
    id:              "catorce-dias",
    emoji:           "💎",
    nombre:          "14 Días Seguidos",
    descripcion:     "Dos semanas seguidas. Eres el ejemplo de constancia que tu hijo necesita.",
    categoria:       "constancia",
    comoDesbloquear: "Logra una racha de 14 días seguidos",
  },
  {
    id:              "treinta-dias",
    emoji:           "🏆",
    nombre:          "30 Días Completados",
    descripcion:     "¡Lo lograste! Completaste el programa completo. Tu hijo tiene una mamá extraordinaria.",
    categoria:       "constancia",
    comoDesbloquear: "Completa los 30 días del programa",
    isPremium:       true,
  },

  // BITÁCORA
  {
    id:              "primera-entrada",
    emoji:           "✍️",
    nombre:          "Primera Entrada",
    descripcion:     "Escribiste tu primera entrada en la Bitácora. Cada palabra que escribes también es progreso.",
    categoria:       "bitacora",
    comoDesbloquear: "Escribe tu primera entrada en la Bitácora",
  },
  {
    id:              "observadora-activa",
    emoji:           "📖",
    nombre:          "Observadora Activa",
    descripcion:     "7 entradas consecutivas en la Bitácora. Eres la cronista del progreso de tu hijo.",
    categoria:       "bitacora",
    comoDesbloquear: "Escribe 7 entradas consecutivas en la Bitácora",
  },
  {
    id:              "guardadora-momentos",
    emoji:           "🌟",
    nombre:          "Guardadora de Momentos",
    descripcion:     "5 entradas marcadas como especiales. Esos momentos son el tesoro más valioso.",
    categoria:       "bitacora",
    comoDesbloquear: "Marca 5 entradas como momentos especiales (⭐) en la Bitácora",
  },

  // RESILIENCIA
  {
    id:              "reinicio-conectivo",
    emoji:           "🧘",
    nombre:          "Reinicio Conectivo",
    descripcion:     "Usaste el Reinicio Conectivo cuando lo necesitaste. Pedir pausa es señal de sabiduría.",
    categoria:       "resiliencia",
    comoDesbloquear: "Usa el Reinicio Conectivo al menos una vez",
  },
  {
    id:              "dia-dificil",
    emoji:           "💪",
    nombre:          "Día Difícil Superado",
    descripcion:     "Registraste un día difícil y de todas formas completaste la sesión. Eso es amor en acción.",
    categoria:       "resiliencia",
    comoDesbloquear: "Completa una sesión en un día que marcaste como 'Fue difícil'",
  },
  {
    id:              "constancia-con-amor",
    emoji:           "❤️",
    nombre:          "Constancia con Amor",
    descripcion:     "Volviste después de un día ausente. Lo que importa no es la perfección, sino el regreso.",
    categoria:       "resiliencia",
    comoDesbloquear: "Completa una sesión después de haber faltado al menos un día",
  },
];

export const BADGE_MAP = Object.fromEntries(
  BADGES.map((b) => [b.id, b])
) as Record<string, BadgeDefinition>;

export const BADGE_CATEGORIES = {
  conexion:    "Conexión",
  juego:       "Juego",
  palabras:    "Palabras",
  constancia:  "Constancia",
  bitacora:    "Bitácora",
  resiliencia: "Resiliencia",
} as const;
