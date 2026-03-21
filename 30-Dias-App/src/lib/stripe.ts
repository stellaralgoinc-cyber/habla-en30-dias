import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const PRICE_CONFIG = {
  amount:       4900, // $49.00 USD (in cents)
  currency:     "usd",
  productName:  "Habla en 30 Días — Acceso de por vida",
  description:  "Programa completo de 30 días para despertar el habla de tu hijo. Acceso de por vida.",
} as const;
