import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabase/server";
import { SignOutButton } from "@/app/auth/SignOutButton";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="px-6 pb-16 pt-28 md:px-10 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              Back to home
            </Link>

            <SignOutButton />
          </div>

          <div className="modern-panel rounded-[2rem] p-8 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
              Dashboard
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Welcome, {user.user_metadata?.name || user.email || "User"}
            </h1>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Your session is active. This dashboard can be extended for product
              access, account settings, and user-specific data.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "User",
                  value: user.user_metadata?.name || user.email || "User",
                },
                { label: "Email", value: user.email || "-" },
                { label: "Status", value: "Authenticated" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5"
                >
                  <p className="text-sm text-[var(--muted)]">{item.label}</p>
                  <p className="mt-2 text-lg font-medium text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
