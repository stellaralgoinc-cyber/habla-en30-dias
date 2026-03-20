import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habla en 30 Días — Tu hijo ya quiere hablar. Tú eres el puente.",
  description:
    "Un programa de 30 días para despertar las primeras palabras de tu hijo desde la conexión, el juego y el amor. Para padres de niños de 1 a 4 años con retraso del habla.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
