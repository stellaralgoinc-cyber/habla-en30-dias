import { redirect } from "next/navigation";

// Registration is now gated behind payment. Visiting /registro sends the user
// directly to /checkout to purchase the program first.
export default function RegistroPage() {
  redirect("/checkout");
}
