import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "./AuthForm";
import { getCurrentUser } from "@/lib/supabase/server";

export default async function AuthPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pt-32">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/"
              className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              Back to home
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
                User Access
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
                Sign in to access your TECHPRIZY workspace.
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                Create an account or sign in with your existing credentials.
              </p>
            </div>

            <AuthForm />
          </div>
        </div>
      </section>
    </main>
  );
}
