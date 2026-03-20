import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Habla en 30 Días — Despierta las Primeras Palabras de tu Hijo",
  description:
    "Un programa de 30 días para padres de niños con retraso del habla. Conexión, juego y amor como herramientas principales.",
  openGraph: {
    title: "Habla en 30 Días",
    description: "Tu hijo ya quiere hablar. Tú eres el puente.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body className="antialiased bg-bg text-text-primary font-body">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "var(--color-surface)",
              color: "var(--color-text-primary)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              fontFamily: "var(--font-body)",
            },
          }}
        />
      </body>
    </html>
  );
}
