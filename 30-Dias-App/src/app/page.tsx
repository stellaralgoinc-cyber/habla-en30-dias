import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const TESTIMONIALS = [
  {
    name:    "Andrea, mamá de Mateo (2 años)",
    quote:   "En la primera semana noté que Mateo empezó a buscarme más con la mirada. Antes casi no lo hacía. Ese pequeño cambio me llenó de esperanza.",
    days:    "Completó 30 días",
  },
  {
    name:    "Verónica, mamá de Isabella (3 años)",
    quote:   "Lo que más me ayudó fue el Reinicio Conectivo. Había días en que yo estaba frustrada y esa herramienta nos salvó a las dos.",
    days:    "21 días completados",
  },
  {
    name:    "Daniela, mamá de Tomás (18 meses)",
    quote:   "No esperaba ver resultados tan pronto, pero a los 10 días Tomás dijo 'ma' con intención. Nunca voy a olvidar ese momento.",
    days:    "Completó 30 días",
  },
  {
    name:    "Paola, mamá de Sofía (2 años 5 meses)",
    quote:   "Lo que más valoré fue que nunca me sentí juzgada. El programa entiende que hay días difíciles y te abraza en vez de presionarte.",
    days:    "28 días completados",
  },
  {
    name:    "Jimena, mamá de Lucas (3 años)",
    quote:   "Venía de meses buscando información en internet y sintiéndome perdida. Esto finalmente me dio un camino claro y confianza.",
    days:    "Completó 30 días",
  },
];

const FEATURES = [
  { emoji: "🗓️", title: "30 días estructurados", desc: "Un plan día a día. Sin adivinar, sin improvisar. Solo seguir el camino." },
  { emoji: "⏱️", title: "Solo 15 minutos al día", desc: "Tres fases: Conexión, Juego Guiado y Cierre. Diseñado para la vida real." },
  { emoji: "📖", title: "Bitácora digital", desc: "Captura cada avance. Ver el progreso acumulado cambia cómo te sientes." },
  { emoji: "🏆", title: "Logros y celebración", desc: "El programa celebra tus esfuerzos, no solo los resultados de tu hijo." },
  { emoji: "🧘", title: "Reinicio Conectivo", desc: "Cuando el día se pone difícil, un reset de 3 pasos para reconectarse." },
  { emoji: "❤️", title: "Acceso de por vida", desc: "Una vez que lo tienes, es tuyo para siempre. Sin mensualidades." },
];

