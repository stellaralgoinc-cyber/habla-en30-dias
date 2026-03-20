import { Library } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { PageTransition } from "@/components/shared/PageTransition";

const CHAPTERS = [
  {
    num:   1,
    title: "Entendiendo el Mundo de tu Hijo",
    desc:  "Aprende a leer la comunicación no verbal de tu hijo: contacto visual, gestos, y las señales que indican que ya está listo para las palabras.",
    temas: ["Contacto visual", "Comunicación preverbal", "El lenguaje del cuerpo"],
    days:  [1, 2, 4, 7],
  },
  {
    num:   2,
    title: "El Poder del Juego Conectivo",
    desc:  "El juego no es solo diversión — es el idioma natural del aprendizaje. Aprende a convertir 15 minutos de juego en lecciones de lenguaje.",
    temas: ["Tesoro Sonoro", "Carrera de Palabras", "El Juego de la Sorpresa"],
    days:  [3, 5, 6],
  },
  {
    num:   3,
    title: "Construyendo el Puente de las Palabras",
    desc:  "Ancla las primeras palabras a momentos concretos del día. 'Agua', 'come', 'más' — palabras que nacen de la vida real, no de cartillas.",
    temas: ["Palabras ancla", "Rutinas del día", "Animales y sonidos"],
    days:  [8, 9, 12, 20],
  },
  {
    num:   4,
    title: "15 Minutos que Cambian Todo",
    desc:  "La estructura de cada sesión: Conexión (5 min) → Juego Guiado (7 min) → Cierre (3 min). Por qué esta secuencia funciona.",
    temas: ["Estructura de sesión", "Conexión primero", "El cierre ritual"],
    days:  [1, 8, 15, 22],
  },
  {
    num:   5,
    title: "Cómo Despertar las Primeras Palabras",
    desc:  "Técnicas específicas: Eco Emocional, Palabra y Gesto, Canción de Dos Palabras. Cada una está diseñada para un tipo diferente de niño.",
    temas: ["Eco Emocional", "Palabra y Gesto", "Canción de Dos Palabras"],
    days:  [4, 10, 11, 15, 16, 17],
  },
  {
    num:   6,
    title: "Superando Bloqueos y Frustraciones",
    desc:  "Habrá días difíciles. El Reinicio Conectivo es tu herramienta para esos momentos — un protocolo de 3 pasos para reconectarse cuando todo se siente mal.",
    temas: ["Reinicio Conectivo", "Manejo del estrés", "Días difíciles"],
    days:  [25],
  },
  {
    num:   7,
    title: "Transforma el Día a Día",
    desc:  "Lenguaje Vivo: narrar el desayuno, el paseo, el baño. Tu voz es la herramienta más poderosa que tienes. Aprende a usarla en cada momento del día.",
    temas: ["Narración diaria", "Momentos de lenguaje", "La voz como herramienta"],
    days:  [13, 18, 19, 22, 23, 24, 26, 27],
  },
  {
    num:   8,
    title: "Celebrar los Avances y Medir el Progreso",
    desc:  "La Bitácora de Avances: cómo registrar micro-victorias que hacen visible el progreso invisible. Aprende a ver lo que está pasando.",
    temas: ["Bitácora digital", "Micro-victorias", "Revisiones semanales"],
    days:  [14, 21, 28],
  },
  {
    num:   9,
    title: "Plan de Mantenimiento",
    desc:  "El día 30 no es el final — es el comienzo. El Plan de Mantenimiento semanal asegura que los avances se consoliden para siempre.",
    temas: ["Plan semanal", "Sostenibilidad", "El día 31 en adelante"],
    days:  [29, 30],
  },
];

export default function CapitulosPage() {
  return (
    <PageTransition>
    <div className="space-y-5">
      <PageHeader
        title="Capítulos del programa"
        subtitle="La metodología completa organizada en 9 capítulos que guían los 30 días."
      />

      <div className="space-y-4">
        {CHAPTERS.map((chapter) => (
          <Card key={chapter.num} elevated>
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
                  <span className="font-accent text-sm font-bold text-[var(--color-primary)]">
                    {chapter.num}
                  </span>
                </div>
                <div>
                  <CardTitle className="text-base">{chapter.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {chapter.temas.map((t) => (
                      <Badge key={t} variant="muted" size="sm">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {chapter.desc}
              </CardDescription>
              <p className="font-accent text-xs text-[var(--color-muted)] mt-3">
                Días relacionados: {chapter.days.map((d) => `Día ${d}`).join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-[var(--color-primary-light)] border-[var(--color-primary)]/20 text-center py-4">
        <CardContent>
          <Library size={32} className="text-[var(--color-primary)] mx-auto mb-2" />
          <p className="font-body text-sm text-[var(--color-text-secondary)]">
            Todo el contenido de los capítulos se refleja en los días del programa.
            Sigue el programa diario y absorberás la metodología en acción.
          </p>
        </CardContent>
      </Card>
    </div>
    </PageTransition>
  );
}