const FAQS = [
  {
    q: "¿A partir de qué edad es útil este programa?",
    a: "Está diseñado para niños de 1 a 4 años. El enfoque se adapta si tu hijo aún no dice palabras (pre-verbal) o ya dice algunas silabas.",
  },
  {
    q: "¿Necesito ser terapeuta para seguirlo?",
    a: "No. El programa está creado específicamente para padres sin formación especializada. Tú eres el terapeuta que tu hijo necesita.",
  },
  {
    q: "¿Qué tan seguido tengo que usarlo?",
    a: "15 minutos al día, todos los días durante 30 días. La consistencia es lo que produce resultados, no la duración.",
  },
  {
    q: "¿Y si me pierdo un día?",
    a: "El programa tiene un apartado específico para esto. El regreso después de una pausa también es un logro que se celebra.",
  },
  {
    q: "¿Reemplaza la terapia del habla?",
    a: "No, y nunca lo pretende. Complementa cualquier terapia que lleves y te da herramientas para los 23 horas y 45 minutos del día en que no estás con un terapeuta.",
  },
  {
    q: "¿Qué incluye el pago único?",
    a: "Acceso completo a los 30 días del programa, Bitácora digital, mapa de progreso, sistema de logros, y el Reinicio Conectivo. Todo en una sola plataforma.",
  },
  {
    q: "¿Hay garantía?",
    a: "Si en 7 días no estás satisfecha, te devolvemos el dinero sin preguntas.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-display text-xl font-bold text-[var(--color-primary)]">
            Habla en 30 Días
          </span>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Iniciar sesión</Button>
            </Link>
            <Link href="/checkout">
              <Button size="sm">Comenzar →</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="default" size="md" className="mb-4">
              Para niños de 1 a 4 años
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
              Tu hijo ya quiere hablar.{" "}
              <span className="text-[var(--color-primary)]">Tú eres el puente.</span>
            </h1>
            <p className="mt-5 font-body text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Un programa de 30 días para despertar las primeras palabras de tu hijo
              desde la conexión, el juego y el amor.
            </p>
            <p className="mt-2 font-accent text-sm text-[var(--color-muted)]">
              Solo 15 minutos al día. Sin terapias forzadas. Sin sentirte sola.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/checkout">
                <Button size="lg" className="text-base">
                  Comenzar el programa
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="#como-funciona">
                <Button variant="secondary" size="lg" className="text-base">
                  Cómo funciona
                </Button>
              </Link>
            </div>
            <p className="mt-4 font-body text-xs text-[var(--color-muted)]">
              ✓ Acceso de por vida  ✓ Garantía de 7 días  ✓ Empieza hoy mismo
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden bg-[var(--color-primary-light)] border border-[var(--color-border)] flex items-center justify-center p-4">
            <Image
              src="/illustrations/hero.svg"
              alt="Mamá y bebé jugando juntos"
              width={320}
              height={320}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-[var(--color-surface)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] text-center mb-10">
            Sabemos lo que sientes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "😟", title: "La espera es angustiante", desc: "Ves a otros niños hablar y no entiendes por qué el tuyo todavía no. Esa comparación duele." },
              { emoji: "🤔", title: "El enfoque equivocado", desc: "Te dijeron 'habla más con él' pero nadie te explicó cómo. Repetir palabras sin conexión no funciona." },
              { emoji: "✨", title: "Lo que realmente funciona", desc: "La conexión emocional primero. El juego con intención. La consistencia diaria de 15 minutos." },
            ].map(({ emoji, title, desc }) => (
              <Card key={title} elevated>
                <CardContent>
                  <div className="text-4xl mb-3">{emoji}</div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)] mb-2">{title}</h3>
                  <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] text-center mb-3">
            Cómo funciona
          </h2>
          <p className="font-body text-center text-[var(--color-text-secondary)] mb-10 max-w-lg mx-auto">
            Tres pasos simples que se convierten en 30 días de transformación.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Creas conexión",
                desc: "Los primeros días son de presencia sin presión. Miras, escuchas, y simplemente estás.",
                color: "var(--color-accent-lavender)",
                img: "/illustrations/connection.svg",
              },
              {
                step: "02",
                title: "Juegas con intención",
                desc: "Microjuegos de 7 minutos que hacen que cada sonido y gesto valga el doble.",
                color: "var(--color-accent-rose)",
                img: "/illustrations/play-blocks.svg",
              },
              {
                step: "03",
                title: "Las palabras despiertan",
                desc: "Cuando la conexión es real y el juego es constante, las palabras llegan solas.",
                color: "var(--color-accent-sky)",
                img: "/illustrations/first-word.svg",
              },
            ].map(({ step, title, desc, color, img }) => (
              <div key={step} className="text-center">
                <div
                  className="relative h-40 rounded-3xl mx-auto mb-4 overflow-hidden border flex items-center justify-center p-3"
                  style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}
                >
                  <Image src={img} alt={title} width={140} height={140} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)] mb-2">{title}</h3>
                <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[var(--color-surface)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] text-center mb-10">
            Lo que encontrarás adentro
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FEATURES.map(({ emoji, title, desc }) => (
              <Card key={title} elevated>
                <CardContent>
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-accent text-sm font-bold text-[var(--color-text-primary)] mb-1">{title}</h3>
                  <p className="font-body text-xs text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] text-center mb-10">
            Lo que dicen otras mamás
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(0, 4).map(({ name, quote, days }) => (
              <Card key={name} elevated>
                <CardContent>
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={14} fill="var(--color-accent-gold)" className="text-[var(--color-accent-gold)]" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed italic mb-3">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-accent text-xs font-bold text-[var(--color-text-primary)]">{name}</p>
                    <p className="font-accent text-xs text-[var(--color-accent-green)]">{days}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precio" className="bg-[var(--color-surface)] py-16 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] text-center mb-3">
            Una inversión. Para siempre.
          </h2>
          <p className="font-body text-center text-[var(--color-text-secondary)] mb-8">
            Sin mensualidades. Sin sorpresas. Lo pagas una vez y es tuyo de por vida.
          </p>
          <Card elevated warm className="text-center">
            <CardContent>
              <Badge variant="default" size="md" className="mb-4">Acceso de por vida</Badge>
              <div className="mb-6">
                <span className="font-accent text-5xl font-black text-[var(--color-text-primary)]">$49</span>
                <span className="font-accent text-lg text-[var(--color-muted)] ml-1">USD</span>
                <p className="font-body text-xs text-[var(--color-muted)] mt-1">Pago único — sin mensualidades</p>
              </div>
              <ul className="space-y-2.5 text-left mb-6">
                {[
                  "Programa completo de 30 días",
                  "15 minutos al día — hecho para madres reales",
                  "Bitácora digital de avances",
                  "Mapa de progreso de la jornada",
                  "Sistema de logros y celebración",
                  "Reinicio Conectivo (herramienta de emergencia)",
                  "Acceso de por vida con actualizaciones",
                  "Garantía de 7 días sin preguntas",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-body text-sm text-[var(--color-text-secondary)]">
                    <Check size={16} className="text-[var(--color-accent-green)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/checkout">
                <Button fullWidth size="lg">
                  Comenzar el programa →
                </Button>
              </Link>
              <p className="font-body text-xs text-[var(--color-muted)] mt-3">
                ✓ Pago seguro con Stripe  ✓ Acceso inmediato
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] text-center mb-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <Card key={q}>
                <CardContent>
                  <h3 className="font-accent text-sm font-bold text-[var(--color-text-primary)] mb-2">{q}</h3>
                  <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-primary-light)] border-t border-[var(--color-border)] py-16 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <div className="text-5xl mb-4">🌻</div>
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-primary)] mb-3">
            El momento perfecto es ahora.
          </h2>
          <p className="font-body text-[var(--color-text-secondary)] mb-6 leading-relaxed">
            Tu hijo no necesita un terapeuta mágico.<br />
            Necesita que tú estés presente, conectada y con un plan.<br />
            <strong className="text-[var(--color-text-primary)]">Este es ese plan.</strong>
          </p>
          <Link href="/checkout">
            <Button size="xl">
              Comenzar el programa →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold text-[var(--color-primary)]">
            Habla en 30 Días
          </span>
          <p className="font-body text-sm text-[var(--color-muted)] text-center">
            Hecho con amor para las familias de LATAM © {new Date().getFullYear()}
          </p>
          <div className="flex gap-4">
            <Link href="/login" className="font-accent text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
              Iniciar sesión
            </Link>
            <Link href="/registro" className="font-accent text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
              Registrarse
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
